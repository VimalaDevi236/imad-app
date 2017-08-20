//counter code
var button=document.getElementById('counter');


button.onclick = function(){
    //create a reuest
    var request = XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if (request.readystate===XMLHttpRequest.DONE){
            //TAKE SOME ACTION
            if (request.status===200){
            var counter=request.responseText;
              var span=document.getElementById('count');
              span.innerHTML=counter.toString();    
                
            }
            }
        
        //NOT DONE YET
        
    };
    //make the request
    request.open('GET','http://svimaladevisris-imad.hasura-app.io/counter',true);
    request.send(null);
};