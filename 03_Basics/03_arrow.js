const user = {
    username: "John",
    age: 30,
    salary: 50000,

    welcomeMessage: function() {
        console.log(`Welcome ${this.username,this.age,this.salary}`);
        
    }
    //console.log(welcomeMessage(username, age));
}

    console.log(user.welcomeMessage());
