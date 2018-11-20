const {
        dummyPayment,
        paymentFailed,
      } = require('./dummy-payment');

const {
        sentConfirmation,
        createNewShipping,
      } = require('./shipping-request');

const {
        createNewStorage
      } = require('./storage-request');

const {
        createNewSupply
      } = require('./supply-request');

const { Client, logger } = require('camunda-external-task-client-js');
const config = { baseUrl: 'http://localhost:8080/engine-rest'};
const client = new Client(config);

client.subscribe('dummy-payment', dummyPayment);
client.subscribe('payment-failed', paymentFailed);

client.subscribe('sent-confirmation', sentConfirmation);
client.subscribe('create-new-shipping', createNewShipping);

client.subscribe('create-new-storage', createNewStorage);

client.subscribe('create-new-supply', createNewSupply);