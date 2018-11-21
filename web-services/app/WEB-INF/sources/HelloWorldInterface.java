package com.hello.ws;

import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;
import javax.jws.soap.SOAPBinding.Style;
import javax.servlet.*;
import javax.servlet.http.*;
import java.net.*;
import java.io.*;
 
//Service Endpoint Interface
@WebService
@SOAPBinding(style = Style.RPC)

public interface HelloWorldInterface {
 
	@WebMethod String getHelloWorldAsString(String name) throws ServletException,IOException ;

}