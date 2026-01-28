class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}kritika`
    }

    set password(value){
        this._password = value
    }
}

const kritika = new User("k@kritika.ai", "abc")
console.log(kritika.email);