const { Variables } = require('camunda-external-task-client-js');
const request = require('request');
const soap = require('strong-soap').soap;
const wsdl = 'http://localhost:9000/elogistic/task/mail?wsdl';

async function paymentFailed({ task, taskService }) {
	const requester = task.variables.get('requester');
	const email = task.variables.get('email');
	var options = {};
	soap.createClient(wsdl, options, function(err, client) {
		client.sendEmail({arg0: email, arg1: 'Wa are sorry. We are currently unable to process your payment'}, function(err, result, envelope, soapHeader) {
			console.log('Result:');
			console.log(JSON.stringify(result, null, 2));
	  	})
	});


	console.log(`Failed payment sent to ${requester} at ${email}`);
	await taskService.complete(task);
}

module.exports = paymentFailed;
