const questions: Array<IQuestions> = [
  {
    question: 'Which language runs in a web browser?',
    options: ['Java', 'C', 'Python', 'JavaScript'],
    answer: 3
  },
  {
    question: 'What does CSS stand for?',
    options: ['Central Style Sheets', 'Cascading Style Sheets', 'Cascading Simple Sheets', 'Cars SUVs Sailboats'],
    answer: 1
  },
  {
    question: 'What does HTML stand for?',
    options: [
      'Hypertext Markdown Language',
      'Hypertext Markup Language',
      'Hyperloop Machine Language',
      'Helicopters Terminals Motorboats Lamborginis'
    ],
    answer: 1
  },
  {
    question: 'What year was JavaScript launched?',
    options: ['1996', '1994', '1995', 'None of the above'],
    answer: 2
  }
];

export default questions;

interface IQuestions {
  question: string;
  options: Array<string>;
  answer: number;
}
