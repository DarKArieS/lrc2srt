
import express from "express";
import * as fs from 'fs';

const app = express();
const port = 8080;

app.use('/styles', express.static('styles'));

// app.get("/test", (req, res) => {
//     let html = fs.readFileSync(__dirname +'/index.html')
//     res.writeHead(200, {"contentType": "text/html"});
//     res.end(html);
// });

app.get('/', function(req, res){
    res.sendfile(__dirname + "/index.html");
});

app.get('/lrc2srt', function(req, res){
    res.sendfile(__dirname + "/lrc2srt.js");
});

app.get('/jszip', function(req, res){
    res.sendfile(__dirname + "/node_modules/jszip/dist/jszip.min.js");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});