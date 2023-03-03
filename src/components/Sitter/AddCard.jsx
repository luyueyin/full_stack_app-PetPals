import styled from "styled-components"
import React, { useState, useEffect } from "react";
import axios from "axios";


const InputWrapper = styled.div`
    display: grid;
    grid-template-column: 1fr 1fr;
    width: 400px;
    margin-bottom: 10px;
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


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submited')
        // console.log(card)

        //Validation
        if(!card.first_name) {
            setErrorMessage("Please enter your first name.");
        } else if(!card.email) {
            setErrorMessage("Please enter your email.");
        } else {
            setErrorMessage(null)
            axios
                .post("https://fakestoreapi.com/users", card)
                .then((res) => res.data)
                .then((json) => (console.log(json)))
        }

    }

    // const handleFullnameChange = (event) => {
    //     setFullName(event.target.value)
    // }

    const handleOnChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setCard((preCard) => {
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
                    <input type='text' name='first_name' value={card.first_name} onChange={handleOnChange} />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="last_name">Last Name:</label>
                    <input type='text' name='last_name' value={card.last_name} onChange={handleOnChange} />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="description">Description:</label>
                    <input type='text' name='description' value={card.description} onChange={handleOnChange} />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="email">Email:</label>
                    <input type='email' name='email' id='email' value={card.email} onChange={handleOnChange} />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="phone">Phone:</label>
                    <input type='number' name='phone' value={card.phone} onChange={handleOnChange} />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="photo">Photo:</label>
                    <input type='file' name='photo' accept='.png .jpg .jpeg' />
                </InputWrapper>

                <div>
                    <input type='submit' value='Add Card'></input>
                </div>
                <div>
                    {errorMessage}
                </div>

            </form>

        </div>
    )
}

export default AddCard