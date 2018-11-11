FROM php:7-fpm

#RUN mkdir /home/src/SOAP
WORKDIR /home/src/SOAP

RUN cd /home/src/SOAP
RUN rm /etc/apt/preferences.d/no-debian-php \
	&& apt-get update -y \
	&& apt-get install -y \
		libxml2-dev \
    	php-soap \
  	&& apt-get clean -y \
  	&& docker-php-ext-install soap

COPY ./SOAP /home/src/SOAP

EXPOSE 9000
CMD ["php-fpm"]
