import { React, useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";

const Article = () => {

    const {id} = useParams()
    
    const [article, setArticle] = useState([])
    
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
    }, [])
    
        return (
        <div className="Articles">
                <Link className="Back-button" to={'/'} >
                       retour
                </Link> 
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