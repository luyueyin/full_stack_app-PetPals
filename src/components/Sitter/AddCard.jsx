import styled from "styled-components"
import React, { useState, useEffect } from "react";


const InputWrapper = styled.div`
    display: grid;
    grid-template-column: 1fr 1fr;
    width: 400px;
    margin-bottom: 10px;
`


function AddCard() {

    const [card, setCard] = useState({
        fullname: '',
        description: '',
        email: '',
        price: '',
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submited')
        console.log(card)
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
                    <label htmlFor="fullname">Full Name:</label>
                    <input type='text' name='fullname' value={card.fullname} onChange={handleOnChange} />
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
                    <label htmlFor="price">Price:</label>
                    <input type='number' name='price' value={card.price} onChange={handleOnChange} />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="photo">Photo:</label>
                    <input type='file' name='photo' accept='.png .jpg .jpeg' />
                </InputWrapper>

                <div>
                    <input type='submit' value='Add Card'></input>

                </div>

            </form>

        </div>
    )
}

export default AddCard