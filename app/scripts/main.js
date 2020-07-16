import React, {useState,useEffect, useCallback} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Menu from './components/menu';
import Home from './components/home';

const BEPort = 3035;

const App = ()=> {
    const [searchString, changeSearchString] = useState('');
    const [isLoaded, changeAppStatus] = useState(false);
    const [searchedData, changeSearchedData] = useState([]);

    const onSearchChanged = useCallback(keyword => {
        const searchString = keyword || 'all'
        changeSearchString(searchString);
    }, [])

    useEffect(() => {
        if(!!searchString) {
            axios(`http://localhost:${BEPort}/search?q=${searchString}`).then(({data}) => {
                changeSearchedData(data)
                changeAppStatus(true)
            })
        }

    },[searchString])

    return (
        <div className="App">
            <Menu onSearchChanged={onSearchChanged}/>
            <Home itemsList={searchedData} isLoaded={isLoaded}/>
        </div>
    )
}



// Render this out
ReactDOM.render(<App />, document.getElementById('root'));
