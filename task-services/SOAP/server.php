<?php

require_once __DIR__ . '/vendor/autoload.php';

class Hello
{
    public function sayHello($firstName)
    {
        return 'Hello ' . $firstName;
    }

}

$serverUrl = "http://localhost/server.php";


// if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
//     // Only handle POST requests
//     header('HTTP/1.1 400 Client Error');
//     exit;
// }

// $server = new Server(dirname($_SERVER['REQUEST_URI']) . '/wsdl.php', [
//     'actor' => $_SERVER['REQUEST_URI'],
// ]);
//$server = new Server($wsdlDoc);
//$server->setObject(new \Zend\Soap\Server\DocumentLiteralWrapper(new Hello()));
//$server->setClass('Hello');
//$server->handle();

if (isset($_GET['wsdl'])) {
    $autoDiscover = new \Zend\Soap\AutoDiscover(new \Zend\Soap\Wsdl\ComplexTypeStrategy\ArrayOfTypeSequence());
    $autoDiscover->setBindingStyle(array('style' => 'document'));
    $autoDiscover->setOperationBodyStyle(array('use' => 'literal'));
    $autoDiscover->setClass('Hello');
    $autoDiscover->setUri($serverUrl);
    //echo 'Successfully generated WSDL soap.wsdl at ' . $_SERVER['DOCUMENT_ROOT'] . '/soap.wsdl';
    //$autoDiscover->generate()->dump($_SERVER['DOCUMENT_ROOT'] . '/soap.wsdl');
    $autoDiscover->handle();
    //echo $autoDiscover->generate()->toXml();
} else {
    //$wsdlDoc = $_SERVER['DOCUMENT_ROOT'] . '/soap.wsdl';
    $wsdlDoc = $serverUrl . '?wsdl';
    $server = new \Zend\Soap\Server($wsdlDoc);
    $server->setObject(new \Zend\Soap\Server\DocumentLiteralWrapper(new Hello()));
    //$server->setClass('Hello');
    $server->handle();
}

?>