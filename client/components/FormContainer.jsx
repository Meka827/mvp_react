import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import FormControl from './FormControl';
// import * as Yup from 'yup';

//browser router
//formik
//look at recoil
//jotai

const FormContainer = (
    { 
        hairstyles, 
        onNext, 
        serviceChange, 
        optionChange, 
        descriptionChange,
        clientChange,
        numberChange, 
        bookAppointment 
    }) => {

    const onSubmit = (event) => {
        event.preventDefault();
        onNext()
    }

    return (

    <div>
            <form id='input' >
    <div>
        <label htmlFor="">style drop down</label>
        <select onChange={serviceChange} id="selected-hairstyle" name="selected-hairstyle">
            {hairstyles.map((hairstyle) => <option key={hairstyle.id} value={hairstyle.name}>{hairstyle.name}</option>)}
            <option selected>Please Select One</option>
        </select>
    </div>
    <div>
     <label htmlFor="">are you providing hair?</label>
        <select onChange={optionChange} id="selected-option" name="selected-option" defaultValue="not sure">
            <option selected value="not sure">not sure</option>
            <option value={true}>yes</option>
            <option value={false} >no</option>
        </select>
    </div>
    <div>
        <label htmlFor="">Add A note for your stylist</label>
        <input id='description' onChange={descriptionChange} name="description" type="text" />
    </div>
    <div>
        <label htmlFor="">Your name</label>
        <input onChange={clientChange} id="client" name="name" type="text" />
    </div>
    <div>
        <label htmlFor="">Phone Number</label>
        <input onChange={numberChange} type="number" name="phone-number" required id="phone-number" maxLength="8" />
    </div>
    {/* <div>
    <label htmlFor="">Add image if necessary</label>
    <input type="image" />
    </div> */}
    <button onClick={onSubmit} className='next'>Book Appointment?</button>
</form>
        
    </div>
  );
}

export default FormContainer;
