import React, { useState } from 'react';
import './Login.css';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const register = () => {
    !name && alert('Veuillez inscrire votre nom complet');

    auth.createUserWithEmailAndPassword(email, password).then((userAuth) =>
      userAuth.user
        .updateProfile({ displayName: name, photoUrl: profilePic })
        .then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoUrl: profilePic,
            })
          );
        })
        .catch((error) => alert(error))
    );
  };

  return (
    <div className='login'>
      <img
        src='https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks'
        alt=''
      />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Nom complet (Inscription uniquement)'
          type='text'
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder='URL photo de profil (optionnel)'
          type='text'
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='E-mail'
          type='email'
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Mot de passe'
          type='password'
        />
        <button type='submit' onClick={loginToApp}>
          S'identifier
        </button>
      </form>
      <p>
        Vous débutez sur LinkedIn? &nbsp;
        <span className='login__register' onClick={register}>
          S'inscrire
        </span>
      </p>
    </div>
  );
}

export default Login;
