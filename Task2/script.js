let login = prompt("Who's there?");
if(login == null){
    console.log("Canceled.");
}
else if(login === 'Admin'){
    let password = prompt("Password?");
    if(password == null){
        console.log("Canceled.");
    }
    else if(password === "TheMaster"){
        console.log("Welcome!")
    }else{
        console.log("Wrong password");
    }
}else{
    console.log("I don`t know you");
}
