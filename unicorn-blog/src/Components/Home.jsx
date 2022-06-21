import React from "react"

const home = () => {

    <div className='Article-Apercu'>
        {articles.map((article, index) => {
        return(
        <div key={index}>
            <h4 className='article-apercu-title'>
            {article.title}
            </h4>
            <p className='article-apercu-body'>
            {article.body}
            </p>
            <p className='article-lien-complet'> Lire plus </p>
        </div>
        )})}
    </div>
}

export default home