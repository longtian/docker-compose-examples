/**
 * Created by yan on 16-1-8.
 */
var dgram = require('dgram');
var socket = dgram.createSocket('udp4');
function writeLine(str) {
    var buffer = new Buffer(str);
    socket.send(buffer, 0, buffer.length, 4444, 'influxdb')
}

socket.unref();

setInterval(function () {
    var mem= process.memoryUsage();
    writeLine(`memory rss=${mem.rss},heapTotal=${mem.heapTotal},heapUsed=${mem.heapUsed}`)
}, 300)

