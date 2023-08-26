
function t(rad_tp){
  let radios=document.getElementById("radios" );
  if (radios.checked){
    find_all(rad_tp)
}else{
    find(rad_tp)
}
  
} 
        function find(data){
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
       
       function find_all(data){

          let divs = document.getElementsByClassName("rd2");

            for(let i=0;i<divs.length;i++){
                let n=divs[i].innerText;
                if (n.includes(data)==true){
                    x=divs[i]
                    x=x.innerText;
                    alert(x);
                }
            }
            
            let low=document.getElementById("lower" );

            
            if (low.checked==true){
              let divs = document.getElementsByClassName("rd2");

            for(let i=0;i<divs.length;i++){
                let n=divs[i].innerText.toLowerCase() ;
                if (n.includes(data.toLowerCase() ) ==true){
                    x=divs[i]
                    x=x.innerText;
                    alert(x);
                }
            }
            }
        }
       
