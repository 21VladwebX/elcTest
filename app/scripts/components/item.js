import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string,
        picture: PropTypes.string,
        about: PropTypes.string
    })
}

const Item = ({picture, name, about}) => (
        <div className="itemWrapper">
            <div className="itemPicture">
                <img src={picture} alt=""/>
            </div>
            <div className="itemName">
                <span>{name}</span>
            </div>
            <div className="itemAbout">
                <span>{about}</span>
            </div>
        </div>
)

Item.propTypes = propTypes;

export default Item
