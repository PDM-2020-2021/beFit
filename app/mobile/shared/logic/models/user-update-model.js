export default class UserUpdateModel{
    constructor(firstname, lastname, email, phone,password, newPassword)
    {
        this.lastname=lastname;
        this.firstname=firstname;
        this.email=email;
        this.phone=phone;
        this.password=password;
        this.newPassword= newPassword;
    }
}