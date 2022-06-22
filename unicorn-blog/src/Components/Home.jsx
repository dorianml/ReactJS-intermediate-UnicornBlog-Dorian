
import React, {useState, useEffect} from 'react';
import ReadMoreReadLess from './ReadMoreReadLess';
import SearchBar from './SearchBar';

const Home = () => {

    //// CALL API PUR RECUPERER LES ARTICLES //////
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
            return result
        })
        }, [])
        
        ///// SEARCH BAR FEATURES ///// 

const [SearchText, setSearchText] = useState('')
const handleSearchText = (event) => {
    setSearchText(event.currentTarget.value)
    searchFilter()
}

const searchFilter = () => {
    const FilterArticles = articles.filter( e => 
    e.body.includes(SearchText) || e.title.includes(SearchText))
    setArticles(FilterArticles)
}
    return (
        <div className='Articles-apercu-section' >
            <SearchBar className='SearchBar' handleSearchText={handleSearchText} value={SearchText}/>
            <div className='Article-Apercu'>
                {articles.map((article, index) => {
                    return(
                    <ReadMoreReadLess>
                        <div key={index}>
                            <h4 className='article-apercu-title'>
                                {article.title}
                            </h4>
                            <p className='article-apercu-body'>
                                {article.body.substring(0, 80)}
                            </p>
                        </div>
                    </ReadMoreReadLess>
                )})}
            </div>
        </div>
    )
}

export default Home