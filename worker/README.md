# Trigger Service

Send Request to `http://localhost:8080/engine-rest/message`

## Shipping Service

```javascript
{
  "messageName" : "newShipping",
  "processVariables" : {
    "status" : {
      "value" : "status",
      "type": "String"
    },
    "price" : {
      "value" : "35000",
      "type": "String"
    },
    "date" : {
      "value" : "2018-11-18",
      "type": "String"
    },
    "items" : {
      "value" : "10,um,;12,iqbal,;",
      "type": "String"
    },
    "requester" : {
      "value" : "Rozi",
      "type": "String"
    },
    "type" : {
      "value" : "shipping",
      "type": "String"
    },
    "source" : {
      "value" : "Bandung",
      "type": "String"
    },
    "destination" : {
      "value" : "Makassar",
      "type": "String"
    }
  }
}
```

## Storage Service

```javascript
{
  "messageName" : "newStorage",
  "processVariables" : {
    "status" : {
      "value" : "status",
      "type": "String"
    },
    "price" : {
      "value" : "35000",
      "type": "String"
    },
    "date" : {
      "value" : "2018-11-18",
      "type": "String"
    },
    "items" : {
      "value" : "10,um,;12,iqbal,;",
      "type": "String"
    },
    "requester" : {
      "value" : "Rozi",
      "type": "String"
    },
    "type" : {
      "value" : "storage",
      "type": "String"
    },
    "location" : {
      "value" : "Bandung",
      "type": "String"
    },
    "sinceDate" : {
      "value" : "2018-11-20",
      "type": "String"
    },
    "untilDate" : {
      "value" : "2018-11-22",
      "type": "String"
    }
  }
}
```

## Supply Chain Service

```javascript
{
  "messageName" : "newSupply",
  "processVariables" : {
    "status" : {
      "value" : "status",
      "type": "String"
    },
    "price" : {
      "value" : "35000",
      "type": "String"
    },
    "date" : {
      "value" : "2018-11-18",
      "type": "String"
    },
    "items" : {
      "value" : "10,um,;12,iqbal,;",
      "type": "String"
    },
    "requester" : {
      "value" : "Rozi",
      "type": "String"
    },
    "type" : {
      "value" : "storage",
      "type": "String"
    },
    "source" : {
      "value" : "Bandung",
      "type": "String"
    },
    "destination" : {
      "value" : "Makassar",
      "type": "String"
    },
    "frequency" : {
      "value" : "P10D",
      "type": "String"
    },
    "sinceDate" : {
      "value" : "2018-11-20",
      "type": "String"
    },
    "untilDate" : {
      "value" : "2018-11-22",
      "type": "String"
    }
  }
}
```