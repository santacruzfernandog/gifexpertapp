import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem'

const GifGrid = ({ category }) => {
    //Renombre data x images
    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>

            {
                loading && <p>Cargando Gifs solicitados...</p>
            }

            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem
                            key={ img.id }
                            { ...img } />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid
