import { useEffect, useState } from "react";
// import axios from "axios";

var url = "https://en.wikipedia.org/w/api.php";

var params = {
    action: "query",
    format: "json",
    prop: "categories",
    titles: "Lana Del Rey"
};

url = url + "?origin=*";
Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });

export default function Article() {
    const [categories, setCategories] = useState([]);
    const [ category, setCategory] = useState("")


    // runs when component is mounted
 useEffect (() => {
     fetchCategories()
 }, [])

    const fetchCategories = () => {fetch(url)
        .then((res) => res.json())
        .then((res) => {
            var pages = res.query.pages;
            let category1 = []
            for (var p in pages) {
                for (var cat of pages[p].categories) {
                    // console.log(cat.title);
                    category1.push(cat)
                }
            }
            setCategories(category1)
        })
    }
    return (
        <div>
            <div>
                <div className="Select">
                    <select onChange={(e) => setCategory(e.target.value)}>
                        <option value ="" >
                            Select a category
                        </option>
                        {categories?.length && categories.map((cat, i)  => {
                            return <option key = {i}>{cat.title}</option>;
                        })}
                    </select>
                </div>
            </div>
        </div>
    );
};


