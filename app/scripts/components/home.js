import React, {memo} from 'react';
import PropTypes from 'prop-types';

import Item from "./item";

const propTypes = {
    itemsList: PropTypes.array,
    isLoaded: PropTypes.bool
}
const defaultProps = {
    isLoaded: false
}

const Home = ({itemsList, isLoaded}) => {

    const itemsWrapper =
        <div className="wrapper">
            {!!itemsList.length
                ? (
                    itemsList.map(({_id, picture, name, about}) => {
                        const itemProps = {
                            picture,
                            name,
                            about
                        }
                        return <Item key={_id} {...itemProps}/>
                    })
                ): (
                    <div> No results </div>
                )
            }
        </div>

    return(
            <section id="home">
                <div className="content">
                    <p>ELC Coding Test...</p>
                    {isLoaded && itemsWrapper}
                </div>
            </section>
    )
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default memo(Home)

