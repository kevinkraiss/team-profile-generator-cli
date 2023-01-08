//Arrange 
import {Intern} from '../lib/Intern.js'
const name = 'Ian Ericsson'
const id = '003'
const email = 'ian@email.com'
const school = 'University of School'

//Act
const intern = new Intern(name, id, email, school)

//Assert
describe('Creates an Intern object', () => {

    it('Returns an intern name', () => {
        expect(intern.name).toEqual(name)
    })

    it('Returns an intern ID', () => {
        expect(intern.id).toEqual(id)
    })

    it('Returns an intern email', () => {
        expect(intern.email).toEqual(email)
    })

    it('Returns correct school', () => {
        expect(intern.school).toEqual(school)
    })

    it('Returns correct role', () => {
        expect(intern.getRole()).toEqual("Intern")
    })
})