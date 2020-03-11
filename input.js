const stdin = process.stdin;

const setupInput = function(data) {
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return handleUserInput(data); //prev~stdin;
};

const handleUserInput = function() {
  stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.exit();
      }
    })
};

setupInput();

module.exports = { setupInput };