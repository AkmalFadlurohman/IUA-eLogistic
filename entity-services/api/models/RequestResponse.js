const BaseResponse = require('./BaseResponse');

class RequestResponse extends BaseResponse {
    constructor(requestDocs, type='shipping') {
        super()
        for (let doc of requestDocs) {
            let additional_info = this.additional_data(doc);
            let item = this.template( 
                doc.status,
                doc.price,
                doc.date,
                doc.items,
                doc.requester,
                doc.type
            );
            item.data.push(...additional_info);
            item.href = this.collection.href + '/requests/' + doc._id;
            this.collection.items.push(item);
        }
        this.collection.template = this.template('', 0, '', [], '', type);
        let additional_info = this.additional_data({
            type, source: '', destination: '', location: '',
            sinceDate: '', untilDate: '', frequency: '',
        });
        this.collection.template.data.push(...additional_info);
        this.collection.href += '/requests';
    }

    additional_data(info) {
        let additional_info = []
        if (info.type === 'shipping') {
            additional_info = this.shippingTemplate(info.source, info.destination);
        } else if (info.type === 'storage') {
            additional_info = this.storageTemplate(info.location, info.sinceDate, info.untilDate);
        } else if (info.type === 'supply') {
            additional_info = this.supplyTemplate(
                info.source, info.destination, info.frequency,
                info.sinceDate, info.untilDate
            )
        }
        return additional_info
    }

    template(status, price, date, items, requester, type) {
        return {
            data: [
                {name: 'status', value: status, prompt: 'Status of the request, used for tracking'},
                {name: 'price', value: price, prompt: 'Price that should be paid by the requester'},
                {name: 'date', value: date, prompt: 'Date the request was made'},
                {name: 'items', value: items, prompt: 'List of items relating to the request'},
                {name: 'requester', value: requester, prompt: 'Who made the request'},
                {name: 'type', value: type, prompt: 'Type of the request [shipping|storage|supply]'},
            ]
        }
    }

    shippingTemplate(source, destination) {
        return [
            {name: 'source', value: source, prompt: 'From where the shipment should be picked up'},
            {name: 'destination', value: destination, prompt: 'To where the shipment should be delivered'},
        ]
    }

    storageTemplate(location, sinceDate, untilDate) {
        return [
            {name: 'location', value: location, prompt: 'At where the shipment should be stored'},
            {name: 'sinceDate', value: sinceDate, prompt: 'Since when the shipment is stored'},
            {name: 'untilDate', value: untilDate, prompt: 'Until when the shipment is stored'},
        ]
    }

    supplyTemplate(source, destination, frequency, sinceDate, untilDate) {
        return [
            {name: 'source', value: source, prompt: 'From where the goods should be picked up'},
            {name: 'destination', value: destination, prompt: 'To where the goods should be delivered'},
            {name: 'frequency', value: frequency, prompt: 'How frequent the goods should be supplied'},
            {name: 'sinceDate', value: sinceDate, prompt: 'Since when the supply is valid'},
            {name: 'untilDate', value: untilDate, prompt: 'Until when the supply is valid'},
        ]
    }
}

module.exports = RequestResponse;