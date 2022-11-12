// making our first server

const http = require('http');
const port = 8000;

// for reading html file
// fs = file system
const fs = require('fs');
// console.log(http);
// creating the server


// res: response, req: request
function requestHandler(req, res) {
    // res:- response
    console.log(req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    // its difficult to add whole html to render 
    // so we create another html file and say nodejs to render that html file
    // res.end('<h1>gotcha!</h1>');

    // readfile is an asynchronous function
    // fs.readFile('index.html', function(err, data) {
    //     if (err) {
    //         console.log("error"+err);
    //         return res.end('<h1>Error!</h1>');
    //     }
    //     return res.end(data);
    // });


    // for rendering multiple html pages
    let filePath;
    switch(req.url){
        case '/':
            filePath = "./index.html"
            break;
        case '/index':
            filePath = "./index.html"
            break;
        case '/index.html':
            filePath = "./index.html"
            break;
        case '/profile':
            filePath = "./profile.html"
            break;
        default:
            filePath = "./404.html"
    }

    fs.readFile(filePath, function(err, data) {
        if (err) {
            console.log("error",err);
            return res.end('<h1>Error!</h1>');
        }
        return res.end(data);
    });

}


// if server created successfully then requestHandler is called
const server = http.createServer(requestHandler);

server.listen(port, function(err) {
    if(err) {
        throw err;
        return;
    }
    console.log('Server is up and listening on port: '+ port);
});