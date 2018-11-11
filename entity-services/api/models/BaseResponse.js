class BaseRespones {
    constructor() {
        this.collection = {
            version: '1.0',
            href: '',
            links: [],
            items: [],
            template: {
                data: []
            }
        }
    }
}

module.exports = BaseRespones;