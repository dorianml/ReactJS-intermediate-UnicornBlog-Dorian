import { React, useEffect, useState, useParams } from "react";
import { Link } from "react-router-dom";

const Article = () => {

    const [article, setArticle] = useState([])
    const {id} = useParams()
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
            console.log('API CONNECTED')
            return response.json()
        })
        .then((solo_article) =>{  
            setArticle(solo_article)
            console.log('SET API UPDATE')
        })
    }, [id])
    
    return (
        <div className="Articles">
            <button>
                <Link to={'/'} >
                       retour
                </Link> 
            </button>
            <div className='Article-Apercu'>
                <h4 className='article-apercu-title'>
                    {article.title}
                </h4>
                <p className='article-apercu-body'>
                    {article.body}
                </p>
             </div>
        </div>
    )
}

export default Article