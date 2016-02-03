# goauld
Infect other process with Node.js

  ![Alt text](http://www.stargate-sg1-solutions.com/wg/symbiotes/101-cotg4-tealc-larval-goauld-symbiote.jpg "Goauld")

## Installation

```
  npm install goauld --save
```

## Usage

```
  var Goauld = require('goauld');

  var goauld = new Goauld();

  goauld.setHost("bc");

  goauld.ask("21 + 21",function(answer) {
    console.log(answer); 
  });
```

