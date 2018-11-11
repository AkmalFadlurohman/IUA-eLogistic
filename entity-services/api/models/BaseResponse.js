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

    static toObject(template) {
        let obj = {}
        for (let prop of template.data) {
            obj[prop.name] = prop.value;
        }
        return obj
    }
}

module.exports = BaseRespones;