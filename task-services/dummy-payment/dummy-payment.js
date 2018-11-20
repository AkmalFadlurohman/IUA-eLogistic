const { Variables } = require('camunda-external-task-client-js');
const request = require('request');

async function dummyPayment({ task, taskService }) {

	// TODO tembak ke payment
    let price = task.variables.get('price');
	console.log(`Payment Successful, with price: ${price}`);
	
	await taskService.complete(task);
}

module.exports = dummyPayment;
