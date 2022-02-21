import React from 'react';
import { Box, Button, Heading, Link } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { addArticle, removeArticle } from '../redux/reducers/watchlistReducer';
import Results from './Results';
// import { articles } from '../results';


function ArticleCard(props) {
    const { result } = props
    const dispatch = useDispatch()
    const watchlist = useSelector((state) => state.watchlist)

    const handleAddArticle = () => {
        dispatch(addArticle(result))
    }

    const handleRemoveArticle = () => {
        dispatch(removeArticle(result))
    }

    const isAlreadySaved = watchlist.find((savedArticle) => {
        return savedArticle.pageid === result.pageid
    });
    return (


        <div>
            <Box maxW='sm' m="3" borderWidth='1px' borderRadius='lg' overflow='hidden' className='resultBox'>
                <div className='textBox'>
                <Heading className='title'>{result.title}</Heading>
                <div className='snippet' dangerouslySetInnerHTML = {{__html:result.snippet}}></div>
                </div>
                <Link href= {`https://en.wikipedia.org/?curid=${result.pageid}`}>Learn more about {result.title}</Link>
                <div className='buttonRandom'>
                {isAlreadySaved ? (
                    <Button size = "md" my = "4" colorScheme = "white" variant = "outline" onClick={handleRemoveArticle}>Remove Topic</Button>
                ) : (
                    <Button size = "md" my = "4" colorScheme = "pink" onClick={handleAddArticle}>Save Topic</Button>
                )}
                </div>
            </Box>
        </div>
    )
}

export default ArticleCard