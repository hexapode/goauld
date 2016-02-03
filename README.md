# goauld
Infect other process with Node.js

  var Goauld = require('./goauld.js');

  var goauld = new Goauld();

  goauld.setHost("bc");

  goauld.ask("21 + 21",function(answer) {
    console.log(answer); 
  });
