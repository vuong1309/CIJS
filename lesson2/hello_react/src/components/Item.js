import React from 'react';
import Button from './Button.js';

const Item = () => {
    return (
        <div className='item-component'>
            <div className='itemBtn'>
                <Button></Button>
                <Button></Button>
            </div>
        </div>
    );
};

export default Item;