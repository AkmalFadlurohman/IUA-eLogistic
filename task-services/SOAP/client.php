<?php

require_once __DIR__ . '/vendor/autoload.php';

$client = new Zend\Soap\Client('http://localhost:8080/server.php?wsdl');
$result = $client->call('sayHello', [['firstName' => 'World']]);

var_dump($result);

?>