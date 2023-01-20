# Todo
Assignment given by UpGrad.

# Steps To Run the Website
1. In `Todo/settings.py` adjust the database as per your convenience. If you do not have PostgresSQL installed, follow the below steps

## Setting Up PostgresSQL Database
 Install PostgresSQL and its dependencies.
```
$ sudo apt-get update
$ sudo apt-get install python-pip python-dev libpq-dev postgresql postgresql-contrib
$ sudo su - postgres
```
Now Create PostgreSQL Database and user via which django app will interact. Also grant needed privilages to the created user.
```
$ psql
# CREATE DATABASE todo;`
# CREATE USER todouser WITH PASSWORD 'ItsPOSTGRES#1';
# ALTER ROLE todouser SET client_encoding TO 'utf8';
# ALTER ROLE todouser SET default_transaction_isolation TO 'read committed';
# ALTER ROLE todouser SET timezone TO 'UTC';```
# GRANT ALL PRIVILEGES ON DATABASE todo TO todouser;
# \q
$ exit
```
## Installing Dependencies
`$ pip install requirements.txt`

## Running the server
`$ python manage.py runserver`

2. Now you can see the website on `127.0.0.1:8000`

## Details about task which could not be completed
We can schedule the delivery of mail via celery and SMTP library. I have preciously worked with celery and used it to handle writing very large csv files to SQL database. Since I had college today, I was not able to fully devote my time today.
