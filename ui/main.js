//counter code
var button=document.getElementById('counter');



button.onclick = function(){
    //create a request
    var request = new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if (request.readystate===XMLHttpRequest.DONE){
            //TAKE SOME ACTION
            if (request.status===200){
                 //captures the names and render it as a list
             var counter=request.responseText;
             var span=document.getElementById('count');
             span.innerHTNL=counter.toString();
            
            }//inner if
            }//outer if
        
        //NOT DONE YET
        
    };//request function
    
  
    
    request.open('GET','http://svimaladevisris.imad.hasura-app.io/counter',true);//required
    request.send(null);//required
};//button click function

//submit name
var nameInput= document.getElementById("name");
var name = nameInput.value;
var submit=document.getElementById("submit_btn");
submit.onclick = function(){
    //create a request
    var request = new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if (request.readystate===XMLHttpRequest.DONE){
            //TAKE SOME ACTION
            if (request.status===200){
                 //captures the names and render it as a list
             var names=request.responseText;
             names=JSON.parse(names);
              var list="";
              for(var i=0;i<names.length;i++){
               list += "<li>"+names[i]+"</li>";   
              }
              var ul=document.getElementById('namelist');
              ul.innerHTML=list;
    
            }//inner if
            }//outer if
        
        //NOT DONE YET
        
    };//request function
    
  
    request.open('GET','http://svimaladevisris.imad.hasura-app.io/submit-name?name='+name,true);
    
    request.send(null);
};//submit click function



    
