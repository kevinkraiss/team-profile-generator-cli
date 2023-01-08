//Arrange
import {Manager} from '../lib/Manager.js'
const name = 'John Johnson'
const id = '001'
const email = 'john@email.com'
const officeNumber = '69A'

//Act
const manager = new Manager(name, id, email, officeNumber)

//Assert
describe('Creates a Manager object', () => {

    it('Returns a manager name', () => {
        expect(manager.name).toEqual(name)
    })

    it('Returns a manager ID', () => {
        expect(manager.id).toEqual(id)
    })

    it('Returns a manager email', () => {
        expect(manager.email).toEqual(email)
    })

    it('Returns manager office number', () => {
        expect(manager.officeNumber).toEqual(officeNumber)
    })

    it('Returns correct role', () => {
        expect(manager.getRole()).toEqual("Manager")
    })
})