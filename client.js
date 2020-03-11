const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.177',
    port: 50541
  });

  conn.setEncoding('utf8'); 
  conn.on('connect', () => {
    conn.write("Name: BAR");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 1000);
    
    });
  // conn.on('data', (data) => {
  //   console.log('Successfully connected to game server');
  // });
  // interpret incoming data as text
 

  // conn.on('data', (data) => {
  //   console.log('Server says: ', data);
    
  // });

  return conn;
};

module.exports = { connect };