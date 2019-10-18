// CODE here for your Lambda Classes
diceRoll = function(){
    return Math.ceil(Math.random() *2);
}
class Person {
    constructor(personAttr){
        this.name = personAttr.name;
        this.age = personAttr.age;
        this.location = personAttr.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am f rom ${this.location}`
    }
}
class Instructor extends Person{
    constructor(instructorAttr){
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }
    addOrSubtract(student, grade){
        if((diceRoll() <= 2) && (grade.grade <=40)){
            student.grade += (Math.ceil(Math.random()) * 10);
        return `I pity you, your  grade is now: ${student.grade}`;
        } else if(diceRoll() == 2){
            student.grade += (Math.ceil(Math.random()) * 10);
            return `Extra credit for being a good boop, your grade is now: ${student.grade}`
        }else{
            student.grade -= (Math.ceil(Math.random()) * 10);
            return `You lost points for cheating, your grade is now: ${student.grade}`
        }
    }
    demo(subject){
       return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`
    }
}
class Student extends Person{
    constructor(studentAttr){
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
        this.grade = Math.ceil(Math.random() * 100);
    }
    isGraduate(){
        if(this.grade > 70){
            return `${this.name} has graduated! good boi`
        }else{
            return `${this.name} sorry you have not been a good boi, no degree for u`
        }
    }
    listSubjects(){
        return this.favSubjects.map(list => console.log(list));        
    }
    PRAssignment(subject){
        return `${student.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject){
        return `${student.name} has begun sprint challenge on ${subject}`
    }
}
class ProjectManager extends Instructor{
    constructor(pmAttr){
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @${channel} standy times!`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const jim = new Student({
    name: 'Jim',
    location: 'Capone',
    age: 37,
    favSubjects: 'JavaScript',
    previousBackground: 'Retail',
    className: `Illuminati`
  })
  const Teddy = new ProjectManager({
    name: 'Teddy',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName: 'CS1',
    favInstructor: 'Fred',
  });
  console.log(Teddy.debugsCode(jim, 'Math'));
  console.log(jim.grade);
  console.log(Teddy.addOrSubtract(jim, jim));
  console.log(jim.isGraduate());