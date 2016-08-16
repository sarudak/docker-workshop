var nano = require('nano'),
    cdb = nano('http://cdb:5984'),
    dbname = 'hellopeople',
    db = cdb.use(dbname);

// ensure DB is created
cdb.db.get(dbname, (err, odb) => {
    if(!odb) {
        cdb.db.create(dbname);
    }
});

var restify = require('restify'),
    server = restify.createServer();

server.use(restify.bodyParser());
server.use(restify.queryParser());

server.get('/name/:name', (req, res, next) => {
    var n = req.params.name;
    db.get(n, (er, bod) => {
        if(er) {
            res.json({error: er});
        } else {
            res.json(bod);
        }
        next();
    });
});

server.put('/name/:name', (req,res,next) => {
    var n = req.params.name;
    var doc = JSON.parse(req.body);
    db.get(n, (error, original) => {
        if (original) {
            doc._rev = original._rev;
        }
        db.insert(doc, n, (er, body) => {
            if(er) {
                res.json({error: er});
            } else {
                res.json({ok: true});
            }
            next();
        });

    });
});

var port = 8199;
server.listen(port, () => { console.log(`server listening on port ${port}`); });

