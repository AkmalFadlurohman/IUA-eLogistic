<?php

require_once __DIR__ . '/vendor/autoload.php';

$wsdlUrl = 'http://localhost/SOAP/server.php?wsdl';
//$wsdlDoc = $_SERVER['DOCUMENT_ROOT'] . '/soap.wsdl';
$client = new Zend\Soap\Client($wsdlUrl);
//var_dump($client);
$result = $client->call('sayHello', ['firstName' => 'World']);
//$client = new SoapClient($wsdlDoc);
//$result = $client->sayHello('World');
var_dump($result);

//echo $wsdlDoc;

//echo file_get_contents('http://www.xignite.com/xcurrencies.asmx?WSDL');
//var_dump(file_get_contents($wsdlDoc));
?>