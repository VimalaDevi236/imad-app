//counter code
var button=document.getElementById('counter');


button.onclick = function(){
    //create a reuest
    var request = new XMLHttpRequest();
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
    request.open('GET','http://svimaladevisris.imad.hasura-app.io/counter',true);
    request.send(null);
};

var nameInput= document.getElementById("name");
var name = nameInput.value;
var submit=document.getElementById("submit_btn");
submit.onclick=function(){
    //make a reuest to the server and send the name
    //captures the names and render it as a list
    
  var names=['name1','name2','name3','name4'];
  var list="";
  for(i=0;i<names.length;i++){
   list+="<li>"+names[i]+"<li>";   
  }
  var ul=document.getElementById('namelist');
  ul.innerHTML=list;
    
    
};