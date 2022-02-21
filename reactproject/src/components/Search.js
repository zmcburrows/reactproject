import React from 'react';
import { Button, Flex, Box, Input } from '@chakra-ui/react'
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { setResults, setSearch } from '../redux/reducers/searchReducer';
// import axios from "axios";


export default function SearchForm() {
    const term = useSelector(state => state.search.term)
    const dispatch = useDispatch()

var url = "https://en.wikipedia.org/w/api.php";

var params = {
    action: 'query',
    format: 'json',
    prop: 'extracts',
    exchars: 300,
    exintro: true,
    explaintext: false,
    // generator: 'search',
    srlimit: 20,
    srsearch: `${term}`,
    list: 'search'
};

url = url + "?origin=*";
Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                var results = data.query.search
                console.log(results)
                dispatch(setResults(results))
                dispatch(setSearch(''))
            })
    }

    return (
        <div>
            <div>
                <Box p={5}>
                    <form onSubmit={handleSubmit}>
                        <Flex maxW={400} mx='auto'>
                            <Input
                                mr={3} value={term}
                                onChange={(e) => dispatch(setSearch(e.target.value))}
                            />
                            <Button colorScheme="aliceblue" variant = "outline" type="submit">Search</Button>
                        </Flex>
                    </form>
                </Box>
            </div>
        </div>
    );
};
