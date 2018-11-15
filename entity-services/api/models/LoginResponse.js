const BaseResponse = require('./BaseResponse');

class LoginResponse extends BaseResponse {
    constructor() {
        super()
        delete this.collection.items
        this.collection.template = this.template();
        this.collection.href += '/login';
    }

    template() {
        return {
            data: [
                {name: 'name', value: '', prompt: 'Registered partner company name'},
                {name: 'password', value: '', prompt: 'Password of the account'}
            ]
        }
    }
}

module.exports = LoginResponse