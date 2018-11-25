<%@page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<%@ page import="java.util.*,java.net.URL,javax.xml.namespace.QName,javax.xml.ws.Service,javax.servlet.*,javax.servlet.http.*, com.IUA.elogistic.task.*"%>
<%@ page import="java.io.BufferedReader,java.io.DataOutputStream,java.io.InputStreamReader,java.net.HttpURLConnection,java.net.URL"%>
<%
	URL url = new URL("http://localhost:9000/elogistic/task/mail?wsdl");
    QName qname = new QName("http://task.elogistic.IUA.com/", "MailServerService");

    Service service = Service.create(url, qname);

    MailServerInterface mailServer = service.getPort(MailServerInterface.class);

    out.println(mailServer.sendEmail("akmalfadlurohmans@gmail.com", "Your Shipment Invoice: "));
%>