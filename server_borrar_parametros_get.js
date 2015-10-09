var express = require('express');
var app = express();

app.get('/user/:id', function(req, res){
  //res.send('user: ' + req.params.id);

  var par = String(req.params.id);
  var parametros = par.split('-');
  console.log('recibimos un '+par);

  var _ID, surveyName, chapterName = '';

  if ( parametros.length === 3 ){

  		_ID = parametros[0];
  		surveyName = parametros[1];
  		chapterName= parametros[2];

  } else {
  		console.log('no hubo arreglo valido.');
  }

  res.writeHead(200, {"Content-Type": "application/json"});
  var ajson = JSON.stringify({ 
    idtable: _ID, 
    survey: surveyName, 
    chapter: chapterName
  });

  res.end(ajson);

});

app.get('/user/cuadro/:id', function(req, res){
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
                    console.log("API didn't connect to the mongoDB server. Error:", err);
                } else {

            //HURRAY!! We are connected. :)
                console.log('API conectada a:', url);

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

app.listen(3000);