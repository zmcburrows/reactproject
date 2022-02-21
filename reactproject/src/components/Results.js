import React from 'react';
import { SimpleGrid } from '@chakra-ui/react'
import ArticleCard from './ArticleCard';
import { useSelector } from 'react-redux';
// import { articles } from '../results';


function Results() {
    const results = useSelector(state => state.search.results)

    return (
        <div>
        <div className='results'>Results</div>
        <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }}> 
        { results.map(result => {
          return <ArticleCard  key={result.pageid} result= {result} />
        })}
        </SimpleGrid>
        </div>
    )
}

export default Results