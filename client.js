const net = require('net');
const { IP, port } = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: port
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