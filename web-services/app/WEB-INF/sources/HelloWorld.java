package com.hello.ws;
 
import javax.jws.WebService;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.net.*;
import java.io.*;
 
//Service Implementation
@WebService(endpointInterface = "com.hello.ws.HelloWorldInterface")

public class HelloWorld implements HelloWorldInterface {
 
	@Override
	public String getHelloWorldAsString(String name) throws ServletException,IOException  {
		String address = "http://elogistik-entity-svc:3000/api";
		StringBuffer response = new StringBuffer();
	
		URL url = new URL(address);
		HttpURLConnection httpGet = (HttpURLConnection) url.openConnection();
		httpGet.setRequestMethod("GET");

		BufferedReader buffReader = new BufferedReader(new InputStreamReader(httpGet.getInputStream()));
		String inputLine;

		while ((inputLine = buffReader.readLine()) != null) {
			response.append(inputLine);
		}
		buffReader.close();

		//print result
		return response.toString() + "Hello " + name;
	}
 
}