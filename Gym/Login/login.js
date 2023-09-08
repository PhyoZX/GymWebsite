// show hidden password
const showPass = (loginPass,loginEye,confirmLoginPass,confirmLoginEye) =>{
    const input = document.getElementById(loginPass),
            eye = document.getElementById(loginEye),
            confirmEye = document.getElementById(confirmLoginEye),
            confirmInput = document.getElementById(confirmLoginPass);
    eye.addEventListener('click',()=>{
        // Change password to text
        if(input.type==='password'){
            // Switch to text
            input.type='text';
            // Icon change
            eye.classList.add('ri-eye-line');
            eye.classList.remove('ri-eye-off-line');
         }else{
            // switch back to passsword
            input.type='password';
            // Icon change
            eye.classList.remove('ri-eye-line');
            eye.classList.add('ri-eye-off-line'); 
         }
    }
    )
    confirmEye.addEventListener('click',()=>{
        // Change password to text
        if(confirmInput.type==='password'){
            // Switch to text
            confirmInput.type='text';
            // Icon change
            confirmEye.classList.add('ri-eye-line');
            confirmEye.classList.remove('ri-eye-off-line');
         }else{
            // switch back to passsword
            confirmInput.type='password';
            // Icon change
            confirmEye.classList.remove('ri-eye-line');
            confirmEye.classList.add('ri-eye-off-line'); 
         }
    }
    )
}
showPass('login_pass','login-eye','confirmLogin_pass','confirmLogin-eye',);