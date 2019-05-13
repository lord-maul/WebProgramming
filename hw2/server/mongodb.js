var mongo = require('mongodb');

var MongoClient = mongo.MongoClient;
let url = '47.103.96.205';
let port = '27017';
let user_name = 'root';
let pwd = '58479958yH';

let film_list = [];
let one_film = null;

let get_films = function(db, callback) {
    let cursor = db.db('films').collection('films').find().skip(20).limit(2);
    cursor.each(function(err, doc) {
        if (doc !== null) {
            // console.log(doc);
            one_film = doc;
        } else {
            callback();
        }
    });
};

let get_one_film = function(db, callback) {

};

let connect_mongo = (do_sth) => {
    MongoClient.connect('mongodb://' + user_name + ':' + pwd + '@' + url + ':' + port + '/' + 'films', function(err, db) {
        if (err) {
            console.log(err);
        } else {
            console.log('Mongo Conn....');
            do_sth(db, function() {
                db.close();
            })
        }
    });
}