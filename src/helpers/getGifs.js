//Helpers son funciones que realizar una accion especifica y retornan algo


export const getGifs = async( category ) => { //encodeURI limpia los posibles espacios de la variable pasada como parametro
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=XYdMqgPKtN4sRrungeiBPt0IPcv5KPJb`;
    const response = await fetch( url );
    const { data } = await response.json();

    const gifs = data.map( img => { 
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
     } )
    //Retorna una promesa
    return gifs;
}