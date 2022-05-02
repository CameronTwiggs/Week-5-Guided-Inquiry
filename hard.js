
function secure() {
    const pii = {
        name : "Cam",
        ssn  : 123456789,
        job : "Dev"
    }
    return {
        getName() {
            return pii.name;
        },
        getJob () {
            return pii.job;
        }
    }
}


const person = secure();
console.log(person.getName());