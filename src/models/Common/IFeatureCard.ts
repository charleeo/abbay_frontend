export interface IFeatureCard
{ 
    color:any,
     title:string, 
     icon : string|React.FC|React.AllHTMLAttributes<any>|React.DOMAttributes<any>|any,
     description: string 
    }