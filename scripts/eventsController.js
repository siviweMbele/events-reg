var fs = require('fs');
var path = require('path');
var rootPath = path.normalize(__dirname + '/../');


module.exports.get = function(req,res){
    var event = fs.readFileSync('app/data/event/'+ req.params.id + '.json', 'utf8');
    res.setHeader('Content-Type','application/json');
    res.send(event);
}

module.exports.save = function(req,res){
    var event = req.body;
    fs.writeFileSync('app/data/event/'+ req.params.id + '.json', JSON.stringify(event));
    res.send(event);
}

module.exports.getAll = function (req, res) {

    var path =  '/app/data/event/';
    var path2 =  'app/data/event/';
     var files = [];

     try {
        files = fs.readdirSync(rootPath + path);

    } catch (e) {
         res.send('[]');
         return res.end();
    }

    var results = '[';

    for (var idx = 0; idx < files.length; idx++) {
        if (files[idx].indexOf('.json') == files[idx].length - 5) {
            results += fs.readFileSync(path2 + files[idx] , 'utf8')+','
        }
    }
    results = results.substr(0, results.length - 1);
    results += ']';

    res.setHeader('Content-Type','application/json');
    res.send(results);
    res.end();
}



