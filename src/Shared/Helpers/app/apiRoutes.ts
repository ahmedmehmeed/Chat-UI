export const ApiRoutes={
account:{
    login:'Account/Login',
    register:'Account/Register'
},
user:{
   users: 'Users/GetAllUsers',
   userDetails:'Users/GetUserById?Id=',
   userUpdate: 'Users/UpdateUser',
   userDelete: 'Users/DeleteUser?Id=',
   userPhotoDelete: 'Users/Delete-photo?publicId=',
   userPhotoUpdate: 'Users/Add-photo'
}

}