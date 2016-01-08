/**
 * Created by yan on 16-1-8.
 */
var http = require('http');
var net = require('net');
var count = '';
var socket = net.connect({
    host: 'redis',
    port: 6379
});
socket.on('data', function (res) {
    count = res.toString();
});
socket.on('error',function(){
    console.error(arguments);
});
var server = http.createServer(function (req, res) {
    res.end(count);
    socket.write('*2\r\n$4\r\nINCR\r\n$1\r\nC\r\n');
});
server.listen(80)