<?php
require_once __DIR__ . '/vendor/autoload.php';
//use \Zend\Soap\AutoDiscover;

class Hello
{
    public function sayHello($name)
    {
        return 'Hello ' . $name;
    }

}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    // Only handle GET requests
    header('HTTP/1.1 400 Client Error');
    exit;
}

$serverUrl = 'http://localhost:8080/wsdl.php';
$autoDiscover = new \Zend\Soap\AutoDiscover(new \Zend\Soap\Wsdl\ComplexTypeStrategy\ArrayOfTypeSequence());
$autoDiscover->setBindingStyle(array('style' => 'document'));
$autoDiscover->setOperationBodyStyle(array('use' => 'literal'));
$autoDiscover->setClass('Hello');
$autoDiscover->setUri($serverUrl);
$autoDiscover->handle();


//header("Content-Type: text/xml");
//echo $autoDiscover->generate()->toXml();
$autoDiscover->generate()->dump($_SERVER['DOCUMENT_ROOT'] . '/soap.wsdl');
?>