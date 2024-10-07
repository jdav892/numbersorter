const http = require('http')
const fs = require('fs')
const url = require('url')
const figlet = require('figlet')
const PORT = 8000

const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname;
    console.log(page);
    if (page == '/'){
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end()
        })
    }
    else if (page == '/css/styles.css'){
        fs.readFile('css/styles.css', function(err, data){
            res.write(data);
            res.end()
        });
    }

    else if (page == 'js/script.js'){
        fs.readFile('js/script.js', function (err, data){
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.write(data);
            res.end()
        })
    }
    else{
        figlet('404', function(err, data){
            if(err){
                console.log('ERROR');
                console.dir(err);
                return;
            }
            res.write(data);
        })
    }
})
console.log(`Listening on port ${PORT}`)
server.listen(PORT)