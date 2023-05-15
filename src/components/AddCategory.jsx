import { useState } from 'react'

export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        //console.log(target.value)
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newValue = inputValue.trim();
        if(newValue.length <= 1) return;
        onAddCategory(newValue);
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input type="text" placeholder="Find gifs" value={inputValue} onChange={ onInputChange }/>
        </form>        
    )
}
