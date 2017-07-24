# mongo-objectId-info

> 

## Get building blocks of hexadecimal [`mongo objectId`](https://docs.mongodb.com/manual/reference/method/ObjectId/)

```
$ npm install --save mongo-objectId-info
```

## Usage

```js
var idInfo = require('mongo-objectId-info');

var obj =  idInfo.getInfo("507f1f77bcf86cd799439011");

console.log(obj);
/*
{ timestamp: 1350508407,
  machineId: 12384364,
  processId: 55193,
  counter: 4427793 }
 */

//Values will be NaN for invalid hexadecimal objectId
```

