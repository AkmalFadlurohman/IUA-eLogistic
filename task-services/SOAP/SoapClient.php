<?php 
$wsdl = '/server.php?wsdl'; //http://localhost:8080/server.php?wsdl
$options= array(
  'location' 	=>	'http://localhost:8080/SoapServer.php',
  'uri'		=>	'http://localhost:8080/test'
);
//$client=new SoapClient(NULL,$options);
$client=new SoapClient($wsdl);
var_dump($client->__getFunctions());
//echo $client->getMessage();  //Hello,World!
//echo $client->addNumbers(3,5);

//echo file_get_contents('http://www.xignite.com/xcurrencies.asmx?WSDL');
//echo file_get_contents($wsdl);
//die();

//$client     = new SoapClient($wsdl, array("trace" => 1, "exception" => 0)); 
//echo file_get_contents($wsdl);
?>