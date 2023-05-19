import React from 'react';
import { Button } from '@mui/material';

const User =({name,fun})=> {
    return (
        <>
        <h1>this is user component {name}</h1>
        <Button onClick={fun} variant='outlined' color='secondary'>
            click me
        </Button>
        </>
    );
};

export default User;