class Person { 
    constructor(name,job,age) {
        this.name = name;
        this.job = job; 
        this.age = age;

        this.exercise = () => {
            console.log("Running is fun! - said no one ever");
        }


        this.fetchJob = function() {
            console.log(`${this.name} is a ${this.job}`)
        }
    }
}


class Programmer extends Person {
    constructor(name, job, age, language, busy=true) {
        super(name,job,age)
        this.language = language;
        this.busy = busy;
    }

    completeTask() {
        this.busy = false;
    }

    acceptNewTask() {
        this.busy = true;
    }

    offerNewTask() {
        console.log(this.busy ? `${this.name} is too busy to take on anoteher task.`:`${this.name} would love to take on the task.`)
    }

    learnLanguage(lang) {
        this.language.push(lang)
    }

    listLanguage() {
        console.log(`${this.name} knows: ${this.language}`)
    }

}



const language = ["Java","Python","C++","Javascript"];

const language2 = ["Java","Python","C++","Javascript"];



const cam = new Programmer("Cameron","Dev",19,language,true);
const mac = new Programmer("Mac","Data",99,language2,false);

cam.offerNewTask();
mac.offerNewTask();

cam.completeTask();
mac.completeTask();

cam.learnLanguage("Lua")
mac.learnLanguage("C#")

cam.listLanguage();
mac.listLanguage();


cam.fetchJob()