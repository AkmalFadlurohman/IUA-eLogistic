package com.hello.ws;
 
import javax.jws.WebService;
 
//Service Implementation
@WebService(endpointInterface = "com.hello.ws.HelloWorldInterface")

public class HelloWorld implements HelloWorldInterface {
 
	@Override
	public String getHelloWorldAsString(String name) {
		return "Hello World JAX-WS " + name;
	}
 
}