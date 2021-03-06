DROP TABLE IF EXISTS "basic";
DROP TABLE IF EXISTS "detail";
DROP TABLE IF EXISTS "metrics";
DROP TABLE IF EXISTS "geoloc";
DROP TABLE IF EXISTS "state_fips";
DROP TABLE IF EXISTS "region_id";
DROP TABLE IF EXISTS "locale";
DROP TABLE IF EXISTS "operating";
DROP TABLE IF EXISTS "under_investigation";
DROP TABLE IF EXISTS "main_campus";
DROP TABLE IF EXISTS "institutional_characteristics_level";
DROP TABLE IF EXISTS "ownership_peps";
DROP TABLE IF EXISTS "ownership";
DROP TABLE IF EXISTS "online_only";
DROP TABLE IF EXISTS "open_admissions_policy";
DROP TABLE IF EXISTS "degrees_awarded_predominant";
DROP TABLE IF EXISTS "degrees_awarded_highest";
DROP TABLE IF EXISTS "title_iv_eligibility_type";
DROP TABLE IF EXISTS "carnegie_size_setting";
DROP TABLE IF EXISTS "carnegie_undergrad";
DROP TABLE IF EXISTS "carnegie_basic";
DROP TABLE IF EXISTS "men_only";
DROP TABLE IF EXISTS "women_only";
DROP TABLE IF EXISTS "religious_affiliation";
CREATE TABLE "basic" (
    "id" int NOT NULL  PRIMARY KEY,
    "ope8_id" int,
    "ope6_id" int,
    "name" varchar,
    "alias" varchar,
    "city" varchar,
    "state" varchar,
    "state_fips" int,
    "zip" varchar,
    "region_id" int,
    "locale" int,
    "school_url" varchar
);
CREATE TABLE "detail" (
    "id" int NOT NULL  PRIMARY KEY,
    "operating" int,
    "under_investigation" int,
    "main_campus" int,
    "branches" int,
    "institutional_characteristics_level" int,
    "ownership_peps" int,
    "ownership" int,
    "online_only" int,
    "open_admissions_policy" int
);
CREATE TABLE "metrics" (
    "id" int NOT NULL  PRIMARY KEY,
    "accreditor_code" varchar,
    "accreditor" varchar,
    "degrees_awarded_predominant" int,
    "degrees_awarded_highest" int,
    "title_iv_approval_date" date,
    "title_iv_eligibility_type" int,
    "ft_faculty_rate" real,
    "faculty_salary" real,
    "tuition_revenue_per_fte" real,
    "price_calculator_url" varchar,
    "instructional_expenditure_per_fte" real,
    "degree_urbanization" varchar,
    "carnegie_size_setting" int,
    "carnegie_undergrad" int,
    "carnegie_basic" int,
    "men_only" int,
    "women_only" int,
    "religious_affiliation" int,
    "tuition_in_state" real,
    "tuition_out_of_state" real
);
CREATE TABLE "geoloc" (
    "id" int NOT NULL  PRIMARY KEY,
    "location_lon" real,
    "location_lat" real
);
CREATE TABLE "state_fips" (
    "code" int NOT NULL PRIMARY KEY,
    "description" varchar
);
CREATE TABLE "region_id" (
    "code" int NOT NULL PRIMARY KEY,
    "description" varchar
);
CREATE TABLE "locale" (
    "code" int NOT NULL PRIMARY KEY,
    "description" varchar
);
CREATE TABLE "operating" (
    "code" int NOT NULL PRIMARY KEY,
    "description" varchar
);
CREATE TABLE "under_investigation" (
    "code" int NOT NULL PRIMARY KEY,
    "description" varchar
);
CREATE TABLE "main_campus" (
    "code" int NOT NULL PRIMARY KEY,
    "description" varchar
);
CREATE TABLE "institutional_characteristics_level" (
    "code" int NOT NULL PRIMARY KEY,
    "description" varchar
);
CREATE TABLE "ownership_peps" (
    "code" int NOT NULL PRIMARY KEY,
    "description" varchar
);
CREATE TABLE "ownership" (
    "code" int NOT NULL PRIMARY KEY,
    "description" varchar
);
CREATE TABLE "online_only" (
    "code" int NOT NULL PRIMARY KEY,
    "description" varchar
);
CREATE TABLE "open_admissions_policy" (
    "code" int NOT NULL PRIMARY KEY,
    "description" varchar
);
CREATE TABLE "degrees_awarded_predominant" (
    "code" int NOT NULL PRIMARY KEY,
    "description" varchar
);
CREATE TABLE "degrees_awarded_highest" (
    "code" int NOT NULL PRIMARY KEY,
    "description" varchar
);
CREATE TABLE "title_iv_eligibility_type" (
    "code" int NOT NULL PRIMARY KEY,
    "description" varchar
);
CREATE TABLE "carnegie_size_setting" (
    "code" int NOT NULL PRIMARY KEY,
    "description" varchar
);
CREATE TABLE "carnegie_undergrad" (
    "code" int NOT NULL PRIMARY KEY,
    "description" varchar
);
CREATE TABLE "carnegie_basic" (
    "code" int NOT NULL PRIMARY KEY,
    "description" varchar
);
CREATE TABLE "men_only" (
    "code" int NOT NULL PRIMARY KEY,
    "description" varchar
);
CREATE TABLE "women_only" (
    "code" int NOT NULL PRIMARY KEY,
    "description" varchar
);
CREATE TABLE "religious_affiliation" (
    "code" int NOT NULL PRIMARY KEY,
    "description" varchar
)