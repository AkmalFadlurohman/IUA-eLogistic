const BaseResponse = require('./BaseResponse');

class PartnerResponse extends BaseResponse {
    constructor(partnerDocs) {
        super()
        for (let doc of partnerDocs) {
            let item = this.template(doc._id, doc.name, doc.items);
            item.href = this.collection.href + '/partners/' + doc._id;
            this.collection.items.push(item);
        }
        this.collection.template = this.template('', '', []);
    }

    template(id, name, items) {
        return {
            data: [
                {name: '_id', value: id, prompt: 'Unique ID'},
                {name: 'name', value: name, prompt: 'The name of the partner'},
                {name: 'items', value: items, prompt: 'List of items owned by the partner'},
            ]
        }
    }
}

module.exports = PartnerResponse;