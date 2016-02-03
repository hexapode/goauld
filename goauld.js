var spawn = require('child_process').spawn;

function Goauld() {
  this.host = null;
  this.answer = null;

  this.setHost = function(cmd) {
    var params = cmd.split(' ');
    var rootCmd = params.splice(0,1)[0];
    this.host = spawn(rootCmd, params);

    this.host.stdout.on('data', this.dataReaded.bind(this));
  }

  this.ask = function(question, done) {
    this.host.stdin.write(question + '\n');
    this.answer = done;

  }

  this.dataReaded = function(data) {
    if (this.answer) {
      this.answer(data.toString());
      this.answer = null;
    }
  }

}

module.exports = Goauld;