var questions = [
    {
        prompt: "What is the HTML tag under which one can write JavaScript code?\n(a) <javascript>\n(b) <scripted>\n(c) <script>\n(d) <js>\n",
        answer: "c"
    },
    {
        prompt: "Which of the following is the correct syntax to display 'Mason is aweosme'?\n(a) alertbox('Mason is Awesome');\n(b) msg('Mason is awesome');\n(c) msgbox('Mason is awesome')\n(d) alert('Mason is awesome');\n",
        answer: "d"
    },
    {
        prompt: "The external JavaScript file must contain <script> tag?\n(a) True\n(b) False\n",
        answer: "b"
    },
    {
        prompt: "Which of the following is not a reserved word in JavaScript?\n(a) interface\n(b) throws\n(c) program\n",
        answer: "c"
    },
]
var score = 0
for(var i=0; i < question.length; i++) {
    var respone = window.prompt(questions[i].prompt);
    if(respone == quesitons[i].answer){
        score++;
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
}
alert("you got " + score + "/" + questions.length);