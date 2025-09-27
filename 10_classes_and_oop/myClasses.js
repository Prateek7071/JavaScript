class User{
    constructor(username, email, password){
        this.username = username,
        this.email = email,
        this.password = password
    }

    encryptedPassword(){
        return `${this.password}abc`
    }
    
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}


const user1 = new User('samuel','sam@mail.com','ahskdghdf')

console.log(user1.encryptedPassword());
console.log(user1.changeUsername());


// behind the scenes

function UserNew(username,email,password){
    this.username = username,
    this.email = email,
    this.password = password
}

UserNew.prototype.encryptedPassword= function(){
        return `${this.password}abc`
}

UserNew.prototype.changeUsername= function(){
        return `${this.username.toUpperCase()}`
}

const user2 = new UserNew("Richards","Richards@whatever.com","hlsgfsdsfhdhf")

console.log(user2.encryptedPassword());
console.log(user2.changeUsername());



