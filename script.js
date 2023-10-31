
function finder_kind(rad_tp){
  let radios=document.getElementById("radios");
  if ( rad_tp != "" && rad_tp != " " ){
  //if (radios.checked){
    find_all(rad_tp)
//}else{
    //find(rad_tp)
//}
}} 

        /*function find(data){
          let divs = document.getElementsByClassName("tempo");
            for(let i=0;i<divs.length;i++){
                let n=divs[i].innerText;
                if (n.includes(data)==true){
                    x=divs[i].parentElement.parentElement.parentElement;
                    x=x.innerText;
                    alert(x);
                }
            }
            
            let divs_h = document.getElementsByClassName("hora");

            for(let i=0;i<divs_h.length;i++){

                let n=divs_h[i].innerText;
                if (n.includes(data)==true){
                    x=divs_h[i].parentElement;
                    x=x.innerText;
                    alert(x);
                }
            }
        }
        */
       
       function find_all(data){
              let divs = document.getElementsByClassName("rd2");
            for(let i=0;i<divs.length;i++){
                let n=divs[i].innerText.toLowerCase() ;
                if (n.includes(data.toLowerCase() ) ==true){
                    x=divs[i]
                    x=x.innerText;
                    var continue_finder=confirm(x);
                    if (continue_finder == false ){
                      break 
                    }
                } 
            }
       } 
        
        let finder_activated=false;
        function show_finder(){
        
        

             if (finder_activated==false){
             finder_activated=true;
        let html =
  `
  		<div id="caixa"> 
	<h1 style="text-align: center;">Pesquisa</h1>

	  <input type="text" id="inp">

	  <button class="button-1" onclick="finder_kind(document.getElementById('inp').value)">
	    Buscar
	    </button>
	 		  <div class='type_center'>palavras e datas</div>
	    <h4 style="text-align:center;">Parte 2: DE 14/06/2023 A 31/10/2023 [...] <br><br>Parte 1: DE 13/06/2023 A 23/07/2022</h4>
	  </div>
 
  `;

let finder = document.createElement('div');
finder.innerHTML = html;
document.getElementById('box_finder').appendChild(finder);  
}else{
document.getElementById('box_finder').innerHTML='';
finder_activated=false;
         } 
        
        }
        
        /*<div class="type_center"><br>Busca por texto:<input type="radio" id="radios" name="radios"><br>*O padrão é data</div>*/
	    	    
let font_number=0; 

function alter_font(){
  let divs=document.getElementsByClassName()('rd2');
  for (var i = 0; i < divs.length; i++) {
  // Muda a fonte de cada elemento para "Arial"
  switch (font_number){
  case 0:
    divs[i].style.fontFamily = "Arial";
    break
  case 1:
    divs[i].style.fontFamily = '"Courier New", Courier, mono';
    break 
  case 2:
    divs[i].style.fontFamily = "'Script MT', cursive";
    break
  case 4:
    divs[i].style.fontFamily = "Times new roman" ;
    break
}}
  switch (font_number){
    case 0:
      font_number = 1;
      break
      case 1:
        font_number = 2;
        break
       case 2:
         font_number = 4;
         break
       case 4:
         font_number =0;
         break
  }
} 

let font_sz=5;
function font_size(n){
  let divs=document.getElementsByClassName('rd2');
  if (font_sz > 1 && font_sz < 10){
  font_sz=font_sz+n
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.fontSize=font_sz+"vw";
}}else{
if (font_sz <= 1) {
  font_sz+=1; 
}else if (font_sz >= 10){
  font_sz-=1;
}}} 