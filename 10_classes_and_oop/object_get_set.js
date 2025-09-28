// generally class based get set is used the other two like this and property_get... are not as common

const User ={
    _email : "prat@mail.com",
    _password : "udkslhdhlds",

    get email(){ //get generally treates email() as a property not a method so no need to call it with ()
        return this._email.toUpperCase()
    },
    
    set email(value){
        this._email= value
    }

}

// constructor funcitons are like new when we did ex. const obj = new ...
// factory funcitons are like :

const mad = Object.create(User)
console.log(mad.email);  // generally we access this 
console.log(mad._email);    //and this is generally not accessed directly
