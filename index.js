const express = require('express');
const request = require('request');
const app = express();
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', { transalate: null, error: null })

});
app.listen(3000, () => {
    console.log("server ")
})

    app.post('/', (req, res) => {
var request = require("request");
let moviename = req.body.city_name
let input = req.body.input_lang
let output = req.body.output_lang
var options = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
  headers: {
    'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
    'x-rapidapi-key': '3c5652e1bcmsh6b58e18266de2c0p1437bdjsn6dfb08d48596',
  },
  form: {source: input, q: moviename, target: output}
};

request(options, function (error, response, body) {
console.log(body)
    if (error) {
        res.render('index', { transalate: null, error: 'Error Please try again' })
    }
    else {
        transalate = JSON.parse(body)
        res.render('index', { transalate: transalate, error: null,  })
    }
});
})
