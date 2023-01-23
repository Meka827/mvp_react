import React, { useState } from 'react';
import Header from './Header';
import Modal from './Modal';
import Styles from './Styles';

const hairstyles = [
    {
        id: 1,
        name: "crochet",
        price: 100,
        description: "Crocheting hair extensions to client's braided hair.",
        hairNeeded: true
    },
    {
        id: 2,
        name: "soft locs",
        price: 120,
        description: "Type of faux locs that use crochet locs hair and afro kinky (distressed) wrapping hair at the roots.",
        hairNeeded: true
    },
    {
        id: 3,
        name: "natural hair any style",
        price: 50,
        description: "Any hair style done with the clients natural hair.",
        hairNeeded: false
      }
];

const App = () => {

    const apptModal = document.getElementById('myModal');
    const apptBtn = document.getElementById('btn');
    const span = document.querySelector('.close');

    const [ modalStatus, setModalStatus ] = useState('modal-close');
    const [ appointment, setAppointment ] = useState({});
    const [ bookAppointment, setBookAppointment ] = useState(false);
    const [hairOptions, setHairOptions] = useState('hairOptions');
    const [providedOptions, setProvidedOptions] = useState('providedOptions');
    const [description, setDescription] = useState('description');
    const [client, setClient] = useState('client');
    const [phoneNumber, setPhoneNumber] = useState('phoneNumber');

    // const formObj = {
    //     hairOptions, providedOptions, description
    // }


    const openModal = () => {
        setModalStatus('modal-open')
    }

    const closeModal = () => {
        console.log('clicked')
    
        setModalStatus('modal-close')
    }

    // if(modalStatus === 'modal-open') {
    //     window.onclick(setModalStatus('modal-close'))
    // }

    const onNext = () => {
        setBookAppointment('true')
        console.log(hairOptions, providedOptions, description, client, phoneNumber)
        //alert(`Thank You ${client} for booking a service to get ${hairOptions}`)
    }

    const serviceChange = () => {
        let output = document.querySelector('#selected-hairstyle').value;
        setHairOptions(output);
    }

    const optionChange = () => {
        let output = document.querySelector('#selected-option').value;
        setProvidedOptions(output)
    }

    const descriptionChange = () => {
        let output = document.querySelector('#description').value;
        setDescription(output)
    }

    const clientChange = () => {
        let output = document.querySelector('#client').value;
        setClient(output)
    }

    const numberChange = () => {
        let output = document.querySelector('#phone-number').value;
        setPhoneNumber(output)
    }

    // window.onclick = function(event) {
    //     if (event.target == modal) {
    //       modal.style.display = "none";
    //     }
    //   }

  return (
    <div>
      <Header 
      modalStatus={modalStatus} 
      openModal={openModal} 
      closeModal={closeModal} 
      hairstyles={hairstyles}
      onNext={onNext}
      serviceChange={serviceChange}
      optionChange={optionChange}
      descriptionChange={descriptionChange}
      clientChange={clientChange}
      numberChange={numberChange}
      bookAppointment={bookAppointment}
      />
      {/* <img src="../logo.png" alt="Girl in a jacket" /> */}
      <Styles hairstyles={hairstyles} />
    </div>
  );
}

export default App;
