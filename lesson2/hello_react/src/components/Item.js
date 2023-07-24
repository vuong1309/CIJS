import React from 'react';
import './Item.css';


function Item(props) {
    const { onClick } = props;
    return (
        <>
            <div className='item-component'>
                <div className='itemBtn'>
                    <div className='myButton'>
                        <div
                            className='myButton-buy'
                            onClick={onClick}>
                            Buy ticket
                        </div>
                        <div className='myButton-getfree'>
                            Get free
                        </div>
                    </div >
                </div>
            </div >

        </>

    );
};

export default Item;