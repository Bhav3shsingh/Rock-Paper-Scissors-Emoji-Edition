window.onload=()=>{
    
    var div = document.getElementById('holder')
    var sc = document.getElementById("sc");
    var pa = document.getElementById ("pa");
    var st = document.getElementById ("st");
    
    var you = document.getElementById ("you");
    var com = document.getElementById("comp");
    
    var h = document.getElementsByTagName("h")[0];
    
    
    var ret = document.getElementById("ret");
    ret.onclick=()=>{
    
    ret.style.display="none";
    for(let i=1; i<=1000; i++){}
    
        div.style.display = "block";
        you.style.fontSize="380%";
        you.innerHTML="✊";
        you.style.transform="rotate(0deg) scaleX(-1)";
        you.style.animation="wave1 infinite 1s";
        com.style.fontSize="380%";
        com.style.transform="rotate(0deg)";
        com.innerHTML="✊";
        com.style.animation="wave2 infinite 1s";
        h.innerHTML="";
        
    };
    
    sc.onclick=()=>{
        ch="sc";
        div.style.display = "none";
        console.log(div.style.display)
        run();
    };
    
     pa.onclick=()=>{
        ch="pa";
        div.style.display = "none";
        run();
    };
    
     st.onclick=()=>{
        ch="st";
        div.style.display = "none";
        run();
    };
    
    
    function run(){
        var comp = "";
        var r = parseInt((Math.random()*(9-1))+1);
        
        var rani = parseInt((Math.random()*(50-45)+45));
        
        for(let i=1; i<=rani; i++)
         r=parseInt((Math.random()*(9-1))+1);

    
        if(r>6) comp="sc";
        else if(r>3) comp="pa";
        else comp="st";
        
        setTimeout(function(){
     //       you.style.animation="stop1 infinite 1s";
            //you.style.animationPlayState="paused";
            you.style.animation="none";
            if(ch=="sc"){
                you.innerHTML="✌️";
                you.style.fontSize="480%";
                you.style.transform="rotate(90deg) scaleX(-1)"
            }
            else if(ch=="pa"){
                you.innerHTML="🫱";
               you.style.fontSize="480%";
         you.style.transform="rotate(0deg) "
            }else if(ch=="st"){
                you.style.transform="rotate(90deg) scaleX(-1)"
            }
            
            
          //  com.style.animation="stop2 infinite 1s";
            
            //com.style.animationPlayState="paused";
com.style.animation="none";
            if(comp=="sc"){
                com.innerHTML="✌️";
               com.style.fontSize="480%";
 com.style.transform="rotate(-90deg)";
            }
            else if(comp=="pa"){
                com.innerHTML="🫲";
                com.style.fontSize="480%";
            }else if(comp=="st"){
                com.style.transform="rotate(-90deg)";
            }
            
            if(ch==comp){
            h.innerHTML="DRAWW!";
        }else if(ch=="sc"&&comp=="pa"||
                 ch=="pa"&&comp=="st"||
                 ch=="st"&&comp=="sc"){
            h.innerHTML="YOU WIN!";
        }else{
            h.innerHTML="you lost.. :(";
        }
        
            
        ret.style.display="block";
                
            
        },1000);
        
        
    }
    
    
    
};