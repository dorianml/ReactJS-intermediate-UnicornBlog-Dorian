import React, {useState, useEffect} from 'react';

const Galery = () => {

    //// CALL API PUR RECUPERER LES ARTICLES //////
    const [Images, setImages] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => {
            console.log('API CONNECTED')
            return response.json()
        })
        .then((result) =>{  
            setImages(result)
            console.log('SET API UPDATE')
            return result
        })
        }, [])

    return(
        <>
        <h1>
            HELLO GALERY PAGE 
        </h1>
        <div>
           {Images.map((image, index) => {
                return(
                    <img key={index} src={image.url} className='image'>
                    </img>
                )
           })}
        </div>
        </>
    )
}

export default Galery