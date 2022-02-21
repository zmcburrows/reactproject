import { useEffect, useState } from "react";
import { Box, Button  } from '@chakra-ui/react'
// import axios from "axios";

var url = "https://en.wikipedia.org/w/api.php";

var params = {
    action: "query",
    format: "json",
    list: "random",
    // rnlimit: "5"
};
url = url + "?origin=*";
var banana = Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});


export default function Article() {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("")


    // runs when component is mounted
 useEffect (() => {
     fetchRandom()
 }, [])

    const fetchRandom = () => {fetch(url)
        .then((res) => res.json())
        .then((res) => {
            var randoms = res.query.random;
            // let random1 = []
            for (var r in randoms) {
                console.log(randoms[r].title);
                // const outOfIt = random1.filter(random1 === "User:")
                // console.log(outOfIt)
            }
            setCategories(randoms)
        })
    }
    return (
        <div>
            <div>
                <div className="Select">
                    <div onClick = {(e) => setCategory(e.target.value)}>
                    <Box maxW='sm' m="3" borderWidth='1px' borderRadius='lg' overflow='hidden' className='randomTopicBox'>
                        {categories?.length && categories.map((randoms, i)  => {
                            return <div className="randomTopic" key = {i}>{randoms.title}</div>;
                        })}
                        <div className = "randomGenerate" >
                          <Button colorScheme = "pink" onClick = {fetchRandom}>Generate</Button>
                          </div>
                          </Box>
                          </div>
                </div>
            </div>
        </div>
    );
};

// var params = {
//     action: "query",
//     format: "json",
//     prop: "categories",
//     titles: "Janelle Monáe"
// };

// url = url + "?origin=*";
// Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });

// export default function Article() {
//     const [categories, setCategories] = useState([]);
//     const [ category, setCategory] = useState("")


//     // runs when component is mounted
//  useEffect (() => {
//      fetchCategories()
//  }, [])

//     const fetchCategories = () => {fetch(url)
//         .then((res) => res.json())
//         .then((res) => {
//             var pages = res.query.pages;
//             let category1 = []
//             for (var p in pages) {
//                 for (var cat of pages[p].categories) {
//                     // console.log(cat.title);
//                     category1.push(cat)
//                 }
//             }
//             setCategories(category1)
//         })
//     }
//     return (
//         <div>
//             <div>
//                 <div className="Select">
//                     <select onChange={(e) => setCategory(e.target.value)}>
//                         <option value ="" >
//                             Select a category
//                         </option>
//                         {categories?.length && categories.map((cat, i)  => {
//                             return <option key = {i}>{cat.title}</option>;
//                         })}
//                     </select>
//                 </div>
//             </div>
//         </div>
//     );
// };


