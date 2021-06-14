////Function to setCookies////////////
function setCookie(cookieName, cookieValue, expiryDate) {
    document.cookie = cookieName + "=" + cookieValue + ";expires=Thu, 01 Jan 2970 00:00:01 GMT";
}


/*
Models:
        - Question: {quesyionTitle, AnswerObject}
        - Answers:  {Array of answers, Right answer index}
*/

var Question = function (strQues, ans) {
    this.question = strQues;
    this.answer = ans;
}

var Ans = function (_ans1, _ans2, _ans3, _ans4, _Rans) {
    this.answers = [_ans1, _ans2, _ans3, _ans4];
    this.Rans = _Rans;
}

/*
            -----Data----
*/
var anss1= new Ans("lunar module","Neil Armstrong","Yuri Gagarin","Buzz Aldrin","Yuri Gagarin");
var Q1= new Question("who is the first person to travel to space?",anss1);

var anss2= new Ans("Apollo 9","Apollo 9","Apollo 10","Apollo 11","Apollo 11");
var Q2= new Question("What is the spaceflight that first landed humans on the Moon?",anss2);

var anss3= new Ans("78","79","80","81","79");
var Q3= new Question("how many moon in jupiter?",anss3);

var anss4= new Ans("5.88 million miles","5.88 trillion miles","5.88 Billion miles","5.88 zillion miles","5.88 trillion miles");
var Q4= new Question("How far is a light-year?",anss4);

var anss5= new Ans("Washington","New York","Virginia","california","Washington");
var Q5= new Question("Where is the NASA Headquarters?",anss5);

var anss6= new Ans("Washington","New York","Virginia","California","California");
var Q6= new Question("Where is the SpaceX Headquarters?",anss6);

var anss7= new Ans("Green","Red","Blue","Orange","Blue");
var Q7= new Question("What is the sunset color on Mars",anss7);

var anss8= new Ans("Jupiter","Mercury","Mar","Venus","Venus");
var Q8= new Question("What is the hottest planet in our solar system?",anss8);

var anss9= new Ans("225","125","25","15","225");
var Q9= new Question("How many Venus years is equivalent to an Earth year?",anss9);

var anss10= new Ans("68","78","88","98","88");
var Q10= new Question("How long is a Mercury year?",anss10);

var arrQ = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10];

/*
    to get random arrange of questions with every new restart 
*/
var flag = true;
var rand = [];
for (var j = 0; j < 10; j++) {
    do {
        flag = true;
        var index = parseInt(10 * Math.random());
        for (var check = 0; check < rand.length; check++) {
            if (rand[check] == arrQ[index]) {
                flag = false;
            }
        }

    } while (flag != true)
    rand[j] = arrQ[index];
}


/*
    set Question titles and 4 answers
*/ 
var anscheckedIds = [0,0,0,0,0,0,0,0,0,0];
var count = 0;
function setQuestion(Question) {
    var ques = document.getElementById("quesID");
    ques.innerText = Question.question;
    for (var i = 0; i < 4; i++) {
        document.getElementsByName("ans")[i].value = Question.answer.answers[i];
        document.getElementsByClassName("quesAns")[i].innerHTML = Question.answer.answers[i];
        document.getElementsByName("ans")[i].checked = false; 
    }
    if(anscheckedIds[count] !== 0)
        document.getElementById(anscheckedIds[count]).checked = true;
    
}

/*
    set question number 
*/
function setQuestNumber(index){
    document.getElementById("qno").innerText = index + 1;
}

setQuestion(rand[0]);
setQuestNumber(0)


/// next button ///
function next() {
    if (count < 9) {
        count++;
    } else {
        count = 0;
    }
    if(count == 0){
        document.getElementById("prevbtn").style.display = "none";
    }else if(count == 9){
        document.getElementById("nextbtn").style.display = "none";
    }else{
        document.getElementById("nextbtn").style.display = "inline";
        document.getElementById("prevbtn").style.display = "inline";
    }
    setQuestion(rand[count]);
    setQuestNumber(count);
}

/// prev button ///
function prev() {
    if (count > 0) {
        count--;
    } else {
        count = 9;
    }
    if(count == 0){
        document.getElementById("prevbtn").style.display = "none";
    }else if(count == 9){
        document.getElementById("nextbtn").style.display = "none";
    }else{
        document.getElementById("nextbtn").style.display = "inline";
        document.getElementById("prevbtn").style.display = "inline";
    }
    setQuestion(rand[count]);
    setQuestNumber(count);
}

/// timer ///
var t;
function start(){
    t = setInterval(function(){
        var x = document.getElementById("timer").clientHeight;
        if(x > 510){
            clearInterval(t);
            CalcScore();
            setCookie("score", score);
            window.location.href = "timeup.html";
        }
        x += 10;
        document.getElementById("timer").style.height =  x + "px";
        document.getElementById("timerRockect").style.bottom = x + "px";
    }, 2000);
}


///OnClick of MarkedIndec///

function markedClicked(cnt){
        count = cnt;
        setQuestion(rand[count]);
        setQuestNumber(count);
        document.getElementById(count).remove();
        var x = arr.indexOf(count);
        arr.splice(x,1);   
}

var arr = new Array();
/// Mark ///
function addToMarked(){
    var x = count;
    if(!arr.includes(x)){
        arr.push(x);
        var div=document.getElementById("marked");
        var quesMarked = document.createElement("button");
        quesMarked.appendChild(document.createTextNode("Question " + (x+1)));
        quesMarked.setAttribute("onclick", "markedClicked("+x+")");
        quesMarked.id = x;
        quesMarked.className = "markedButtons";
        div.appendChild(quesMarked);
    }
}


///choose answers///
var arrAns = [0,0,0,0,0,0,0,0,0,0];
// var anscheckedIds = [0,0,0,0,0,0,0,0,0,0];
function getAns()
{
    var valueSelected = document.querySelector('input[name="ans"]:checked').value;
    anscheckedIds[count] = document.querySelector('input[name="ans"]:checked').id;
    if(valueSelected == rand[count].answer.Rans)
        arrAns[count]= 10;
    else
        arrAns[count]= 0;
    console.log(anscheckedIds);
}

//// Total Score////
var score = 0;
function CalcScore(){
    score = 0;
    for(var index=0; index<arrAns.length; index++)
    {
        score += arrAns[index];
    }
    arrAns = [0,0,0,0,0,0,0,0,0,0];
    anscheckedIds = [0,0,0,0,0,0,0,0,0,0];
}

//// sumbit btn ////
function sumbit(){
    CalcScore();
    setCookie("score", score);
    window.location.href = "../Pages/final.html"
}