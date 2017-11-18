function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Ahmed", lastName: "Elmalah" };
document.body.innerHTML = greeter(user);
