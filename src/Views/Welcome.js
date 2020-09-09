import React, {useEffect} from 'react'
import firebase from '../Firebase/firebase'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import ShortHeader from '../Components/ShortHeader';
import OnboardingText from '../Components/OnboardingText';
import StepsList from '../Components/StepsList';
import SmallFooter from '../Components/SmallFooter';
import Folder from '../Components/Folder';


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
      <Folder/>
      <OnboardingText />
      <StepsList />
      <SmallFooter />
    </div>
  )
}

export default Welcome;