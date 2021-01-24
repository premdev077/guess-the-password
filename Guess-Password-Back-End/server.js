  
const express = require('express');
const path = require('path');
const storage = require('node-storage');
var cors = require('cors')
const store = new storage('./file');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

// place holder for the data
const answers = [];

app.use(bodyParser.json());
app.use(cors())

app.get('/api/new-password', (req, res) => {
    const hintNumbers = [];
    const actualPassword = [];

    for (var i = 0; i < 8; i ++) {
        while (true) {
            const number = Math.floor(Math.random() * 10);
            if (!hintNumbers.includes(number)) {
                hintNumbers.push(number);
                break;
            } 
        }
    }

    for (var i = 0; i < 8; i ++) {
      while (true) {
          const number = Math.floor(Math.random() * 10);
          if (!actualPassword.includes(number)) {
              actualPassword.push(number);
              break;
          } 
      }
  }

  store.put('hint', hintNumbers);
  store.put('actualPassword', actualPassword);

  res.json({
    hint: hintNumbers.join(''),
  });
});

app.post('/api/verify-password', (req, res) => {
  const hint = req.body.hint;
  const answer = req.body.answer;
  const answerSplit = answer.split('');
  const actualPassword = store.get('actualPassword');
  const correctNumber = [];
  var isCorrect = 0;

  for( i = 0; i < answerSplit.length; i++) {
    if (parseInt(answerSplit[i]) === parseInt(actualPassword[i])) {
      correctNumber.push(answerSplit[i]);

      isCorrect += 1;
    }
  }

  answers.push(answer);
  res.json({
    hint: hint,
    answer: answer,
    highlight: correctNumber,
    correct: isCorrect === 8 ? true : false,
  });
});

app.get('/', (req,res) => {
  res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});