export interface IRegisterFormDta{
    firstname: string,
    lastname?: string,
    email: string,
    password: string,
    confirmPassword?: string
    gender?: string,
    bio:string
}


export const  INITIAL_DATA: IRegisterFormDta = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    bio: ""
}
