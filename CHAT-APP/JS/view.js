const view={}
view.setActiveScreen=(screenName) =>{
    switch (screenName){
        case 'registerPage':
            document.getElementById('app').innerHTML = component.registerPage
            document.getElementById('Login-btn').addEventListener('click',() => {view.setActiveScreen('loginPage')})
            const registerForm = document.getElementById('register-form')
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const data = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value,
                }
                controller.register(data)
            })
            break;
            case 'loginPage':
                document.getElementById('app').innerHTML=component.loginPage
                document.getElementById('Register-btn').addEventListener('click',() => {view.setActiveScreen('registerPage')})
                const loginForm=document.getElementById('login-form')
                loginForm.addEventListener('submit',(e)=>{
                    e.preventDefault()
                    const data={
                        email:loginForm.email.value,
                        password:loginForm.password.value,
                    }
                    controller.login(data)
                    
                })
                
            break;
            case 'chatPage':
                alert(`Wellcome ${model.currentUser.displayName} to Chat-app`)
                document.getElementById('app').innerHTML=component.chatPage
                document.getElementById('app').innerHTML=`<h3> Wellcome ${model.currentUser.displayName} to Chat-app </h3>`
                
            break;



    }
}
view.setErrorMessage=(elementId,content)=>{
    document.getElementById(elementId).innerText=content
}