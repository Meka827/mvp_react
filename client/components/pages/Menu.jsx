import React, { useState, useEffect } from 'react';
import Styles from '../Styles';

const Menu = () => {

    const apptModal = document.getElementById('myModal');
    const apptBtn = document.getElementById('btn');
    const span = document.querySelector('.close');

    const [ modalStatus, setModalStatus ] = useState('modal-close');
    const [ hairstyles, setHairstyles ] = useState([])
    const [ appointment, setAppointment ] = useState(false);
    const [ bookAppointment, setBookAppointment ] = useState(false);
    const [ hairOptions, setHairOptions] = useState('hairOptions');
    const [ providedOptions, setProvidedOptions] = useState('providedOptions');
    const [ description, setDescription] = useState('description');
    const [ client, setClient] = useState('client');
    const [ phoneNumber, setPhoneNumber] = useState('phoneNumber');
    const [ style, setStyle] = useState('');

    

    useEffect(() => {
        fetch("http://localhost:3000/hairstyles", {
           mode:"cors",
       })
       .then((res) => res.json())
       .then(result => {
        setHairstyles(result);
       });
    }, [])

    const openModal = () => {
        setModalStatus('modal-open')
    }

    const closeModal = () => {    
        setModalStatus('modal-close')
    }

    // if(modalStatus === 'modal-open') {
    //     window.onclick(setModalStatus('modal-close'))
    // }

    const onNext = (event) => {
        for( let each in hairstyles) {
            if(hairstyles[each].id === Number(hairOptions)) {
                setStyle(hairstyles[each].name)
            }
        }
        setBookAppointment('true');
            fetch("http://localhost:3000/appointments", {
               mode:"cors",
               method: "POST",
               headers: {
                "Content-Type": "application/json"
               },
               body: JSON.stringify({
                hairstyles_id: `${hairOptions}`,
                client: client,
                notes: description,
                phone_number: phoneNumber,
                hair_option: providedOptions
               })
           })
           .then((res) => res.json())
           .then((result) => {
                setTimeout(() => {
                alert(`        Thank You ${result.client} for booking a 
                service to get ${style}. You will 
                receive a text confirmation at ${result.phone_number}`)
                }, 1000);
            }) ;
    }

    const serviceChange = () => {
        let output = document.querySelector('#selected-hairstyle').value;
        setHairOptions(Number(output.split(',')[0]));
        setStyle(output.split(',')[1]);
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

  return (
    <div>
      {/* <img src="../logo.png" alt="Girl in a jacket" /> */}
      <Styles hairstyles={hairstyles} />
    </div>
  );
}

export default Menu;
