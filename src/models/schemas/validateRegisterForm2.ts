import { IRegisterFormDta } from "../types/IRegisterFormDta"



const validateInputs = function (data:IRegisterFormDta,pageIndex:number):object {
    let errors: any = null;

    if (pageIndex === 0) {
        const gender: string[]=['male','female']
        if (data.gender && !gender.includes(data.gender)) {
            errors= {gender:"Invalid gender selected"}
        }
       else if (data.firstname.length < 2) {
            errors = {firstname:"Firstname must be a minimum of 2 letters"}
        }
        else if (typeof data.firstname !== "string") {
            errors = {firstname:"Firstname can not be a number"}
            
        }
            
       else if (data.lastname && data.lastname.length < 2) {
            errors = {lastname:"lastname must be a minimum of 2 letters"}
        }
        else if (typeof data.lastname !== "string") {
            errors = {lastname:"lastname can not be a number"} 
        }
    }

    else if (pageIndex === 1) {
        // const isValidEmail: RegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        const isValidEmail: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        const isValidPassword: RegExp= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&^<>])[A-Za-z\d@$!%*?#&^<>]{7,}$/

        if (!data.password.match(isValidPassword)) {
            errors = { password: "Password field must have a lower case, an upper case, a number, a special character and a minimum of 7 characters" }
        }

        else if (data.email && !data.email?.match(isValidEmail)) {
            errors = { email: "Email must be a valid email" }
        }
    }
    else  if (pageIndex === 2) {

        if (data.bio && data.bio.length < 20) {
            errors = { bio: "Bio field must not be less than 20 characters" }
        }
    }
    return errors
}

export default validateInputs