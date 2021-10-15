const index = require("./index")
// @ponicode
describe("index", () => {
    test("0", () => {
        let callFunction = () => {
            index({ types: { assignmentExpression: () => "logistical", memberExpression: () => "Credit Card Account", identifier: () => "Edmond", isAssignmentExpression: () => false, isIdentifier: () => false } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index({ types: { assignmentExpression: () => "logistical", memberExpression: () => "Checking Account", identifier: () => "Anas", isAssignmentExpression: () => false, isIdentifier: () => false } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index({ types: { assignmentExpression: () => "4th generation", memberExpression: () => "Checking Account", identifier: () => "Anas", isAssignmentExpression: () => false, isIdentifier: () => true } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index({ types: { assignmentExpression: () => "logistical", memberExpression: () => "Home Loan Account", identifier: () => "Michael", isAssignmentExpression: () => true, isIdentifier: () => true } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index({ types: { assignmentExpression: () => "methodical", memberExpression: () => "Checking Account", identifier: () => "Pierre Edouard", isAssignmentExpression: () => true, isIdentifier: () => false } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index({ types: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})
