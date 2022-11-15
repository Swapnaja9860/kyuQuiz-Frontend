const questions = [
    {
      question: 'Where is Taj Mahal Located?',
      options: ['Mumbai', 'Agra', 'New Delhi', 'None of these'],
      answers: [2],
      explanation: 'Common Fact',
      marks: 5,
      isMultiSelect: false,
    },
    {
      question: 'Who won the IPL title 4 times?',
      options: [
        'Mumbai Indians',
        'Chennai Super Kings',
        'Sunrisers Hyderabad',
        'Kolkata Knight Riders',
      ],
      answers: [1,2,3,4],
      explanation: 'Mumbai Indians won IPL in 2013,2015,2017 and 2019.',
      marks: 5,
      isMultiSelect: true,
    },
    {
      question: 'Where is statue of Ahinsa located?',
      options: ['Mysooree', 'Patna', 'Nashik', 'Thiruvananthapuram'],
      answers: [1,2,3,4],
      explanation:
        'The Statue of Ahimsa (121 feet tall), depicts the first Jain Tirthankara, Rishabhanatha, is located at Mangi-Tungi, near Nashik in the Indian state of Maharashtra.',
      marks: 5,
      isMultiSelect: true,
    },
    {
      question: "Which of the following is called 'City of Lakes' ?",
      options: ['New Delhi', 'Mount Abu', 'Nainital', 'Udaipur'],
      answers: [4],
      explanation:
        'Set around a series of artificial lakes, Udaipur is also known for its lavish royal residences',
      marks: 5,
      isMultiSelect: true,
    },
    {
      question: 'Which is the first smart city in world?',
      options: ['New Jersey', 'Seoul', 'Vatican City', 'California'],
      answers: [2],
      explanation:
        "Seoul has been immersed in smart technology for years, having been named the world's first smart city back in 2014.",
      marks: 5,
      isMultiSelect: false,
    },
    {
      question: 'Where is Gateway of India Located?',
      options: ['Mumbai', 'Chennai', 'New Delhi', 'Hyderabad'],
      answers: [1],
      explanation: 'Common Fact',
      marks: 5,
      isMultiSelect: false,
    },
    {
      question: 'Which team won the IPL in 2019?',
      options: [
        'Mumbai Indians',
        'Chennai Super Kings',
        'Sunrisers Hyderabad',
        'Kolkata Knight Riders',
      ],
      answers: [1,2,3,4],
      explanation:
        'Mumbai Indians won IPL in 2019, defeating Chennai Super Kings in the finals.',
      marks: 5,
      isMultiSelect: true,
    },
    {
      question: 'Which is the tallest waterfalls in the world ?',
      options: ['Jog Falls', 'Tugela Falls', 'Angel Falls', 'Victoria Falls'],
      answers: [1,2,3,4],
      explanation:
        ' Angel Falls (Salto ÄÂngel) in Venezuela is the highest waterfall in the world. The falls are 3230 feet in height.',
      marks: 5,
      isMultiSelect: true,
    },
    {
      question: "Which of the following is called 'the Land of Rising Sun' ?",
      options: ['India', 'China', 'U.S.A', 'Japan'],
      answers: [1,2,3,4],
      explanation:
        'According to the words of the Japanese envoy himself, that name was chosen because the country was so close to where the sun rises. In any event, the name stuck, and for the last 1400 years or so, the world has referred to Japan as Nippon, the land of the rising sun.',
      marks: 5,
      isMultiSelect: true,
    },
    {
      question: 'Which is the southernmost point of India?',
      options: ['Siachin', 'Indira Point', 'Thiruvananthapuram', 'Kanyakumari'],
      answers: [1,2,3,4],
      explanation:
        "The southernmost point of the Indian territory is Indira Point in the Andaman & Nicobar Islands. It's Cape Comorin or Kanyakumari that is the southernmost point in mainland India.",
      marks: 5,
      isMultiSelect: true,
    },
    {
      question:
        'Which of the following functions treats its arguement string as if it had actually been coded at that point in the program?',
      options: ['bind()', 'apply()', 'eval()', 'with()'],
      answers: [1,2,3,4],
      explanation:
        "eval() is a function used to cheat lexical scope. For eg. eval('var a=2')",
      marks: 5,
      isMultiSelect: true,
    },
    {
      question:
        'What would be the output of following code? console.log(Number([]))',
      options: ['NaN', '0', "'0'", "'NaN'"],
      answers: [2],
      explanation: 'Common Fact',
      marks: 5,
      isMultiSelect: false,
    },
    {
      question: 'Which of the following is not an "ES6" feature ?',
      options: [
        'let statement',
        'Promises',
        'arrow functions',
        'Strict Equality(===)',
      ],
      answers: [3],
      explanation:
        'The Strict Equality feature was also in the older versions of Javascript. However, other features had been introduced in ES6 (2015) .',
      marks: 5,
      isMultiSelect: false
    },
    {
      question:
        "What is the output of the code snippet? var obj={a:42,b:'hello'}; var b='a'; console.log(obj[b]+obj.b);",
      options: ['42hello', 'hello42', '84', 'hellohello'],
      answers: [1,2,3,4],
      explanation:
        "When[] is used to access property, the property name should be in double quotes or single quotes. Also, when '+' is used with a string, it is used as 'concatenation operator'",
      marks: 5,
      isMultiSelect: true,
    },
    {
      question: "Which of the following brands invented 'JavaScript'?",
      options: ['Mozilla', 'Netscape', 'Opera', 'Google'],
      answers: [2],
      explanation:
        'Netscape is a brand name associated with the development of the Netscape web browser. It created the JavaScript programming language, the most widely used language for client-side scripting of web pages, to be used in its Netscape browser, at first.',
      marks: 5,
      isMultiSelect: false,
    },
    {
      question:
        "What is the output of below given code snippet? var a=[1,2,3]; var b=[1,2,3]; var c='1,2,3' console.log(a==c) console.log(b==c) console.log(a==b)",
      options: [
        'true, true, false',
        'false, false, true',
        'true, true, true',
        'false, false, false',
      ],
      answers: [1],
      explanation:
        "On comparing objects in JS (Arrays are also built-in objects in JS), values are actually held by references. So, only references are compared, not values. Arrays are by default, coeisMultiSelected to all values with comma, in a string, when compared with a string. For eg. [1,2,3] becomes '1,2,3'",
      marks: 5,
      isMultiSelect: false,
    },
    {
      question: 'If x!==x in JavaScript, find the value of x?',
      options: ['undefined', 'NaN', 'null', 'window object'],
      answers: [1,2,3,4],
      explanation:
        'NaN is not equal to NaN. This concept is used to polyfil the function for isNaN() for older browsers.',
      marks: 5,
      isMultiSelect: true,
    },
    {
      question: 'What would parseInt(1/0,19) return ?',
      options: ['Infinity', 'NaN', '19', '18'],
      answers: [4],
      explanation:
        "The second arguement of parseInt() is the radix value. When 1/0 is performed, it returns 'Infinity', the radix value being 19 (means symbols from 0-9 and a-i used), it returns 'i', so output is equivalent to decimal value of '18' ",
      marks: 5,
      isMultiSelect: false,
    },
    {
      question: 'Who developed JavaScript?',
      options: [
        'Brendan Eich',
        'Guido van Rossum',
        'James Gosling',
        'Bjarne Stroustrup',
      ],
      answers: [1],
      explanation:
        'Brendan Eich, a Netscape Communications Corporation programmer, created JavaScript in September 1995. ',
      marks: 5,
      isMultiSelect: false,
    },
  ];
  export default questions;