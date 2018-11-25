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

async function createNewStorage({ task, taskService }) {
    let status = task.variables.get('status');
    let price = task.variables.get('price');
    let date = task.variables.get('date');
    let items = task.variables.get('items');
    let requester = task.variables.get('requester');
    let type = task.variables.get('type');

    let location = task.variables.get('location');
    let sinceDate = task.variables.get('sinceDate');
    let untilDate = task.variables.get('untilDate');

    let parsedItem = parseItem(items);
    let processVariables = new Variables();

    processVariables.set("status",status);
    processVariables.set("price",price);
    processVariables.set("date",date);
    processVariables.set("items",items);
    processVariables.set("requester",requester);
    processVariables.set("type",type);
    processVariables.set("location",location);
    processVariables.set("sinceDate",sinceDate);
    processVariables.set("untilDate",untilDate);

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
                    "name": "location",
                    "value": location,
                    "prompt": "At where the shipment should be stored"
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
        //url: 'http://localhost:3000/api/requests',
        url: 'http://elogistik-entity-svc:3000/api/requests',
        method: 'POST',
        headers: headers,
        json: template
    }

    request(options, function(error, response, body) {
        if (response.statusCode == 201) {
            console.log('Storage request created');
            processVariables.set('storageCreated', true);
        } else {
            console.log('Storage request didnt created');
            processVariables.set('storageCreated', false);
        }
        taskService.complete(task, processVariables, null);
    });
}

module.exports = createNewStorage;
