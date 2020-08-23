window.onload = () =>{
    var firebaseConfig = {
        apiKey: "AIzaSyDdNRd4Nf_7GJrJea6jaWbOxBKA169oxSU",
        authDomain: "chat-app-ci47.firebaseapp.com",
        databaseURL: "https://chat-app-ci47.firebaseio.com",
        projectId: "chat-app-ci47",
        storageBucket: "chat-app-ci47.appspot.com",
        messagingSenderId: "867430652676",
        appId: "1:867430652676:web:c64cb123f373345e238e51"
    };
    firebase.initializeApp(firebaseConfig)
    console.log(firebase.app())
    view.setActiveScreen('registerPage')
}