import React, {memo, useCallback, useState} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    onSearchChanged: PropTypes.func.isRequired
}

const Menu = ({onSearchChanged}) => {
    const [inputValue, changeInputValue] = useState('');

    const onInputSubmit = useCallback( e => {
        const trimmedValue = e.target.value.trim();
        if(e.keyCode === 13) { //if Enter
            onSearchChanged(trimmedValue.toLowerCase());
        }
    },[]);

    const onInputChange = useCallback( ({target:{value}}) => {
        changeInputValue(value)
    },[]);

    const onClearClick = useCallback(()=>{
        changeInputValue('');
        onSearchChanged('');
    },[]);

    return (
        <header className="menu">
            <div className="menu-container">
                <div className="menu-holder">
                    <h1>ELC</h1>
                    <nav>
                        <a href="#" className="nav-item">HOLIDAY</a>
                        <a href="#" className="nav-item">WHAT'S NEW</a>
                        <a href="#" className="nav-item">PRODUCTS</a>
                        <a href="#" className="nav-item">BESTSELLERS</a>
                        <a href="#" className="nav-item">GOODBYES</a>
                        <a href="#" className="nav-item">STORES</a>
                        <a href="#" className="nav-item">INSPIRATION</a>
                    </nav>
                </div>
                <div className="search-container">
                    <i className="material-icons search">search</i>
                    <input type="text" value={inputValue} onChange={e => onInputChange(e) } onKeyDown={e => onInputSubmit(e)}/>
                    <i className={`${!inputValue ? 'hidden ' : '' }material-icons clear` } onClick={onClearClick}>clear</i>
                </div>
            </div>
        </header>
    );
};

Menu.propTypes = propTypes;

export default memo(Menu);
