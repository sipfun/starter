var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




    //GET - Listar tareas
router.get('/pruebas', function(req, res, next){
        
        var mongodb = require('mongodb');

        //We need to work with "MongoClient" interface in order to connect to a mongodb server.
        var MongoClient = mongodb.MongoClient;

        // Connection URL. This is where your mongodb server is running.
        var url = 'mongodb://localhost:27017/prueba';

        // Use connect method to connect to the Server
        MongoClient.connect(url, function (err, db) {
                if (err) {
                    console.log('Unable to connect to the mongoDB server. Error:', err);
                } else {
            //HURRAY!! We are connected. :)
                    console.log('Connection established to', url);
                    var Tareas = db.collection('cuadro1');
                    Tareas.find().toArray(function(err, tareas){
                        if (err) {return next(err); }

                        res.json(tareas);
                    });

            //Close connection
            //db.close();
                }
            });
        
});

router.get('/cuadro-angular-grid/:id', function(req, res, next){

        // obtengo el parametro desde la url y lo descompongo en los diferentes parametros
        // id, encuesta y capitulo para obtener los datos respectivos.
        var _ID = String(req.params.id);

        // realizo la consulta a la base de datos
        var mongodb = require('mongodb');

        //We need to work with "MongoClient" interface in order to connect to a mongodb server.
        var MongoClient = mongodb.MongoClient;
        var Db = mongodb.Db;

        // Connection URL. This is where your mongodb server is running.
        var url = 'mongodb://localhost:27017/prueba';

        // Use connect method to connect to the Server
        MongoClient.connect(url, {native_parser:true}, function (err, db) {
                if (err) {
                    console.log('Unable to connect to the mongoDB server. Error:', err);
                } else {

            //HURRAY!! We are connected. :)
                console.log('Jnos conectamos a:', url);

                var Grid = db.collection('grid');
                Grid.findOne({ "tablecode" : _ID },  function(err, docs){
                    if (err) {return next(err); }

                    if(docs !== null){
                    console.dir(docs);
                    res.json(docs);
                    } else { res.json ({});}
                    //Close connection
                    db.close();
                });

                }
        });
        
});


module.exports = router;