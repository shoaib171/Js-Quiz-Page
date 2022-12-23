console.log("This is online quiz conduct javascript page");
const Quiz_Question=[ {
        id:0,
        q:"Q#0:What are the best examples of void elements?",
        answer:[
            {text:"<link><meta><title>",  isCorrect:false},
            {text:"<br><base><source>",  isCorrect:true},
            {text:"<input><br><p>",  isCorrect:false},
            {text:"<area><embed><strong>",  isCorrect:false}
    ]
    },
    {
        id:1,
        q:"Q#01:In HTML5, which tag or tags embed a webpage inside of a webpage",
        answer:[
            {text:"<iframe>",  isCorrect:true},
            {text:"<frame> and <frameset>",  isCorrect:true},
            {text:"<frame>",  isCorrect:false},
            {text:"<iframe>, <frame>, and <frameset>",  isCorrect:false}
    ]
    },
    {
        id:2,
        q:"Q#02:What is the best way to apply bold styling to text?",
        answer:[
            {text:"<b>",  isCorrect:false},
            {text:"<bold>",  isCorrect:true},
            {text:"Use Css",  isCorrect:false},
            {text:"<Strong>",  isCorrect:true}
    ]
    },  
    {
        id:3,
        q:"Q#03:What is NOT a valid attribute for the <textarea> element?",
        answer:[
            {text:"readonly",  isCorrect:false},
            {text:"spellcheck",  isCorrect:true},
            {text:"Max",  isCorrect:true},
            {text:"Well",  isCorrect:false}
    ]
    },
    {
        id:4,
        q:"Q#04:What are the best examples of void elements?",
        answer:[
            {text:"<link><meta><title>",  isCorrect:false},
            {text:"<br><base><source>",  isCorrect:true},
            {text:"<input><br><p>",  isCorrect:false},
            {text:"<area><embed><strong>",  isCorrect:false}
    ]
    },
    {
        id:5,
        q:"Q#05:What are the best examples of void elements?",
        answer:[
            {text:"<link><meta><title>",  isCorrect:false},
            {text:"<br><base><source>",  isCorrect:true},
            {text:"<input><br><p>",  isCorrect:false},
            {text:"<area><embed><strong>",  isCorrect:false}
    ]
    },
    {
        id:6,
        q:"Q#06:What are the best examples of void elements?",
        answer:[
            {text:"<link><meta><title>",  isCorrect:false},
            {text:"<br><base><source>",  isCorrect:true},
            {text:"<input><br><p>",  isCorrect:false},
            {text:"<area><embed><strong>",  isCorrect:false}
    ]
    },
    {
        id:7,
        q:"Q#07:What are the best examples of void elements?",
        answer:[
            {text:"<link><meta><title>",  isCorrect:false},
            {text:"<br><base><source>",  isCorrect:true},
            {text:"<input><br><p>",  isCorrect:false},
            {text:"<area><embed><strong>",  isCorrect:false}
    ]
    },
    {
        id:8,
        q:"Q#08:What are the best examples of void elements?",
        answer:[
            {text:"<link><meta><title>",  isCorrect:false},
            {text:"<br><base><source>",  isCorrect:true},
            {text:"<input><br><p>",  isCorrect:false},
            {text:"<area><embed><strong>",  isCorrect:false}
    ]
    },
    {
        id:9,
        q:"Q#09:What are the best examples of void elements?",
        answer:[
            {text:"<link><meta><title>",  isCorrect:false},
            {text:"<br><base><source>",  isCorrect:true},
            {text:"<input><br><p>",  isCorrect:false},
            {text:"<area><embed><strong>",  isCorrect:false}
    ]
    },
    {
        id:10,
        q:"Q#010:What are the best examples of void elements?",
        answer:[
            {text:"<link><meta><title>",  isCorrect:false},
            {text:"<br><base><source>",  isCorrect:true},
            {text:"<input><br><p>",  isCorrect:false},
            {text:"<area><embed><strong>",  isCorrect:false}
    ]
    }
]

var start=true;
function iteration(id){
    // Getting Result by target classname to display true/false
    var result=document.getElementsByClassName("result");
    result[0].innerText="";
 
    //Getting Question to display in page;

    const question=document.getElementById("questions");
    //setting question text value to show for mcq
    question.innerText=Quiz_Question[id].q;
  

    // Getting options
    const op1=document.getElementById("option1");
    const op2=document.getElementById("option2");
    const op3=document.getElementById("option3");
    const op4=document.getElementById("option4");

    // options value

    op1.innerText=Quiz_Question[id].answer[0].text;
    op2.innerText=Quiz_Question[id].answer[1].text;
    op3.innerText=Quiz_Question[id].answer[2].text;
    op4.innerText=Quiz_Question[id].answer[3].text;

    // TRUE FALSE FOR OPTION

    op1.value=Quiz_Question[id].answer[0].isCorrect;
    op2.value=Quiz_Question[id].answer[1].isCorrect;
    op3.value=Quiz_Question[id].answer[2].isCorrect;
    op4.value=Quiz_Question[id].answer[3].isCorrect;


    var select="";

    op1.addEventListener("click", ()=>{
       op1.style.backgroundColor="antiquewhite";
       op2.style.backgroundColor="lightblue";
       op3.style.backgroundColor="lightblue" ;  
       op4.style.backgroundColor="lightblue";
       select=op1.value;
});

op2.addEventListener("click", ()=>{
    op1.style.backgroundColor="lightblue";
    op2.style.backgroundColor="antiquewhite";
    op3.style.backgroundColor="lightblue" ;  
    op4.style.backgroundColor="lightblue";
    select=op2.value;
});

op3.addEventListener("click", ()=>{
    op1.style.backgroundColor="lightblue";
    op2.style.backgroundColor="lightblue";
    op3.style.backgroundColor="antiquewhite" ;  
    op4.style.backgroundColor="lightblue";
    select=op3.value;
});

op4.addEventListener("click", ()=>{
    op1.style.backgroundColor="lightblue";
    op2.style.backgroundColor="lightblue";
    op3.style.backgroundColor="lightblue" ;  
    op4.style.backgroundColor="antiquewhite";
    select=op4.value;
});

const evaluate=document.getElementsByClassName("evaluate");
evaluate[0].addEventListener("click", ()=>{
     if(select =='true'){
        result[0].innerHTML="True";
        result[0].style.color="Green";
     }
     else{
        result[0].innerHTML="False";
        result[0].style.color="Red";
     }
})

}
if (start){
    iteration("0");
}

// Next button target

const next=document.getElementsByClassName("next")[0];
var id=0
next.addEventListener("click",()=>{
    start=false;
    if(id < 10){
        id++;
        iteration(id)
        console.log(id);
    }
})
