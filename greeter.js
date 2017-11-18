var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return user.fullName;
    //return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Ahmed", "M.", "Ali");
document.body.innerHTML = greeter(user);
