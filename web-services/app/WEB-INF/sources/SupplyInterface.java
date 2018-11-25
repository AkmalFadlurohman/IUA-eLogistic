package com.IUA.elogistic.task;

import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;
import javax.jws.soap.SOAPBinding.Style;
import javax.servlet.*;
import javax.servlet.http.*;
import java.net.*;
import java.io.*;
import org.json.simple.*;
 
//Service Endpoint Interface
@WebService
@SOAPBinding(style = Style.RPC)

public interface SupplyInterface {
 
	@WebMethod String createRequest(String status, String price, String date, String items, String requester, String email, String type, String source, String destination, String frequency, String sinceDate, String untilDate) throws ServletException,IOException;

}