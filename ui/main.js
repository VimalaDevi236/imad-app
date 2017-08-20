//counter code
var button=document.getElementById('counter');

var nameInput= document.getElementById("name");
var name = nameInput.value;
var submit=document.getElementById("submit_btn");
button.onclick = function(){
    //create a reuest
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
    
            }
            }
        
        //NOT DONE YET
        
    };
    //make the request
    request.open('GET','http://svimaladevisris.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
};


    
