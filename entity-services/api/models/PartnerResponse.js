const BaseResponse = require('./BaseResponse');

class PartnerResponse extends BaseResponse {
    constructor(partnerDocs) {
        super()
        for (let doc of partnerDocs) {
            let item = this.template(doc.name, doc.password, doc.items);
            item.href = this.collection.href + '/partners/' + doc._id;
            this.collection.items.push(item);
        }
        this.collection.template = this.template('', '', []);
        this.collection.href += '/partners';
    }

    template(name, password, items) {
        return {
            data: [
                {name: 'name', value: name, prompt: 'The name of the partner'},
                {name: 'password', value: password, prompt: 'Password for the partner'},
                {name: 'items', value: items, prompt: 'List of items owned by the partner'},
            ]
        }
    }
}

module.exports = PartnerResponse;