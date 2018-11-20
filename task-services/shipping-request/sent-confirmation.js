const { Variables } = require('camunda-external-task-client-js');
const request = require('request');

async function sentConfirmation({ task, taskService }) {

	// TODO email confirmation

	const requester = task.variables.get('requester');

	console.log(`Confirmation sent to ${requester}`);
	await taskService.complete(task);
}

module.exports = sentConfirmation;
