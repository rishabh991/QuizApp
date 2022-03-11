const readLineSync = require('readline-sync');

console.log('Comedy Quiz 2022\n');

const questions=[
  {
   question:'Who amongst these is a standup comedian?',
   options:{a:'Virat Kohli', b:'Miley Cyrus', c:'Zakir Khan', d:'Sonu Nigam'},
   correctAnswer:'c'
  },
  {
    question:'The phrase "main kya karu, job chhod du phir?" belongs to?',
    options:{a:'Kapil Sharma', b:'Abhishek Upmanyu', c:'Zakir Khan', d:'Vir Das'},
    correctAnswer:'b'
  },
  {
    question:'Who is the richest Indian comedian?',
    options:{a:'Kapil Sharma', b:'Johnny Lever', c:'Zakir Khan', d:'Sunil Grover'},
    correctAnswer:'a'
  },
   {
    question:'Who amongst these is a silent comedian?',
    options:{a:'Rowan Atkinson', b:'Kanan Gill', c:'Biswa Kalyan', d:'Steve Harvey'},
    correctAnswer:'a'
   },
   {
    question:'Which amongst these is a romcom?',
    options:{a:'Harry Potter', b:'The Dictator', c:'Notting Hill', d:'Interstellar'},
    correctAnswer:'c'
   }
]

const checker=(input, correct) => input === correct;

const ask = (ques, options)=>{
  console.log(`\n${ques}`);
  Object.keys(options).forEach(option=>console.log(`${option}: ${options[option]}`));
}

const quizLogic=(questions)=>{
  readLineSync.question(`Press enter to begin.`);
  
  let points=0;
  for(const ques of questions){
	const answer=readLineSync.question(ask(ques.question, ques.options));
	result=checker(answer, ques.correctAnswer);
	if(result){
		console.log(`You're right!\n`)
		points++;
    } else {
		console.log(`Sorry, you're wrong this time :(\n`)
	}
  }
    readLineSync.question(`Score = ${points}. \nThank you for taking the quiz.\nPress enter to end.`);
}

quizLogic(questions)