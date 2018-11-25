FROM  tomcat:latest

COPY ./tomcat_lib /usr/local/tomcat/lib
COPY ./app /usr/local/tomcat/webapps/elogistic
RUN rm -R /usr/local/tomcat/webapps/elogistic/jsp
RUN echo 'hosts: files mdns4_minimal [NOTFOUND=return] dns mdns4' >> /etc/nsswitch.conf

EXPOSE 9000
EXPOSE 587