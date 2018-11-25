# IUA-eLogistic
IUA SoA eLogistik Service 

## Guide

- Create docker network named 'elogistik-net' using 'bridge' driver
``docker network create --driver bridge elogistik-net`` 
- Run the entity service using the provided docker compose file in entity-services directory
- Run the in-house web service using the provided docker compose file in web-services directory
- Deploy the bpmn models from local Camunda BPMN modeler to http://localhost:9001/engine-rest/deployment/create
- Run the task service using the provided docker compose file in task-services directory

## Collaborators

|ID|Name|
|:--|:--|
|13515026|Achmad Fahrurrozi Maskur|
|13515074|Akmal Fadlurohman|
|13515086|M. Iqbal Al Khowarizmi|