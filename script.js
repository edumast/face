var ja=1;
 function mud(){
 if (ja == 1){
const img= document.querySelectorAll('.fnt');
     
     img.forEach(element => {
     element.setAttribute('class', 'men');
     });
     ja=2;
}else if(ja==2){
const img= document.querySelectorAll('.men');
      img.forEach(element => {
     element.setAttribute('class', 'mai'); });
     ja=3;
}else if(ja==3){
    const img= document.querySelectorAll('.mai');
      img.forEach(element => {
     element.setAttribute('class', 'fnt'); });
     ja=1;
}

   
}
    