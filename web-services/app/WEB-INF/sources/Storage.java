package com.IUA.elogistic.task;
 
import javax.jws.WebService;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.net.*;
import java.io.*;
import org.json.simple.*;
 
//Service Implementation
@WebService(endpointInterface = "com.IUA.elogistic.task.StorageInterface")

public class Storage implements StorageInterface {
	@Override
	public String createRequest(String status, String price, String date, String items, String requester, String email, String type, String location, String sinceDate, String untilDate) throws ServletException,IOException {
		JSONObject message = new JSONObject();
		JSONObject processVariables = new JSONObject();
		message.put("messageName", "newStorage");
		JSONObject jstatus = new JSONObject();
		jstatus.put("type", "String");
		jstatus.put("value", status);
		processVariables.put("status", jstatus);
		JSONObject jprice = new JSONObject();
		jprice.put("type", "String");
		jprice.put("value", price);
		processVariables.put("price", jprice);
		JSONObject jdate = new JSONObject();
		jdate.put("type", "String");
		jdate.put("value", date);
		processVariables.put("date", jdate);
		JSONObject jitems = new JSONObject();
		jitems.put("type", "String");
		jitems.put("value", items);
		processVariables.put("items", jitems);
		JSONObject jrequester = new JSONObject();
		jrequester.put("type", "String");
		jrequester.put("value", requester);
		processVariables.put("requester", jrequester);
		JSONObject jemail = new JSONObject();
		jemail.put("type", "String");
		jemail.put("value", email);
		processVariables.put("email", jemail);
		JSONObject jtype = new JSONObject();
		jtype.put("type", "String");
		jtype.put("value", "storage");
		processVariables.put("type", jtype);
		JSONObject jlocation = new JSONObject();
		jlocation.put("type", "String");
		jlocation.put("value", location);
		processVariables.put("location", jlocation);
		JSONObject jsince = new JSONObject();
		jsince.put("type", "String");
		jsince.put("value", sinceDate);
		processVariables.put("sinceDate", jsince);
		JSONObject juntil = new JSONObject();
		juntil.put("type", "String");
		juntil.put("value", untilDate);
		processVariables.put("untilDate", juntil);
		message.put("processVariables", processVariables);

		String address = "http://elogistik-task-svc:8080/engine-rest/message";
		URL url = new URL(address);
		HttpURLConnection httpPost = (HttpURLConnection) url.openConnection();
		httpPost.setRequestProperty("Content-Type", "application/json; charset=UTF-8");
		httpPost.setRequestProperty("Accept", "application/json");
		httpPost.setRequestMethod("POST");
		httpPost.setDoOutput(true);

		OutputStreamWriter httpWriter = new OutputStreamWriter(httpPost.getOutputStream());
		httpWriter.write(message.toString());
		httpWriter.flush();

		int httpResult = httpPost.getResponseCode(); 
		if (httpResult == 204) {
			return "OK";
		} else {
		    return "Failed";  
		} 
	}
}