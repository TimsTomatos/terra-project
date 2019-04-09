

const signInValueUN = document.querySelector('#login-email');
const signInValuePW = document.querySelector('#login-password');

const display_user = document.querySelector('#display-user');

const signUpValueUN = document.querySelector('#signup-email');
const signUpValuePW = document.querySelector('#signup-password');

const signInForm = document.querySelector('#form-login');
const signUpForm = document.querySelector('#form-signup');

const head = document.querySelector('#main');
const logout_button = document.querySelector('#logout-button');

//const signInStuff = document.querySelectorAll('.signInStuff');
//const signOutStuff = document.querySelectorAll('.signOutStuff');

//const inPop = document.querySelector('#popUp');
//const outPop = document.querySelector('#popIn');


//const signOutButton = document.querySelector('#signOutButton');
var displayUsername = document.querySelector('#displayUsername');

var provider = new firebase.auth.GoogleAuthProvider();
var selectedFile;

auth.onAuthStateChanged(function(user) { // Checks if they are signed in or signed out
    if (user)
    {
        console.log("Logged in");
        console.log(user);

        //signInStuff.forEach(e => e.style.display="block");
        //signOutStuff.forEach(e => e.style.display="none");
        display_user.innerHTML = user.email;
        logout_button.style.display = 'block';

    }
    else 
    {
        console.log("Logged out");
        //signInStuff.forEach(e => e.style.display="none");
        //signOutStuff.forEach(e => e.style.display="block");
    }
});

head.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signInValueUN.value;
    const password = signInValuePW.value;

    auth.signInWithEmailAndPassword(email,password).then(() => {
        //inPop.style.display = 'none';
    });
});

head.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signUpValueUN.value;
    const password = signUpValuePW.value;

    auth.createUserWithEmailAndPassword(email,password).then(() => {
        //inPop.style.display = 'none';
        console.log("Signed Up")
    });
});

logout_button.addEventListener('click', () => {
    auth.signOut().then(() => {
        console.log("Logged Out");
        location.reload();
    });
});

function ToggleForm(element) {
    let temp = document.querySelector(element);

    if(temp.style.display == 'none')  {
        temp.style.display = 'flex';
        console.log('suppose to go away');
    }
    else {
        temp.style.display = 'none';
        console.log('SUppose to display!');
    }
        
}