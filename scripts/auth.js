//signup form
const signupForm = document.querySelector('#signup-form')
signupForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const email =  document.querySelector('#signup-email').value
    const password =  signupForm['signup-password'].value
    
    //signup user with email & pass
    auth.createUserWithEmailAndPassword(email,password)
    .then(res =>{
        console.log(res)

        //close signup modal after sucessful signup & clear input fields
        const modal = document.querySelector('#modal-signup')
        M.Modal.getInstance(modal).close()
        signupForm.reset()
    })
})


//logout 
const logout = document.querySelector('#logout')
logout.addEventListener('click',(e)=>{
    e.preventDefault()
    auth.signOut()
    .then(()=>{
        console.log('user signed out')
    })
})

//login
const loginForm = document.querySelector('#login-form')
const login = document.querySelector('#login')

loginForm.addEventListener('click',(e)=>{
    e.preventDefault()
    const email =  document.querySelector('#login-email').value
    const password =  loginForm['login-password'].value
    

    auth.signInWithEmailAndPassword(email,password)
    .then((res)=>{
        console.log('user logged In',res)

        //close & reset login modal
        const modal = document.querySelector('#modal-login')
        M.Modal.getInstance(modal).close()
        loginForm.reset()
    })
})