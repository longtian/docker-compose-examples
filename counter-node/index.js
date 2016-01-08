/**
 * Created by yan on 16-1-8.
 */
var http = require('http');
var count = 0;
var server = http.createServer(function (req, res) {
    count++;
    res.end('' + count);
});
server.listen(80)