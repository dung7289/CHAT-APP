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
                //alert(`Wellcome ${model.currentUser.displayName} to Chat-app`)
                document.getElementById('app').innerHTML=component.chatPage
                //document.getElementById('wellcome-user').innerHTML=` Wellcome ${model.currentUser.displayName} to Chat-app`
                const sendMessageForm=document.getElementById('send-message-form')
                sendMessageForm.addEventListener('submit',(e)=>{
                    e.preventDefault()
                    console.log(sendMessageForm.message.value)
                    const message={
                        content: sendMessageForm.message.value,
                        owner: model.currentUser.email
                    }
                    const messageFromBot={
                        content: sendMessageForm.message.value,
                        owner:'Bot'
                    }
                    if(sendMessageForm.message.value!==''&& checkMessage(sendMessageForm.message.value)){
                        view.addMessage(message)
                        view.addMessage(messageFromBot)
                        
                    }
                    sendMessageForm.message.value=``
                   
                    
                })
            break;


    }
}
view.setErrorMessage=(elementId,content)=>{
    document.getElementById(elementId).innerText=content
}

view.addMessage=(message)=>{
    const messageWrapper= document.createElement('div')
    messageWrapper.classList.add('message')
    if(message.owner===model.currentUser.email){
        messageWrapper.classList.add('mine')
        messageWrapper.innerHTML=`
        <div class="content"> ${message.content}</div>`
    }else{
        messageWrapper.classList.add('their')
        messageWrapper.innerHTML=`
        <div class="owner">${message.owner}</div>
        <div class="content"> ${message.content}</div>`
    }

    console.log(messageWrapper)
    document.querySelector('.list-message').appendChild(messageWrapper)
}

function checkMessage(message){
    let space_number=0
    console.log('check number '+message.length)
    for(let index=0;index<message.length;index++){
        if(message[index]===' '){
            space_number=space_number+1
        }
    }
    if(space_number===message.length){
        return false
    }else{
        return true
    }
}
