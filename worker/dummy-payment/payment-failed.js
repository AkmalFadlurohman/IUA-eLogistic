const { Variables } = require('camunda-external-task-client-js');
const request = require('request');

async function paymentFailed({ task, taskService }) {

	// TODO tembak ke payment

	console.log('Payment Failed');
	await taskService.complete(task);
}

module.exports = paymentFailed;
