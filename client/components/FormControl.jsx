import React from 'react';
import Select from './Select';
import Textarea from './Textarea';

const FormControl = ({control, ...rest}) => {
    switch (control) {
        case 'textarea':
            return <Textarea {...rest} />
        case 'select':
            return <Select {...rest} />
        default:
            return null
    }
}

export default FormControl;
