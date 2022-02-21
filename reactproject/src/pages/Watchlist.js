import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react'
import ArticleCard from '../components/ArticleCard';
import { useSelector } from 'react-redux';


function App() {
    
    const watchlist = useSelector((state) => state.watchlist)
  return (
    <div> 
        <Box>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }}> 
      { watchlist.map(result => {
         return <ArticleCard key={result.pageid} result= {result} />
        })}
      </SimpleGrid>
      </Box>
  </div>
  );
}

export default App;