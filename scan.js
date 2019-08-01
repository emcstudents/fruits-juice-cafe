function scan(form){
    if(form.uname.value=="Ksrce"){
        if(form.psw.value=="Ksrce"){
            window.location.assign("index.html")
        }
        else{
            alert("Invalid password");
        }
    }
        else{
            alert("Invalid user");
        }
}

function up(){
    alert("update soon!!!");
}