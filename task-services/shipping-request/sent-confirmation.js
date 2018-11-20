const { Variables } = require('camunda-external-task-client-js');
const request = require('request');
const soap = require('strong-soap').soap;
const wsdl = 'http://localhost:9000/elogistic/task/mail?wsdl';

async function sentConfirmation({ task, taskService }) {
	const requester = task.variables.get('requester');
	const email = task.variables.get('email');
	var options = {};
	soap.createClient(wsdl, options, function(err, client) {
		client.sendEmail({arg0: email, arg1: 'Your shipment has been successfully delivered'}, function(err, result, envelope, soapHeader) {
			console.log('Result:');
			console.log(JSON.stringify(result, null, 2));
	  	})
	});
	console.log(`Confirmation sent to ${requester} at ${email}`);
	await taskService.complete(task);
}

module.exports = sentConfirmation;
