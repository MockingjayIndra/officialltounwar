let pwdEye = document.querySelector('#pwd-eye');
let cpwdEye = document.querySelector('#cpwd-eye');
let pwd = document.querySelector('#password');
let cpwd = document.querySelector('#cpassword');

pwdEye.addEventListener('click',()=> {
    if ( pwd.type === "password") {
        pwd.type = "text"
        pwdEye.setAttribute('name','eye-off-outline')
    } else {
        pwd.type = "password"
        pwdEye.setAttribute('name','eye-outline')
    }
})

cpwdEye.addEventListener('click',()=> {
    if ( cpwd.type === "password") {
        cpwd.type = "text"
        cpwdEye.setAttribute('name','eye-off-outline')
    } else {
        cpwd.type = "password"
        cpwdEye.setAttribute('name','eye-outline')
    }
})