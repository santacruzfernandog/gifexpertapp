import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( (categ) => (
                        <GifGrid
                            key={ categ }
                            category={ categ }
                        />
                    ))
                }
            </ol>
        </div>
    )
}

export default GifExpertApp
