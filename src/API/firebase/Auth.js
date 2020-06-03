import { firebase } from './base.js'

const signUp = async ( email, password ) => {
    let checkSignUp = false
    await firebase.auth().createUserWithEmailAndPassword( email, password )
    .then( checkSignUp = true )
    .catch(error => {
        console.log( error.message )
        checkSignUp = false
    });

    return checkSignUp
}

const signIn = async ( email, password ) => {
    let checkLogin = false
    await firebase.auth().signInWithEmailAndPassword( email, password )
        .then( checkLogin = true )
        .catch( error => {
            console.log( error.message )
            checkLogin = false
    });
    return checkLogin
}

const signOut = async () => {
    await firebase.auth().signOut();
}

//ユーザーidをゲット
const getUser = async () => {
    var user = await firebase.auth().currentUser;
    const email = user.email;
    const userId = user.uid;
    if (user != null ) return {email,userId}
    return ''
}


export { signUp , signIn, signOut, getUser }