import {
  ArrowLeftOnRectangleIcon,
  PlayCircleIcon,
  UserCircleIcon,
} from '@heroicons/react/24/solid';

import {
  IRoutes,
  IRoutesNested,
} from './models/types/IRoutes';

export const routes: IRoutes[] = [

  {
    path: "/register",
    name: "register",
    icon: UserCircleIcon,

  },
  {
    path: "/login",
    name: "login",
    icon: UserCircleIcon,

  },
  {
    path: "/dashboard",
    name: "dashboard",
    icon: UserCircleIcon,

  },
  {
    path: "https://play.google.com/store/apps",
    name: "download app",
    icon: PlayCircleIcon,
    target: "_blank",
  },
]

export const routesNested: Partial<IRoutesNested> = {

  protected: [
    
    {
      path: "/logout",
      name: "logout",

    },

  ],

  admin_protected: [


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



export default routes;
