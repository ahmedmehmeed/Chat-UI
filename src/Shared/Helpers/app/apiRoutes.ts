export const ApiRoutes={
account:{
    login:'Account/Login',
    register:'Account/Register',
    emailConfirmed:'Account/Confirm-Email'
},

user:{
   users: 'Users/GetAllUsers',
   userDetails:'Users/GetUserById?Id=',
   userUpdate: 'Users/UpdateUser',
   userDelete: 'Users/DeleteUser?Id=',
   userPhotoDelete: 'Users/Delete-photo?publicId=',
   userPhotoUpdate: 'Users/Add-photo'
},

follow:{
   followUser:'Follow/AddFollow?FollowedId=',
   getFollow:'Follow/GetFollows?predicate='
        },

message:{
sendMessage:'Message/SendMessage',
getMessageThread:'Message/GetMessagesThread/', //add parameter as path not query param
DeleteMessage:'Message/DeleteMessage?id=',
DeleteMessagesThread:'Message/DeleteMessagesThread?userId='
      }


}