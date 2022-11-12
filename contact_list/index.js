const express = require('express');
const port = 5001;
const path = require('path'); // inbuilt in node 

// requiring the database
const db = require('./config/mongoose');

// requiring the contact schema
const Contact = require('./models/contact');

// this will have all the functionalities of express to run the server
const app = express();


// telling express to use ejs template engine
app.set('view engine', 'ejs');
// path of views
app.set('views', path.join(__dirname, 'views'));
// console.log(__dirname);

// defines middleware only for the form (parser) (predefined middleware)
app.use(express.urlencoded());

// to use external css and images
app.use(express.static('assets'));

// creating our own middleware
// app.use(function(req, res, next){
//     console.log('Inside the middleware 1');
//     next();
// })

// // middleware 2
// app.use(function(req, res, next){
//     console.log('Inside the middleware 2');
//     next();
// })

var contactList = [
    {
        name: "Arpan",
        phone: "1234567890"
    },
    {
        name: "Tony stark",
        phone: "11111111111"
    },
    {
        name: "Vaibhav Varshney",
        phone: "7894561230"
    },
]

app.get('/', function(req, res){
    // console.log(req);
    // res.send('<h1>cool, it is running!</h1>'); 
    
    // connecting it to the db
    Contact.find({}, function(err, contacts){
        if(err){
            console.log('error in fetching contact', err);
            return;
        }
        return res.render('home', {
            title: "Contacts List", // simple string
            contact_list: contacts // array
        });
    })

    // using when not connected to db
    // returning and passing variables to the ejs
    // return res.render('home', {
    //     title: "Contacts List", // simple string
    //     contact_list: contactList // array
    // });
})

app.get('/practice', function (req, res){
    return res.render('practice', {
        title:"practice",
        h1: "let's play with ejs"
    })
});


// for deleting the contact 
// app.get('/delete-contact/:phone', function(req, res){
// query method
app.get('/delete-contact', function(req, res){
    // using params
    // console.log(req.params);
    // let phone = req.params.phone;

    // using query
    // get the query from the url
    // console.log(req.query);
    // let phone = req.query.phone;

    // // getting the index of the found phone
    // let contactIndex = contactList.findIndex(contact => contact.phone == phone);

    // if(contactIndex != -1){
    //     contactList.splice(contactIndex, 1);
    // }
    // return res.redirect('back');


    // with db
    // get the id from the query in the url 
    let id = req.query.id;
    // find the contact in the database using id and delete it
    Contact.findByIdAndDelete(id, function(err){
        if(err){
            console.log('error in deleting the contact', err);
            return;
        }
        return res.redirect('back');
    });
})


// if submit is clicked in the form then it will send the data to POST method
// controller
app.post('/create-contact', function(req, res){
    
    // 1. for adding it to the array
    // console.log(req.body.name);
    // console.log(req.body.phone);
    // contactList.push(req.body);

    // 2. for adding it to the db
    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    }, function(err, newContact){
        if(err){
            console.log('error in creating contact', err);
            return;
        }
        // console.log("************",newContact);
        res.redirect('back');
    });

    // also to push to the array
    // contactList.push({
    //     name: req.body.name,
    //     phone: req.body.phone
    // })

    // return res.redirect('/');
    // also
    // return res.redirect('back');
    // not using above thing while connecting to db
})

app.listen(port, function(err){
    if(err){
        console.log('error in running the server', err);
        return ;
    }

    console.log('yay! express is running on port ' + port);
})