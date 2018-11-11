<?php 

$options= array(
  'location' 	=>	'http://localhost:8080/SoapServer.php',
  'uri'		=>	'http://localhost:8080/test'
);
$client=new SoapClient(NULL,$options);
echo $client->getMessage();  //Hello,World!
echo $client->addNumbers(3,5);

?>