import { RefAttributes } from 'react';

export interface IRoutes
{

    name?:string
    target?:string
    path: string
    icon?: RefAttributes<SVGSVGElement> | any
}
export interface IRoutesNested
{
    protected: IRoutes[]
    admin_protected: IRoutes[]
    client_protected: IRoutes[]
    auth: IRoutes[]
    general: IRoutes[]
    client_protected_menu: IRoutes[]
    admin_protected_menu: IRoutes[]
}

