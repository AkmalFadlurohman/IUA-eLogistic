package com.IUA.elogistic.task;

import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;
import javax.jws.soap.SOAPBinding.Style;
 
//Service Endpoint Interface
@WebService
@SOAPBinding(style = Style.RPC)

public interface MailServerInterface {
 
	@WebMethod String sendEmail(String address, String message);

}