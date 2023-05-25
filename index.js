// JavaScript source code
// работает

// const express = require('express')
// const app = express()
// const port = 3001

// app.get('/', (req, res) => {
//   res.status(200).send('Hello World!');
// })

// app.listen(port, () => {
//     console.log(`App running on port ${port}.`)
// })



//подключение к базе

const express = require('express')
const app = express()
const port = 3001

const merchant_model = require('./merchant_model')

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});


// отобразить запись
app.get('/', (req, res) => {
  merchant_model.getMerchants()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})


// создать запись
app.post('/merchants', (req, res) => {
  merchant_model.createMerchant(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

// удалить запись что означает строка app.delete('/merchants/:id', (req, res) => {  === конкретно запись '/merchants/:id'
app.delete('/merchants/:id', (req, res) => {
  merchant_model.deleteMerchant(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})


// изменить запись - что означает строка app.edit('/merchants/upd', (req, res) => {  === === конкретно запись '/merchants/upd'
app.edit('/merchants/upd', (req, res) => {
  merchant_model.editMerchant(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})



app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})





// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

//  ReactDOM.render(<app>, document.getElementById('root')); </app>