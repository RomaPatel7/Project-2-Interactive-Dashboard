import os
import pandas as pd
import json

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session,sessionmaker
from sqlalchemy import create_engine, distinct
from sqlalchemy.sql import func

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from config import ServerName, UserName, Password, DataBase



app = Flask(__name__)


#################################################
# Database Setup
#################################################

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL','') or f"postgres://{UserName}:{Password}@localhost:5432/{DataBase}"
db = SQLAlchemy(app)

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(db.engine, reflect=True)

# Save references to each table
basic = Base.classes.basic
metrics = Base.classes.metrics
geoloc = Base.classes.geoloc
state_fips = Base.classes.state_fips
detail = Base.classes.detail
institutional_characteristics_level = Base.classes.institutional_characteristics_level
owner = Base.classes.ownership



@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

@app.route("/json")
def json():
    """Return the school metadata."""
    result = db.session.query(basic.name, basic.state,metrics.tuition_in_state,metrics.tuition_out_of_state,geoloc.location_lat,geoloc.location_lon).filter(basic.id==geoloc.id).filter(basic.id==metrics.id).all()
    schools = []
    for name, state, tuition_IS,tuition_OS, lat, lon in result:
        if tuition_IS is None:
            tuition_IS = ""
        if tuition_OS is None:
            tuition_OS = ""

        
        json = {}
        json["Name"] = name
        json["State"] = state
        json["Tuition_IS"] = tuition_IS
        json["Tuition_OS"] = tuition_OS
        json["Lat"] = lat
        json["Lon"] = lon
        schools.append(json)
    return jsonify(schools)

    
@app.route("/metric")
def metric():
    """Return data for cesar."""

    result = db.session.query(basic.name, basic.state, basic.city, metrics.tuition_in_state,metrics.tuition_out_of_state,metrics.faculty_salary, metrics.instructional_expenditure_per_fte,metrics.tuition_revenue_per_fte,geoloc.location_lat,geoloc.location_lon,state_fips.description).filter(basic.id==geoloc.id).filter(basic.id==metrics.id).filter(basic.state_fips==state_fips.code).all()

    cesars_page = []
    for name, state,city, tuition_IS,tuition_OS,fsal,expen_per_fte,tuition_rev, lat, lon,fips in result:
        if tuition_IS is None:
            tuition_IS = ""
        if tuition_OS is None:
            tuition_OS = ""       
        json = {}
        json["schoolName"] = name
        json["schoolState"] = state
        json["schoolCity"] = city
        json["tuitionIn"] = tuition_IS
        json["tuitionOut"] = tuition_OS
        json["facultySalary"] = fsal
        json["expenditurePerStudent"] = expen_per_fte
        json["tuitionRevenuePerStudent"] = tuition_rev
        json["schoolLat"] = lat
        json["schoolLong"] = lon
        json["Fips"] = fips
        cesars_page.append(json)
    return jsonify(cesars_page)


@app.route("/metric/country")
def metric_country():
    """It includes Country Averages"""

    qry = db.session.query(
        func.count(basic.state), 
        func.round(func.avg(metrics.tuition_in_state)),
        func.round(func.avg(metrics.tuition_out_of_state)),
        func.round(func.avg(metrics.instructional_expenditure_per_fte)),
        func.round(func.avg(metrics.faculty_salary)),
        func.round(func.avg(metrics.tuition_revenue_per_fte)),
        ).filter(basic.id==metrics.id)

    country_data = []
    for count,tuition_IS,tuition_OS, expenditure, faculty_Sal, revenue in qry:      
        
        json = {}
        json["No_Schools"] = count
        json["tuitionIn"] = tuition_IS
        json["tuitionOut"] = tuition_OS
        json["expenditure"] = expenditure
        json["facSalary"] = faculty_Sal
        json["tuiRevenue"] = revenue
        country_data.append(json)

    # Return a list of the column names (sample names)
    return jsonify(country_data)


