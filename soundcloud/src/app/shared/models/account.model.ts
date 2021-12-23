export class Account {

    public username: string ="";
    public email: string ="";
    public gender: boolean = false;
    public phoneNumber: string ="";
    public address: string="";

    constructor(username: string, email: string, gender: boolean, phoneNumber: string, address: string) {
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.email = email;
        this.username = username;
    }

}