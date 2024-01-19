let btn = document.querySelectorAll(".character");
var user=["rock","paper","scissor"];
let comp=["rock","paper","scissor"];
console.log(user);
let score=document.querySelectorAll(".score");
let user_score=0;
let comp_score=0;
let ele = document.querySelector('.change');
// function wait(ms){
  
//   var start = new Date().getTime();
//   var end = start;
//   while(end < start + ms) {
//     end = new Date().getTime();
//  }
// }
for (let i = 0; i < 3; i++) {
  btn[i].addEventListener("click", () => {
    let r=random()
    let img=["r2.jpeg","p2.jpeg","s2.jpeg"]
    // comp_out();
    // ele.setAttribute("class","character change");
    ele.setAttribute("src",img[r]);
    // ele.setAttribute("class","character change");


    console.log(r,btn[i] == btn[0])
    if (btn[i] == btn[0]) {

      if(comp[r]=="scissor"){
        console.log("win");
        user_score+=1;
        score[2].innerText=`${user_score}`;
      }
        else if(comp[r]=="stone"){
          console.log("tie");
        }
      
      else{
        comp_score+=1;
console.log("lose")
        score[3].innerText=`${comp_score}`;
      }
    }
    else if (btn[i] == btn[1]) {
        
      if(comp[r]=="rock"){
        console.log("win");
        user_score+=1;
        score[2].innerText=`${user_score}`;

      }
      else if(comp[r]=="paper"){
        console.log("tie")

      }
      else{
        comp_score+=1;
        console.log("lose")

        score[3].innerText=`${comp_score}`;
      }
       }
    else if (btn[i] == btn[2]) {
       
      if(comp[r]=="paper"){
        console.log("win");
        user_score+=1;
        score[2].innerText=`${user_score}`;

      }
      else if(comp[r]=="scissor"){
        console.log("tie");

      }
      else{
        comp_score+=1;
console.log("lose")
        score[3].innerText=`${comp_score}`;
      }
    }
        ele.setAttribute("class","change");

    setTimeout(()=>{
      console.log("start");

    ele.setAttribute("class","character change");

    },2000)
    
  });
}
let random=()=>{
return  Math.floor(Math.random()*3)
}

// let comp_out=()=>{
  
// console.log("start")
//   wait(7000);
//   console.log("end")
// }


