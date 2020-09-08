import React, {useEffect} from 'react'
import firebase from '../Firebase/firebase'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import ShortHeader from '../Components/ShortHeader';
import Form from '../Components/Form';
import OnboardingText from '../Components/OnboardingText';


const Welcome = () => {
  const history = useHistory(); 

  const closeSessionBtn = () => {
    firebase.auth().signOut()
    .then(function() {
      history.push('/')
    }).catch(function(error) {
      console.log(error);
    });
  }

  return (
    <div>
      <ShortHeader 
      onClickFunction={closeSessionBtn}
      />
      <OnboardingText />
      <Form />
    </div>
  )
}

export default Welcome;