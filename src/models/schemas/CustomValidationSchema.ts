
class FieldValidation{
    private messages: any
    private fieldValue:any

    private isValidEmail:RegExp= /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    // private isValidEmail:RegExp=  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    constructor(private field: HTMLInputElement | any) {
        const fieldName: HTMLInputElement | any = document.getElementById(this.field)
        const fieldValue = fieldName?.value
        this.fieldValue = fieldValue
    }

    isNotEmpty() {
         this.messages=""
         const data = this.fieldValue
         if (data == undefined || data ==null || data.length < 1) {
             const errorMessage = `${this.field} must not be empty`
             this.messages = errorMessage
         } else {
             this.messages = ""
         }
        
         return this
    }

    isIn(array: any[]) {
        const data = this.fieldValue
      
        if (data && !array.includes(data)) {
            const errorMessage = `${this.field} provided is invalid`
            this.messages = errorMessage
        } else {
            this.messages = ""
        }

        return this
    }


    // static isOptional(field: any, array: any[]) {
    //     if(field.length )
    //     if (!array.includes(field)) {
    //         const errorMessage = `${this.field} provided is invalid`
    //         this.messages=errorMessage
    //     }else this.messages=""
    //     return this
    // }
    
     isMin( length: number) {
        const data = this.fieldValue
         if (data && data?.length < length) {
             const errorMessage = `${this.field} must have a minimum charater of ${length}`
             this.messages = errorMessage
        
         } else {
             this.messages = ""
         }

        return this
    }

     isEmail() {
         const data = this.fieldValue
         this.messages = ""
        //  const isEmail = this.validateEmail(data)
        if (data == undefined || data ==null || data.length < 1) {
            const errorMessage = `${this.field} must not be empty`
            this.messages = errorMessage
        }

        else if (data && !data.match(this.isValidEmail)) {
             const errorMessage = `${this.field} must be a valid email address`
             this.messages = errorMessage
        } else {
            this.messages=""
         }

        return this
    }


    isNumber() {
         if (Number.isNaN(Number(this.fieldValue))) {
            const errorMessage = `${this.field} must be a number`
            this.messages=errorMessage
        } else {
            this.messages=""
        }
        return this
    }

   validate()
    {
       if (this.messages.length > 0) {
           return this.messages
       }
       else {
           
           return null
   }
    }
    
}

export default  FieldValidation