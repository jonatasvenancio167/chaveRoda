import { auth } from "../config/firebase";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  AuthErrorCodes
 } from "firebase/auth";

function errorsFirebase(error){
  let message = ''
  switch(error.code){
    case AuthErrorCodes.EMAIL_EXISTS:
      message = "Esse email já está em uso"
      break
    case AuthErrorCodes.INVALID_EMAIL:
      message = 'Email inválido'
      break
    case AuthErrorCode.WEAK_PASSWORD:
      message = "A senha precisa de no minimo 6 caracteres"
      break
    default:
      message = 'Erro desconhecido' 
  }
  return message
}

export async function register(email, password){
  const result = await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    firestore().collection('users').add({
      id: userCredential.user.uid,
      user_name,
      email,
      password,
      address,
      telephone,
      
    })
    console.log(userCredential)
    return "sucesso"
  })
  .catch((error) => {
    console.log(error)
    return errorsFirebase(error)
  });

  return result
}

export async function login(email, password){
  const result = await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log(userCredential)
    return "sucesso"
  })
  .catch((error) => {
    console.log(error)
    return "Error"
  });

  return result
}