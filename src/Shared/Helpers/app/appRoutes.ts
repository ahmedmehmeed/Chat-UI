export const appRoutes = {

    Authentication: {
        full: "authentication",
        main: "authentication",
        sub: "",
        login: {
           full: "authentication/login",
           main: "login",
           sub: ""
        },  

        register: {
            full: "authentication/register",
            main: "register",
            sub: ""
         },
         error: {
            full: "authentication/error",
            main: "error",
            sub: ""
         }
     },

     home: {
      full: "home",
      main: "home",
      sub: "",
 
      userDetails: {
         full: "home/user/",
         main: "user/:id",
         sub: ""
      },  
      userEdit: {
         full: "home/profile/",
         main: "profile/:id",
         sub: ""
      },  

         },

       MembersChat:{
         full: "chat",
         main: "chat",
         sub: "",
         userDetails: {
            full: "chat/member/",
            main: "chat/:id",
            sub: ""
         }, 
       }  

}