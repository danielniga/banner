window.addEventListener('load',function (e){
    e.preventDefault();
  var  tempo ;
   var tempo2;
   var tempo3;
   var tempo4;
   var tempo5;
    var varrega;
    var parar;
    var tracaFoto = 1 ;
    var tracaFoto2 = 2 ;
    var tracaFoto3 = 3 ;
    var tracaFoto4 = 4 ;
             tempo = -550;
             tempo2 = -150;
             tempo3 = 550;
    function repetir(){
        document.getElementById('div1').style.opacity = "1";
        document.getElementById('div2').style.opacity = "1";
        document.getElementById('div3').style.opacity ="1";  

        tempo3 -= 4;
           document.getElementById('div3').style.marginLeft = tempo3 + "px";
        if(tempo3 <= 0){
            parar = clearInterval(carrega);
            carrega = setInterval(repetir2, 10);
        }
            
    }
        function repetir2(){
        tempo2 += 4;
        document.getElementById('div2').style.marginTop = tempo2 + "px";
        if(tempo2 >= 100){
            parar = clearInterval(carrega);
            carrega = setInterval(repetir3, 10);
        }
            
    }
    
   function repetir3(){
        tempo += 4;
        document.getElementById('div1').style.marginLeft = tempo + "px";
        if(tempo >= 0){
            tempo4 = 0;
            parar = clearInterval(carrega);
            
        setTimeout(function(){
            carrega = setInterval(repetir4, 1); 
        },50);
            
        }
            
    }
    
 function repetir4(){
        tempo4 += 0.002;
        if(tempo4 >= 1){
            document.getElementById('geral').style.backgroundImage = "url('img/img" + tracaFoto + ".jpg')"
           if(tracaFoto == 14){
               tracaFoto = 1;
           }
           tracaFoto++;
            
            tempo5 = 1;
            parar = clearInterval(carrega);
            setTimeout(function(){
               carrega = setInterval(repetir5, 1); 
            },1);
            

        }
            
    }
    
    
     function repetir5(){
        tempo5 -= 0.002;
         
       document.getElementById('div1').style.opacity = String(tempo5);
        document.getElementById('div2').style.opacity = String(tempo5);
        document.getElementById('div3').style.opacity = String(tempo5);

        if(tempo5 <= 0 ){
             tempo = -550;
             tempo2 = -150;
             tempo3 = 550;
   
        document.getElementById('div1').style.marginLeft = tempo3 + "px";
        document.getElementById('div2').style.marginTop = tempo2 + "px";
        document.getElementById('div3').style.marginLeft = tempo + "px";
            
        //================foto 2==========================================================================  
         document.getElementById('div1').style.backgroundImage = "url('img/img" + tracaFoto2 + ".jpg')"
           if(tracaFoto2 == 14){
               tracaFoto2 = 1;
           }
           tracaFoto2++;
  //===================foto 3==========================================================                
           document.getElementById('div2').style.backgroundImage = "url('img/img" + tracaFoto3 + ".jpg')"
           if(tracaFoto3 == 14){
               tracaFoto3 = 1;
           }
           tracaFoto3++;
  //==================foto4===============================================================      
          document.getElementById('div3').style.backgroundImage = "url('img/img" + tracaFoto4 + ".jpg')"
           if(tracaFoto4 == 14){
               tracaFoto4 = 1;
           }
           tracaFoto4++;          
            
            
        parar = clearInterval(carrega);
       setTimeout(function(){
            inicia();  
        },5000);
        }
            
    }
    
    function inicia(){
       carrega = setInterval(repetir, 1);
    }
    inicia();
 

});