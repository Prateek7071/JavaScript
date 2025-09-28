//old way to do getter setter still modern though 

function User(email,password){
    this._email = email
    this._password = password

    Object.defineProperty(this,'email',{ //context,what value need to be overdide, {} ... for the override value no need to write _email as its already defined above
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email= value
        }
    })

    Object.defineProperty(this,'password',{
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password= value
        }
    })
}

const dev1 = new User('dev@mail.com','fdkhvbdshkf')
console.log(dev1.email);
console.log(dev1.password);