@app.route("/metric/<state>")
def metric_state(state):
    """It includes state averages"""

    qry = db.session.query(
        state_fips.description,
        func.count(basic.state), 
        func.round(func.avg(metrics.tuition_in_state)),
        func.round(func.avg(metrics.tuition_out_of_state)),
        func.round(func.avg(metrics.instructional_expenditure_per_fte)),
        func.round(func.avg(metrics.faculty_salary)),
        func.round(func.avg(metrics.tuition_revenue_per_fte)),
        ).filter(basic.id==metrics.id).filter(state_fips.code==basic.state_fips)
    qry = qry.group_by(state_fips.description) 
    qry = qry.filter(state_fips.description == state)

    state_data = []
    for state,count,tuition_IS,tuition_OS, expenditure, faculty_Sal, revenue in qry:      
        
        json = {}
        json["State"] = state
        json["No_Schools"] = count
        json["tuitionIn"] = tuition_IS
        json["tuitionOut"] = tuition_OS
        json["expenditure"] = expenditure
        json["facSalary"] = faculty_Sal
        json["tuiRevenue"] = revenue
        state_data.append(json)

    # Return a list of the column names (sample names)
    return jsonify(state_data)

@app.route("/metric/<state>/<city>")
def metric_city(state,city):
    """It includes state averages"""

    qry = db.session.query(
        state_fips.description,
        basic.city,
        func.count(basic.state), 
        func.round(func.avg(metrics.tuition_in_state)),
        func.round(func.avg(metrics.tuition_out_of_state)),
        func.round(func.avg(metrics.instructional_expenditure_per_fte)),
        func.round(func.avg(metrics.faculty_salary)),
        func.round(func.avg(metrics.tuition_revenue_per_fte)),
        ).filter(basic.id==metrics.id).filter(state_fips.code==basic.state_fips)
    qry = qry.group_by(state_fips.description) 
    qry = qry.group_by(basic.city) 
    qry = qry.filter(state_fips.description == state)
    qry = qry.filter(basic.city == city)

    city_data = []
    for state,city,count,tuition_IS,tuition_OS, expenditure, faculty_Sal, revenue in qry:      
        
        json = {}
        json["State"] = state
        json["City"] = city
        json["No_Schools"] = count
        json["tuitionIn"] = tuition_IS
        json["tuitionOut"] = tuition_OS
        json["expenditure"] = expenditure
        json["facSalary"] = faculty_Sal
        json["tuiRevenue"] = revenue
        city_data.append(json)

    # Return a list of the column names (sample names)
    return jsonify(city_data)

@app.route("/metric/table/country")
def table():
    """It includes top 10 data"""

    qry = db.session.query(
        state_fips.description,
        func.count(state_fips.description), 
        func.round(func.avg(metrics.tuition_in_state)),
        func.round(func.avg(metrics.tuition_out_of_state)),
        func.round(func.avg(metrics.instructional_expenditure_per_fte)),
        func.round(func.avg(metrics.faculty_salary)),
        func.round(func.avg(metrics.tuition_revenue_per_fte)),
        ).filter(basic.id==metrics.id).filter(state_fips.code==basic.state_fips)

    qry = qry.group_by(state_fips.description)
    qry = qry.order_by(state_fips.description)

    table_data = []
    for state,count,tuition_IS,tuition_OS, expenditure, faculty_Sal, revenue in qry:      
        
        json = {}
        json["State"] = state
        json["No_Schools"] = count
        json["tuitionIn"] = tuition_IS
        json["tuitionOut"] = tuition_OS
        json["expenditure"] = expenditure
        json["facSalary"] = faculty_Sal
        json["tuiRevenue"] = revenue
        table_data.append(json)

    # Return a list of the column names (sample names)
    json_data = jsonify(table_data)
    return json_data

@app.route("/metric/table/<state>")
def table_state(state):
    """It includes top 10 data"""

    qry = db.session.query(
        basic.city,
        func.count(state_fips.description), 
        func.round(func.avg(metrics.tuition_in_state)),
        func.round(func.avg(metrics.tuition_out_of_state)),
        func.round(func.avg(metrics.instructional_expenditure_per_fte)),
        func.round(func.avg(metrics.faculty_salary)),
        func.round(func.avg(metrics.tuition_revenue_per_fte)),
        ).filter(basic.id==metrics.id).filter(state_fips.code==basic.state_fips)

    qry = qry.filter(state_fips.description == state)
    qry = qry.group_by(basic.city) 
    qry = qry.order_by(basic.city)

    table_data = []
    for city,count,tuition_IS,tuition_OS, expenditure, faculty_Sal, revenue in qry:      
        
        json = {}
        json["State"] = city
        json["No_Schools"] = count
        json["tuitionIn"] = tuition_IS
        json["tuitionOut"] = tuition_OS
        json["expenditure"] = expenditure
        json["facSalary"] = faculty_Sal
        json["tuiRevenue"] = revenue
        table_data.append(json)

    # Return a list of the column names (sample names)
    json_data = jsonify(table_data)
    return json_data


