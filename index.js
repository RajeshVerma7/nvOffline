var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 4444));

app.get('/', function(req, res) {
    res.send('try at /js/offline.js');
})

app.get('/js/:name', function(req, res) {

    var options = {
        root: __dirname + '/dist/',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    var fileName = req.params.name;
    res.sendFile(fileName, options, function(err) {
        if (err) {
            console.log(err);
        }
    });
});


app.listen(app.get('port'), function() {
    console.log('app at port:- ' + app.get('port'));
});