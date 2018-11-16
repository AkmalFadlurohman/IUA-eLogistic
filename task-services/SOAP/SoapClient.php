<?php 

$wsdlUrl = 'http://localhost:8080/wsdl.php';
$wsdlDoc = $_SERVER['DOCUMENT_ROOT'] . '/soap.wsdl';
$options= array(
  'location' 	=>	'http://localhost:8080/SoapServer.php',
  'uri'		=>	'http://localhost:8080/test'
);
$client=new SoapClient($wsdlDoc);
var_dump($client);
?>