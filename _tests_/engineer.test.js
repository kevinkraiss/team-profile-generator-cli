//Arrange 
import {Engineer} from '../lib/Engineer.js'
const name = 'Jack Jackson'
const id = '002'
const email = 'jack@email.com'
const github = 'https://github.com/test'

//Act
const engineer = new Engineer(name, id, email, github)

//Assert
describe('Creates an Engineer object', () => {

    it('Returns engineer name', () => {
        expect(engineer.name).toEqual(name)
    })

    it('Returns engineer ID', () => {
        expect(engineer.id).toEqual(id)
    })

    it('Returns engineer email', () => {
        expect(engineer.email).toEqual(email)
    })

    it('Returns correct github', () => {
        expect(engineer.github).toEqual(github)
    })
    
    it('Returns correct role', () => {
        expect(engineer.getRole()).toEqual("Engineer")
    })
})