import {
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/solid';

import {
  IRoutesNested,
} from './models/types/IRoutes';



export const routesNested: Partial<IRoutesNested> = {

  protected: [
    
    {
      path: "/logout",
      name: "logout",

    },

  ],

  admin_protected: [

    {
      path: "/dashboard",
      name: "dashboard",
      // icon: UserIcon,
    },
    
    
    {
      name: "Profile",
      path: '/admin/profile'
    }

  ],


  client_protected: [

   
    {
      path: "/profile",
      name: "profile",

    },

  ],

  client_protected_menu: [
    {
      name: "Request Mortgage",
      path: '/loan/apply'
    },
    {
      name: "Mortgages",
      path: '/applied/loans'
    },   
  ],
  admin_protected_menu: [
    
  ],

  auth: [
    {
      path: "/register",
      name: "register",
      // icon: KeyIcon,
    },

    {
      path: "/login",
      icon: ArrowLeftOnRectangleIcon,
      name: "login",

    },
  ],

  general: [
  ],

}




