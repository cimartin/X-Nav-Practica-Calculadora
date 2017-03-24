window.onload = function(){ 
pantalla=document.getElementById("textoPantalla"); 
document.onkeydown = teclado;
}
guardar_num="0"; 
iniciar_num=1; 
coma=0; 
num_espera=0; 
op="no"; 


function numero(num) { 
         if (guardar_num=="0" || iniciar_num==1  ) {    
            pantalla.innerHTML=num; 
            guardar_num=num; 
            if (num==".") { 
               pantalla.innerHTML="0."; 
               guardar_num=num; 
               coma=1; 
               }
           }
           else { 
               if (num=="." && coma==0) { 
                   pantalla.innerHTML+=num;
                   guardar_num+=num;
                   coma=1;  
               }
                            
               else {
                   pantalla.innerHTML+=num;
                   guardar_num+=num
               }
            }
            iniciar_num=0 
         }

function operar(s) {
         igualar() 
         num_espera=guardar_num 
         op=s; 
         iniciar_num=1; 
         }  

function igualar() {
         if (op=="no") { 
            pantalla.innerHTML=guardar_num;    
            }
         else { 
            cadena=num_espera+op+guardar_num; // escribimos la operación en una cadena
            sol=eval(cadena) 
            pantalla.innerHTML=sol 
            guardar_num=sol; 
            op="no"; 
            iniciar_num=1; 
            }
        }


function borradoParcial(){ 
         cifras=guardar_num.length; 
         br=guardar_num.substr(cifras-1,cifras) 
         guardar_num=guardar_num.substr(0,cifras-1) 
         if (guardar_num=="") {guardar_num="0";} 
         if (br==".") {coma=0;} 
         pantalla.innerHTML=guardar_num;   
         }


function borradoTotal() {
         pantalla.innerHTML=0; 
         guardar_num="0"; 
         coma=0; 
         num_espera=0;
         op="no" 
         }

function teclado (elEvento) { 
         evento = elEvento || window.event;
         k=evento.keyCode; //número de código de la tecla.
         if (k>47 && k<58) { 
            p=k-48; //buscar número a mostrar.
            p=String(p) //convertimos a string 
            numero(p); 
            }   
         
         if (k>95 && k<106) {
            p=k-96;
            p=String(p);
            numero(p);
            }
         if (k==188 || k==190) {numero(".")} 
         if (k==77) {operar('*')} 
         if (k==171) {operar('+')} 
         if (k==173) {operar('-')} 
         if (k==68) {operar('/')} 
         if (k==13) {igualar()} 
         if (k==32) {borradoTotal()} 
         if (k==8) {borradoParcial()} 
         }