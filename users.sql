DROP DATABASE IF EXISTS node_api_users;

CREATE DATABASE node_api_users TEMPLATE template0; \c node_api_users;

CREATE TABLE node_user (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  user_type VARCHAR,
  age INTEGER,
  sex VARCHAR );

INSERT INTO node_user (name, user_type, age, sex) VALUES ('Tyler', 'Retrieved', 3, 'M');
