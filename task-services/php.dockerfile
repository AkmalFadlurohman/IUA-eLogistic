FROM php:7-fpm

#RUN mkdir /home/src/SOAP
WORKDIR /home/src/SOAP

# Set SOAP Extension
RUN rm /etc/apt/preferences.d/no-debian-php \
	&& apt-get update -y \
	&& apt-get install -y \
		libxml2-dev \
    	php-soap \
    	zip \
    	unzip \
  	&& apt-get clean -y \
  	&& docker-php-ext-install soap


# Copy php.ini file
ADD php.ini /usr/local/etc/php

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin/ --filename=composer

# Dependency Setup
COPY composer.json /home/src/SOAP
RUN cd /home/src/SOAP
RUN composer install --no-scripts --no-autoloader

# Copy Workfile to Container

COPY ./SOAP /home/src/SOAP

EXPOSE 9000
CMD ["php-fpm"]
