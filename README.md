# How to use

1. install

```cmd
   yarn add -D https://github.com/moverfinance/sigma-deployments.git#staging
```

2. import

```js
const deployments = require("sigma-deployments");
const deploymentsData = await deployments(network); // network=arbitrumGoerli | arbitrum

console.log(deploymentsData.contracts);
console.log(deploymentsData.artifacts);
```