@app.route("/metric/table/<state>/<city>")
def table_city(state, city):
    """It includes top 10 data"""

    qry = db.session.query(
        basic.name,
        func.count(state_fips.description), 
        func.round(func.avg(metrics.tuition_in_state)),
        func.round(func.avg(metrics.tuition_out_of_state)),
        func.round(func.avg(metrics.instructional_expenditure_per_fte)),
        func.round(func.avg(metrics.faculty_salary)),
        func.round(func.avg(metrics.tuition_revenue_per_fte)),
        ).filter(basic.id==metrics.id).filter(state_fips.code==basic.state_fips)

    qry = qry.filter(state_fips.description == state)
    qry = qry.filter(basic.city == city)
    qry = qry.group_by(basic.name) 
    qry = qry.order_by(basic.name)

    table_data = []
    for name,count,tuition_IS,tuition_OS, expenditure, faculty_Sal, revenue in qry:      
        
        json = {}
        json["State"] = name
        json["No_Schools"] = count
        json["tuitionIn"] = tuition_IS
        json["tuitionOut"] = tuition_OS
        json["expenditure"] = expenditure
        json["facSalary"] = faculty_Sal
        json["tuiRevenue"] = revenue
        table_data.append(json)

    # Return a list of the column names (sample names)
    json_data = jsonify(table_data)
    return json_data

@app.route("/tuition")
def tuition():
    """Return a dictionary of tuitions grouped by state."""

    qry = db.session.query(basic.state,func.round(func.avg(metrics.tuition_in_state)),func.round(func.avg(metrics.tuition_out_of_state))).filter(basic.id==metrics.id)
    qry = qry.group_by(basic.state) 

    tuition = []
    for state,tuition_IS,tuition_OS in qry:      
        
        json = {}
        json["State"] = state
        json["tuitionIn"] = tuition_IS
        json["tuitionOut"] = tuition_OS
        tuition.append(json)

    return jsonify(tuition)

    
@app.route("/yen")
def yen():
    """Return a dictionary of tuitions."""

    qry = db.session.query(basic.state,metrics.tuition_in_state,metrics.tuition_out_of_state,geoloc.location_lon, geoloc.location_lat,basic.name, basic.city,basic.school_url,owner.description, institutional_characteristics_level.description,metrics.instructional_expenditure_per_fte).filter(basic.id==metrics.id).filter(basic.id==detail.id).filter(basic.id==geoloc.id).filter(detail.ownership==owner.code).filter(detail.institutional_characteristics_level == institutional_characteristics_level.code).all()

    yen = []
    for state,tuition_IS,tuition_OS, lon, lat, name, city, url, ownership,term, spend_fte in qry:      
        if tuition_IS is None:
            tuition_IS = ""
        if tuition_OS is None:
            tuition_OS = "" 
        json = {}
        json["state"] = state
        json["tuition_in_state"] = tuition_IS
        json["tuition_out_of_state"] = tuition_OS
        json["location_lon"] = lon
        json["location_lat"] = lat
        json["name"] = name
        json["city"] = city
        json["school_url"] = url
        json["ownership_desc"] = ownership
        json["institutional_characteristics_leveldesc"] = term
        json["instructional_expenditure_per_fte"] = spend_fte
        yen.append(json)

    return jsonify(yen)


@app.route("/bill", methods = ["GET"])
def bill():
    """Return dictionary of least to most expensive tuitions."""
    subq = db.session.query(metrics.id, func.max(metrics.tuition_in_state).label('max')).group_by(metrics.id).subquery()

    qry = db.session.query(basic.name, basic.state, basic.city, metrics.tuition_in_state).filter(basic.id == metrics.id).filter(metrics.tuition_in_state == subq.c.max).all()

    school = []
    
    
    for name, state, city, max_tuition in qry:
        
        json = {}
        json["name"] = name
        json["state"] = state
        json["city"] = city
        json["tuition"]= max_tuition
        school.append(json)
    return jsonify(school)

@app.route("/counts")
def counts():
    """Return number of distinct states/provinces."""
    dist = db.session.query(basic.state).distinct().count()
  
    counts = []

    json = {}
    json["count"] = dist
    counts.append(json)
    return jsonify(counts)


@app.route('/<string:page_name>/')
def render_static(page_name):
    return render_template('%s.html' % page_name)


if __name__ == "__main__":
    app.debug = False
    app.run()
