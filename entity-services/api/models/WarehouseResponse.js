const BaseResponse = require('./BaseResponse');

class WarehouseResponse extends BaseResponse {
    constructor(warehouseDocs) {
        super()
        for (let doc of warehouseDocs) {
            let item = this.template(doc._id, doc.address, doc.capacity, doc.items);
            item.href = this.collection.href + '/warehouses/' + doc._id;
            this.collection.items.push(item);
        }
        this.collection.template = this.template('', '', '', []);
    }

    template(id, address, capacity, items) {
        return {
            data: [
                {name: '_id', value: id, prompt: 'Unique ID'},
                {name: 'address', value: address, prompt: 'Where the warehouse is located'},
                {name: 'capacity', value: capacity, prompt: 'The capacity of the warehouse'},
                {name: 'items', value: items, prompt: 'List of items stored in the warehouse'},
            ]
        }
    }
}

module.exports = WarehouseResponse;