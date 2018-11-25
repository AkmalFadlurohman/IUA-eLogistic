<%@page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<%@ page import="java.util.*,java.net.URL,javax.xml.namespace.QName,javax.xml.ws.Service,javax.servlet.*,javax.servlet.http.*, com.hello.ws.*"%>
<%@ page import="java.io.BufferedReader,java.io.DataOutputStream,java.io.InputStreamReader,java.net.HttpURLConnection,java.net.URL"%>
<%
	URL url = new URL("http://localhost:9000/elogistic/ws/hello?wsdl");
     
    QName qname = new QName("http://ws.hello.com/", "HelloWorldService");

    Service service = Service.create(url, qname);

    HelloWorldInterface hello = service.getPort(HelloWorldInterface.class);

    out.println(hello.getHelloWorldAsString("Ummy"));
%>