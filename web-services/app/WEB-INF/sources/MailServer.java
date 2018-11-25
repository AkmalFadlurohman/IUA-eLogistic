package com.IUA.elogistic.task;
 
import javax.jws.WebService;
import java.util.*;
import javax.mail.*;
import javax.mail.internet.*;
import javax.activation.*;
 
//Service Implementation
@WebService(endpointInterface = "com.IUA.elogistic.task.MailServerInterface")

public class MailServer implements MailServerInterface {
 
	@Override
	public String sendEmail(String address, String body) {
      	final String username = "iuaelogistics@gmail.com";
		final String password = "Testing1234";

		Properties props = new Properties();
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.port", "587");

		Session session = Session.getInstance(props,
		  new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(username, password);
			}
		  });

		try {
			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress(username));
			message.setRecipients(Message.RecipientType.TO,
				InternetAddress.parse(address));
			message.setSubject("IUA Notification");
			message.setText(body);

			Transport.send(message);
		} catch (MessagingException e) {
			throw new RuntimeException(e);
		}
 		return "Sent message successfully....";
	}
}