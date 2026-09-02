// const user = require('./model/Users')
// function createAdmin() {
//     try{
//         const user = new user({
//             FirstName: 'Admin',
//             LastName: 'User',
//             MobileNo: 1234567890,
//             email: 'admin@example.com',
//             password: 'admin123',
//             userType: 'admin'
//         })
//         return user.save()
//     }catch(err){
//         console.error('Error creating admin:', err)
//     }
// }

const user = require('./models/users')
async function createAdmin() {
    try{
        const user = await User.findOne({
            email: 'admin@example.com'
        });
        if(user) {
            console.log('Admin user already exists')
        }else{
            user = new User();
            user.firstName = 'ADITYA';
            user.lastName = 'NARAYAN';
            user.mobileNo = '9998887770'
            user.email = 'aditya18.pr@gmail.com';
            let password = bcrypt.hashSync('admin123', 10);
            user.password = password;
            user.userType = 'admin';
            await user.save();
            console.log("user created successfully...");
            }
            return newUser.save();
        }catch(err){
        console.error('Error creating admin:', err);
}
}
module.exports=createAdmin