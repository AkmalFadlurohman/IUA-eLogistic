<?php
ini_set("soap.wsdl_cache_enabled", 0); 
//ini_set("session.auto_start", 0);

// server
class MySoapServer
{
  public function getMessage()
  {
    return 'Hello,World!';
  }
  
  public function addNumbers($num1,$num2)
  {
    return $num1+$num2;
  }
}

$options= array('uri'=>'http://localhost:8080/test');
//session_start(); 
$server=new SoapServer(NULL,$options);
$server->setClass('MySoapServer');
$server->handle();

?>