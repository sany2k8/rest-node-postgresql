# A simple RESTful web service with JavaScript, Node, Express, Postgres, and pg-promise.

RESTful Web Services are basically REST Architecture based Web Services. In REST Architecture everything is a resource.
RESTful web services are light weight, highly scalable and maintainable and are very commonly used to create APIs for web-based applications. This is a simple RESTful web service with JavaScript, Node, Express, Postgres, and pg-promise


### Install Required packages

> $ npm install express-generator@4 -g 

> $ npm install pg-promise@5 --save

> $ npm install bluebird@3 --save

> $ npm install nodemon@1 --save

### Generate Express project & download project dependencies

> $ express rest-node-postgres

> $ cd rest-node-postgres

> $ npm install


### Import the **users.sql** to create required tables

> psql -h hostname -d databasename -U username -f users.sql

### Run project

> $ npm start


