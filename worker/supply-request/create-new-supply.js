const { Variables } = require('camunda-external-task-client-js');
const request = require('request');

function parseItem(items) {
    let parsedItem = [];

    arrItems = items.split(';');
    arrItems.forEach((item) => {
        if (item.length != 0) {
            ii = item.split(',');
            parsedItem.push({
                "data": [
                    {
                        "name": "size",
                        "value": ii[0]
                    },
                    {
                        "name": "owner",
                        "value": ii[1]
                    },
                    {
                        "name": "location",
                        "value": ii[2].length == 0 ? null : ii[2]
                    },
                ]
            });
        }
    })

    return parsedItem;
}

async function createNewSupply({ task, taskService }) {
    let status = task.variables.get('status');
    let price = task.variables.get('price');
    let date = task.variables.get('date');
    let items = task.variables.get('items');
    let requester = task.variables.get('requester');
    let type = task.variables.get('type');

    let source = task.variables.get('source');
    let destination = task.variables.get('destination');
    let frequency = task.variables.get('frequency');
    let sinceDate = task.variables.get('sinceDate');
    let untilDate = task.variables.get('untilDate');

    let parsedItem = parseItem(items);
    let processVariables = new Variables();

    // const token = login();
    // console.log(token);

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidW0iLCJpYXQiOjE1NDI1NDQxMzl9.slyHpyMoYlhzInkhVEhrtGC1uT6r1N1oOipyI5lhvkw`
    };

    const template = {
        "template": {
            "data": [
                {
                    "name": "status",
                    "value": status,
                    "prompt": "Status of the request, used for tracking"
                },
                {
                    "name": "price",
                    "value": price,
                    "prompt": "Price that should be paid by the requester"
                },
                {
                    "name": "date",
                    "value": date,
                    "prompt": "Date the request was made"
                },
                {
                    "name": "items",
                    "value": parsedItem,
                    "prompt": "List of items relating to the request"
                },
                {
                    "name": "requester",
                    "value": requester,
                    "prompt": "Who made the request"
                },
                {
                    "name": "type",
                    "value": type,
                    "prompt": "Type of the request [shipping|storage|supply]"
                },
                {
                    "name": "source",
                    "value": source,
                    "prompt": "From where the shipment should be picked up"
                },
                {
                    "name": "destination",
                    "value": destination,
                    "prompt": "To where the shipment should be delivered"
                },
                {
                    "name": "frequency",
                    "value": frequency,
                    "prompt": "How frequent the goods should be supplied"
                },
                {
                    "name": "sinceDate",
                    "value": sinceDate,
                    "prompt": "Since when the shipment is stored"
                },
                {
                    "name": "untilDate",
                    "value": untilDate,
                    "prompt": "Until when the shipment is stored"
                }
            ]
        }
    }
    
    const options = {
        url: 'http://127.0.0.1:3000/api/requests',
        method: 'POST',
        headers: headers,
        json: template
    }

    request(options, function(error, response, body) {
        if (response.statusCode == 201) {
            console.log('Supply request created');
            processVariables.set('supplyCreated', true);
        } else {
            console.log('Supply request didnt created');
            processVariables.set('supplyCreated', false);
        }
        taskService.complete(task, processVariables, null);
    });
}

module.exports = createNewSupply;
