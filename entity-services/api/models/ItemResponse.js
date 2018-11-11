const BaseResponse = require('./BaseResponse');

class ItemResponse extends BaseResponse {
    constructor(itemDocs) {
        super()
        for (let doc of itemDocs) {
            let item = this.template(doc.size, doc.owner, doc.location);
            item.href = this.collection.href + '/items/' + doc._id;
            this.collection.items.push(item);
        }
        this.collection.template = this.template('', '', '');
    }

    template(size, owner, location) {
        return {
            data: [
                {name: 'size', value: size, prompt: 'Space needed for storage'},
                {name: 'owner', value: owner, prompt: 'The owner of the item'},
                {name: 'location', value: location, prompt: 'Current location of the item'},
            ]
        }
    }
}

module.exports = ItemResponse;