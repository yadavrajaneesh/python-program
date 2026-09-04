// // if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
// //                 age--;
// //             }
// function result(){
// let hindi = parseInt(document.getElementById("h1").value);
// let english = parseInt(document.getElementById("e1").value);
// let maths = parseInt(document.getElementById("m1").value);
// let physics = parseInt(document.getElementById("p1").value);
// let chemistry= parseInt(document.getElementById("ch1").value);
// let total = hindi+english+maths+physics+chemistry;
// let percentage = total*100/500;
// document.getElementById("total").innerHTML="total:"+total;
// document.getElementById("percentage").innerHTML="percentage:"+percentage+"%";
// if(percentage>=90){
//     document.getElementById("grade").innerHTML="congratulation you are pass from grade A ";
// }else if(percentage>=70){
//     document.getElementById("grade").innerHTML="congratulation you are pass from grade B ";
// }else if(percentage>=50){
//     document.getElementById("grade").innerHTML="congratulation you are pass from grade C ";
// }else if(percentage>=33){
//     document.getElementById("grade").innerHTML="congratulation you are pass from grade D ";
// }else{
//     document.getElementById("grade").innerHTML="sorry you are fail";}}
  
//     function clr(){
// document.getElementById("h1").value=" ";
// document.getElementById("e1").value=" ";
// document.getElementById("m1").value=" ";
// document.getElementById("p1").value=" ";
// document.getElementById("ch1").value=" ";
// document.getElementById("total").innerHTML=" ";
// document.getElementById("percentage").innerHTML=" ";
// document.getElementById("grade").innerHTML=" ";
// }

function pick(val){
    document.getElementById("a").value+=val;
}
function add(){
    let x=document.getElementById("a").value;
    let y = eval(x);
    document.getElementById("a").value=y;
}
function clr(){
    document.getElementById("a").value=" ";
}

