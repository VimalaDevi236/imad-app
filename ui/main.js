

//submit username/password to login
var submit=document.getElementById('submit_btn');
submit.onclick = function(){
    //create a request
    var request = new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if (request.readyState===XMLHttpRequest.DONE){
            //TAKE SOME ACTION
            if (request.status===200){
                 //captures the names and render it as a list
                console.log('user logged in');
                alert('logged in successfully');
                }else if(request.status === 403){
                    alert('username/password is invalid');
                }else if(request.status===500){
                    alert('something went wrong ...');
                }
            
        }
        //NOT DONE YET
        
    };//request function
    
    var username= document.getElementById("username").value;
    var password= document.getElementById("password").value;
    var name = nameInput.value;
    console.log(username);
    console.log(password);
    request.open('POST','http://svimaladevisris.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username:username,password:password}));
};//submit click function



    
