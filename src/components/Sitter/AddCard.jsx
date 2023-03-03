import styled from "styled-components"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Intro from "./Intro";
import { LinkedButton } from "../styled/Button";
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { TextField, InputAdornment } from '@mui/material';

const InputWrapper = styled.div`
    display: grid;
    grid-template-column: 1fr 1fr;
    width: 400px;
    gap: 10px;
    margin-bottom: 20px;
`

function AddCard() {

    const [card, setCard] = useState({
        first_name: '',
        last_name: '',
        description: '',
        email: '',
        phone: '',
    })

    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null);


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submited')
        // console.log(card)

        //Validation
        if (!card.first_name) {
            setErrorMessage("Please enter your first name.");
            setSuccessMessage(null)
        } else if (!card.email) {
            setErrorMessage("Please enter your email.");
            setSuccessMessage(null)
        } else {
            setErrorMessage(null)
            setSuccessMessage("Form Submitted")
            axios
                .post("https://fakestoreapi.com/users", card)
                .then((res) => res.data)
                .then((json) => (console.log(json)))
        }

    }

    const handleOnChange = (event) => {
        setCard((preCard) => {
            console.log(event.target.value)
            return {
                ...preCard,
                [event.target.name]: event.target.value


            }
        })

    }


    return (
        <div id='addCard'>
            <h1>Add Card</h1>
            <form
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                onSubmit={handleSubmit}
            >


                <InputWrapper>
                    <label htmlFor="first_name">First Name:</label>
                    <TextField id="first_name" variant="filled" type='text' name='first_name' value={card.first_name} onChange={handleOnChange} />

                    <label htmlFor="last_name">Last Name:</label>
                    <TextField id="last_name" variant="filled" type='text' name='last_name' value={card.last_name} onChange={handleOnChange} />

                    <label htmlFor="email">Email:</label>
                    <TextField id="email" variant="filled" type='email' name='email' value={card.email} onChange={handleOnChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    @
                                </InputAdornment>
                            ),
                        }} />

                    <label htmlFor="phone">Phone:</label>
                    <TextField id="phone" variant="filled" type='number' name='phone' value={card.phone} onChange={handleOnChange} />

                    <label htmlFor="description">Description:</label>
                    <TextField id="description" variant="filled" type='text' name='description' value={card.description} onChange={handleOnChange} multiline rows={3} />


                    <AccountCircle sx={{ color: 'action.active', mr: 1, mt: 2 }} />
                    <input id="photo" type='file' label='oho' name='photo' accept='.png .jpg .jpeg' />

                </InputWrapper>

                <div>



                </div>

                {/* <InputWrapper> */}
                {/* <label htmlFor="last_name">Last Name:</label>
                    <input type='text' name='last_name' value={card.last_name} onChange={handleOnChange} /> */}
                {/* </InputWrapper> */}

                <InputWrapper>

                </InputWrapper>

                <div>

                    <LinkedButton id='submiBtn' onClick={handleSubmit}>Add Card</LinkedButton>


                </div>
                <div>
                    {errorMessage}{successMessage}
                </div>

            </form>

        </div>
    )
}

export default AddCard