var ja=1;
 function mud(){
 if (ja == 1){
const img= document.querySelectorAll('.rd2');
     
     img.forEach(element => {
     element.setAttribute('class', 'men fon');
     });
     ja=2;
}else if(ja==2){
const img= document.querySelectorAll('.men');
      img.forEach(element => {
     element.setAttribute('class', 'mai fon'); });
     ja=3;
}else if(ja==3){
    const img= document.querySelectorAll('.mai');
      img.forEach(element => {
     element.setAttribute('class', 'rd2 fon'); });
     ja=1;
}
}
var fon=1;
function fom(){
 if (fon == 1){
const img= document.querySelectorAll('.fon');
     
     img.forEach(element => {
     element.setAttribute('class', 'fon2 rd2');
     });
     fon=2;
}else if(fon == 2){
const img= document.querySelectorAll('.fon2');
      img.forEach(element => {
     element.setAttribute('class', 'fon rd2'); });
     fon=1; 
}}
    
