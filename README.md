# [DroneBench - Drone Deliverable Dashboard built with React](https://mainedrones.org/dronebench)


# General Architecture
Here is a general run down of the technical bits we are putting together to for the
drone dashboard.  These systems are primary used to process generic system Data
from various drones.  These include open source flight control systems such as
Betaflight or commercial applications including DJI or Parrot.

The dronebench will act as a set of micro services with a lightweight user
interface.  These services will expose REST APIs to each datasource and transaction
to be performed.

A initial set of integrations are supported to allow current community operations
to continue as the solution is built out.   These including connecting the apps
Maine Drone Society currently uses tother into a single unified platform for
drone operations at the bench.

# Business - Google GSuite
# IAAS - Google Cloud Platform
# Ecommerce PAAS - Shopify
# Email Marketing - Mailchimp
# Web Analytics - Google Analytics
# Customer Relationship Management - ProsperWorks CRM
# Big Data - Google BigQuery, Sheets, Google Storage,  DataFlow, Pub/Sub
# Web Content - SquareSpace
# Transcoding - Amazon Elastic Transcoder


Fight Mission Planning
* get Point of Interest (POI) information for planning flights, races and meetups.  

Sensor Collection Dashboard
* Collection and viewing of Drone sensor data during flight.  

Flight Data Storage
* Flight controller data storage and analysis

Photo / Video Geotagging
* Allowing content to be injested, tagged and reviewed

Video and Audio Transcoding
* Video collection and transcoding footage into streaming formats
