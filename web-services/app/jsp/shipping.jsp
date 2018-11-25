<%@page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<%@ page import="java.util.*,java.net.URL,javax.xml.namespace.QName,javax.xml.ws.Service,javax.servlet.*,javax.servlet.http.*, com.IUA.elogistic.task.*"%>
<%@ page import="java.io.BufferedReader,java.io.DataOutputStream,java.io.InputStreamReader,java.net.HttpURLConnection,java.net.URL"%>
<%
	URL url = new URL("http://localhost:9000/elogistic/task/shipping?wsdl");
    QName qname = new QName("http://task.elogistic.IUA.com/", "ShippingService");

    Service service = Service.create(url, qname);

    ShippingInterface shippingInterface = service.getPort(ShippingInterface.class);

    out.println(shippingInterface.createRequest("received", "35000", "2018-11-18", "10,um,;12,iqbal,;", "Akmal", "akmalfadlurohmans@gmail.com", "shipping", "Bandung", "Makassar"));
%>