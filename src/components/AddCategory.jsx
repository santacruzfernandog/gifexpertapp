import React, {useState} from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if( inputValue.trim().length > 2 ){
            //categ: Desestructura lo que ya tenia en su estado anterior, y le setea un nuevo estado
            setCategories( categ => [ inputValue, ...categ ] )
            setinputValue('')
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

//Uso del PropType para indicar que la propiedad enviada desde el padre, sea obligatoria
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
