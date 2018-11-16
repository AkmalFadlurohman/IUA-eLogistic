FROM  tomcat:latest

COPY ./tomcat_lib /usr/local/tomcat/lib
COPY ./app /usr/local/tomcat/webapps/elogistic

EXPOSE 8080