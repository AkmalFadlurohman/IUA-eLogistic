FROM  tomcat:latest

COPY ./tomcat_lib /usr/local/tomcat/lib
COPY ./app /usr/local/tomcat/webapps/elogistic
RUN rm -R /usr/local/tomcat/webapps/elogistic/jsp

EXPOSE 8080