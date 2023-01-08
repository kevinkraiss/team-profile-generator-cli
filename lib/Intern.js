import {Employee} from './Employee.js'

class Intern extends Employee {
    constructor(name, id, email, school) {
        //Calls and fills in Employee data
        super(name, id, email)

        this.school = school
    }

    getSchool(){
        return this.school
    }

    getRole() {
        return 'Intern'
    }
}

export {Intern}