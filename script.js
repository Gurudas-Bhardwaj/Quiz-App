let all_question=[
    {
        question:"1.Which was the 1st non Test playing country to beat India in an international match?",
        answer:[
            {option:"Canada",result:false},
            {option:"Sri Lanka",result:true},
            {option:"Zimbabwe",result:false},
            {option:"East Africa",result:false},
        ]
    },
    {
        question:"2. What popular tourist destination was once called “The Island of Swine”?",
        answer:[
            {option:"Cuba",result:true},
            {option:"Indonesia",result:false},
            {option:"United Kingdom",result:false},
            {option:"Maldives",result:false},
        ]
    },
    {
        question:"3.What was the first country to give women the right to vote?",
        answer:[
            {option:"France",result:false},
            {option:"United Nation",result:false},
            {option:"Japan",result:false},
            {option:"New Zealand",result:true},
        ]
    },
    {
        question:"4. Mount Kilimanjaro is located in which country?",
        answer:[
            {option:"Tanzania",result:true},
            {option:"Switzerland",result:false},
            {option:"Bhutan",result:false},
            {option:"Japan",result:false},
        ]
    },
    {
        question:"5. Which state has the longest coastline in the United States of America?",
        answer:[
            {option:"California",result:false},
            {option:"Washington DC",result:false},
            {option:"Alaska",result:true},
            {option:"New York City",result:false},
        ]
    },
    {
        question:"6. Which planet in our solar system is named after the Roman goddess of love and beauty?",
        answer:[
            {option:"Venus",result:true},
            {option:"Pluto",result:false},
            {option:"Mars",result:false},
            {option:"Jupter",result:false},
        ]
    },
    {
        question:"7. What is the world’s deepest ocean?",
        answer:[
            {option:"Atlantic oceon",result:false},
            {option:"Indian oceon",result:false},
            {option:"Artic oceon",result:false},
            {option:"Pacific oceon",result:true},
        ]
    },
    {
        question:"8. What is the world’s largest city by area?",
        answer:[
            {option:"New York City",result:true},
            {option:"Tokyo",result:false},
            {option:"Rome",result:false},
            {option:"Chicago",result:false},
        ]
    },
    {
        question:"9. In what year were women first allowed to vote in the United States?",
        answer:[
            {option:"1917",result:false},
            {option:"1918",result:false},
            {option:"1919",result:false},
            {option:"1920",result:true},
        ]
    },
    {
        question:"10.How many time zones are there in the world?",
        answer:[
            {option:"21",result:false},
            {option:"24",result:true},
            {option:"23",result:false},
            {option:"22",result:false},
        ]
    },
];


const ques=document.getElementById("question");
const all_option=document.querySelectorAll(".option");
const next=document.getElementById("next");
const option1=document.getElementById("option-1");
const option2=document.getElementById("option-2");
const option3=document.getElementById("option-3");
const option4=document.getElementById("option-4");
const show_score=document.getElementById("score");


let index=0;
let score=0;
let click=0;

ques.innerText=all_question[index].question;
option1.innerText=all_question[index].answer[0].option;
option2.innerText=all_question[index].answer[1].option;
option3.innerText=all_question[index].answer[2].option;
option4.innerText=all_question[index].answer[3].option;


Array.from(all_option).forEach((button)=>{
    button.addEventListener('click',(f)=>{
        const correct1=all_question[index].answer[0].result;
        const correct2=all_question[index].answer[1].result;
        const correct3=all_question[index].answer[2].result;
        const correct4=all_question[index].answer[3].result;

        if (correct2==true){
            f.target.style.backgroundColor="red"
            option2.style.backgroundColor="green";
            ++score;
            next.style.display="inline";
        }
        else if (correct1==true){
            f.target.style.backgroundColor='red'
            option1.style.backgroundColor="green";
            ++score;
            next.style.display="inline";
        }
        else if (correct3==true){
            f.target.style.backgroundColor='red'
            option3.style.backgroundColor="green";
            ++score;
            next.style.display="inline";
        }
        else if (correct4==true){
            f.target.style.backgroundColor='red'
            option4.style.backgroundColor="green";
            ++score;
            next.style.display="inline";
        }
        const check1=option1.style.backgroundColor;
        const check2=option2.style.backgroundColor;
        const check3=option3.style.backgroundColor;
        const check4=option4.style.backgroundColor;
        if (check1=="red"){
            --score;
        }
        else if (check2=="red"){
            --score;
        }
        else if (check3=="red"){
            --score;
        }
        else if (check4=="red"){
            --score;
        }


        option1.disabled=true;
        option2.disabled=true;
        option3.disabled=true;
        option4.disabled=true;
        option1.style.cursor="not-allowed"
        option2.style.cursor="not-allowed"
        option3.style.cursor="not-allowed"
        option4.style.cursor="not-allowed"
    })
})


next.addEventListener("click",()=>{
    ++index;
    ++click;

    if (click<=9){
        ques.innerText=all_question[index].question;
        option1.innerText=all_question[index].answer[0].option;
        option2.innerText=all_question[index].answer[1].option;
        option3.innerText=all_question[index].answer[2].option;
        option4.innerText=all_question[index].answer[3].option;
    }
     if(click==9){
        next.innerText="Submit";
    }  
    else if(click==10){
        ques.style.display="none";
        option1.style.display="none";
        option2.style.display="none";
        option3.style.display="none";
        option4.style.display="none";
        next.style.display="none";
        show_score.style.display="inline";
        show_score.innerText=`You Scored ${score} out of 10`
        console.log(score);
        click=0
    }
    

    option1.style.backgroundColor="transparent";
    option2.style.backgroundColor="transparent";
    option3.style.backgroundColor="transparent";
    option4.style.backgroundColor="transparent";
    option1.style.cursor="pointer";
    option2.style.cursor="pointer";
    option3.style.cursor="pointer";
    option4.style.cursor="pointer";
    option1.disabled=false;
    option2.disabled=false;
    option3.disabled=false;
    option4.disabled=false;
    next.style.display="none"
});