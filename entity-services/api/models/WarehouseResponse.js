const BaseResponse = require('./BaseResponse');

class WarehouseResponse extends BaseResponse {
    constructor(warehouseDocs) {
        super()
        for (let doc of warehouseDocs) {
            let item = this.template(doc.address, doc.capacity, doc.items);
            item.href = this.collection.href + '/warehouses/' + doc._id;
            this.collection.items.push(item);
        }
        this.collection.template = this.template('', 0, []);
        this.collection.href += '/warehouses';
    }

    template(address, capacity, items) {
        return {
            data: [
                {name: 'address', value: address, prompt: 'Where the warehouse is located'},
                {name: 'capacity', value: capacity, prompt: 'The capacity of the warehouse'},
                {name: 'items', value: items, prompt: 'List of items stored in the warehouse'},
            ]
        }
    }
}

module.exports = WarehouseResponse;