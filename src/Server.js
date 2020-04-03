const express = require('express');
const app = express();
const fetch = require("node-fetch");
const port = 8000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const getList = async function () {
    let list = [];
    let da;
    let url;
    let pages;
    let randomPage;
    let randomChar;
    for (let i = 0; i < 12; i += 1) {
        da = Math.floor(Math.random() * Math.floor(2))
        da == 1 ? url = `https://rickandmortyapi.com/api/character/?status=alive` : url = `https://rickandmortyapi.com/api/character/?status=dead`;
        pages = getPageNumber(url);
        randomPage = Math.ceil(Math.random() * 8);
        randomChar = Math.floor(Math.random() * 20);
        url = url + '&page=' + randomPage
        console.log(url);
        const x = await fetch(url)
            .then(response => response.json())
            .then(data => {
                return data.results[randomChar];
            })
        list[i] = x;
    }
    return list;
}

const getPageNumber = async function (url) {
    const y = await fetch(url)
        .then(response => response.json())
        .then(data => {
            return data.info.pages;
        })
    return y;
}


app.get('/', async (req, res) => {
    x = await getList()
    res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    res.write(JSON.stringify(x));
    res.end()
})

app.listen(port, (err) => {
    if (err) { console.log(err) };
    console.log('Listening on port ' + port);
})