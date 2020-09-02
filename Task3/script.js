let login = prompt("Who's there?");
switch(login){
    case null:
        console.log("Canceled.");
        break;
    case 'Admin':
        let password = prompt("Password?");
        switch(password){
            case null:
                console.log("Canceled.");
                break;
            case "TheMaster":
                console.log("Welcome!");
                break;
            default:
                console.log("Wrong password");
                break;
        }
        break;
    default:
        console.log("I don`t know you");
        break;
}
