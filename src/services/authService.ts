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
 
 const setRefreshJWT= (token:string):void|null=>{
  localStorage.setItem(refreshTokenKey,token);
 }
 
const getJWT =  ():string|null => {
  
   return localStorage.getItem(tokenKey)
 }
const getRefreshJWT =  ():string|null => {
  
   return localStorage.getItem(refreshTokenKey)
 }
 export const auth = {getCurrentUser,logout,setJWT,getJWT,setRefreshJWT,getRefreshJWT}
export default auth



 
