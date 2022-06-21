
import React, {useState, useEffect} from 'react';
import ReadMoreReadLess from './ReadMoreReadLess';

const Home = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log('API CONNECTED')
            return response.json()
        })
        .then((result) =>{
            setArticles(result)
            console.log('SET API UPDATE')
        })
        }, [])


            
    return (
        <div className='Article-Apercu'>
                {articles.map((article, index) => {
                return(
                  <ReadMoreReadLess>
                    <div key={index}>
                        <h4 className='article-apercu-title'>
                            {article.title}
                        </h4>
                        <p className='article-apercu-body'>
                            {article.body}
                        </p>
                    </div>
                  </ReadMoreReadLess>
                )})}
            </div>
    )
}

export default Home