//import express from 'express'
const express = require('express');
const { copyFileSync } = require('fs');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const app = express()
const bodyParser = require('body-parser');
const multer  = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})

const upload = multer();
const port = 5000;
app.use(cors())
app.use(bodyParser.json());
app. use (bodyParser. urlencoded ({ extended : true }));
app.get('/', (req,res) => {
    console.log(req.body);
    console.log('p')
});



app.get('/countries', (req,res) => {
    let obj = JSON.parse(fs.readFileSync('./countriesDB.json').toString());
    return res.json(obj);
});

app.post('/uploadf', upload.single("file"), (req, res, next) => {
    console.log('name', req.name);
    let name = req.body.name;
    let country = req.body.country;
    let format = req.file.mimetype.split('/')[1];
    console.log('file', req.file);
    fs.writeFileSync(`./bpla/${name}.jpg`, req.file.buffer);
    let json = JSON.parse(fs.readFileSync('./countriesDB.json').toString());
    json = json.countries;
    for (let c of json) {
        if (c.name == country) {
            c.to = [...c.to, name];
        }
    }
    fs.writeFileSync('./countriesDB.json', JSON.stringify({countries: json}, null, 10));
});

app.get('/editcell', (req, res) => {
    let name = req.query.name;
    let char = req.query.char;
    let value = req.query.value;

    let all = JSON.parse(fs.readFileSync('./chars.json').toString()).chars;
    for (let bp of all) {
        if (bp.name == name) {
            bp.about[char] = value;
            fs.writeFileSync('./chars.json', JSON.stringify({chars: all}, null, 10));
            return res.json({status: 200})
        }
    }

});

app.get('/add', (req, res) => {
    let country = req.query.country;
    let name = req.query.name;
    let obj = JSON.parse(fs.readFileSync('./countriesDB.json').toString());
    obj = obj.countries;
    console.log('obj', obj);
    if (country && name) {
        for (let count of obj) {
            if (count.name == country) {
                console.log('beforeadd', count);
                count.to = [...count.to, name];
                console.log('afteradd', count);
            }
        }
    }
    fs.writeFileSync('./countriesDB.json', JSON.stringify({countries: obj}, null, 10));
    return res.json(obj);
})

app.get('/delete', (req, res) => {
    let country = req.query.country;
    let name = req.query.name;
    let obj = JSON.parse(fs.readFileSync('./countriesDB.json').toString());
    obj = obj.countries;
    console.log('obj', obj);
    if (country && name) {
        for (let count of obj) {
            if (count.name == country) {
                console.log('beforeadd', count);
                //count.to = [...count.to, name];
                count.to = count.to.filter(el => el != name);
                console.log('afteradd', count);
            }
        }
    }
    fs.writeFileSync('./countriesDB.json', JSON.stringify({countries: obj}, null, 10));
    return res.json(obj);
})

app.get('/image', (req, res) => {
    let name = req.query.name;
    //let img = fs.readFileSync(`./bpla/${name}.jpg`);
    return res.sendFile(path.resolve(`./bpla/${name}.jpg`));

})

app.post('/upload', (req, res) => {
    let body = req.body;
    console.log('body', body);
    console.log('files', req.files);
    console.log('file', req.file);
})
app.get('/info', (req, res) => {
    let name = req.query.name;
    console.log('infoname', name);
    let all = JSON.parse(fs.readFileSync('./chars.json').toString()).chars;
    for (let bp of all) {
        if (bp.name == name) {
             console.log('found')
            return res.json(bp.about);
        }
    }
    return res.json({});
})

app.listen(port, console.log('Работает на 5000'));