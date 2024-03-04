import JWTDecode from 'jwt-decode';

const tokenKey = 'token'
const refreshTokenKey = 'refresh_token'
const userKey = 'user'

function logout() {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem(userKey);
}

 function getCurrentUser(){
   try {
    
    const jwt:string|null|any = getJWT()
    const decodedToken:any = JWTDecode(jwt)
    const date:Date = new Date();
    const now:number = date.getTime()
    const timeStamp:number=(Math.ceil(now/1000));
    console.log(decodedToken)
    if (timeStamp > decodedToken.exp) return null;
    else {
      return decodedToken
   }
  } catch (error) {
    return null
  }
}
 
 const setJWT= (token:string):void|null=>{
  localStorage.setItem(tokenKey,token);

 }
const getJWT =  ():string|null => {
  
   return localStorage.getItem(tokenKey)
 }

 export const auth = {getCurrentUser,logout,setJWT,getJWT}
export default auth



 
