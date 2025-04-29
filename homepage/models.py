from django.db import models
# from django.contrib.gis.db.models import PointField,MultiPolygonField,MultiLineStringField,MultiPointField

# -------------------------------------------   Create database name "SIGNUP"  ------------------------------------
# create table Query


# CREATE TABLE signup_data (
#     id SERIAL PRIMARY KEY,
#     firstname TEXT,
#     lastname TEXT,
#     mobileno TEXT,
#     email TEXT,
#     username TEXT,
#     password TEXT
# );

# CREATE TABLE contact_data (
#     id SERIAL PRIMARY KEY,
#     name TEXT,
#     email TEXT,
#     message TEXT
# );

class Signup(models.Model):
    id = models.AutoField(primary_key=True)
    firstname = models.TextField(blank=True, null=True)
    lastname = models.TextField(blank=True, null=True)
    mobileno = models.TextField(blank=True, null=True)
    email = models.TextField(blank=True,null=True)
    username = models.TextField(blank=True, null=True)
    password = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'signup_data'

class Contact(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.TextField(blank=True, null=True)
    email = models.TextField(blank=True, null=True)
    message = models.TextField(blank=True,null=True)

    class Meta:
        managed = False
        db_table = 'contact_data'


