import React from 'react';
import './Item.css';
import ImgHN from '../../images/ha-noi.jpg'
import ImgHCM from '../../images/ho-chi-minh.jpg'
import ImgDN from '../../images/da-nang.jpg'
import { useContext } from 'react';
import { TicketContext } from '../../TicketContext.js';


function Item() {

    const addressInfo = [
        {
            id: 100,
            image: ImgHN,
            location: "Ha Noi",
            date: "Fri 28 Nov 2021",
            description: "Hanoi faith and hope. We always waiting for you!"
        },
        {
            id: 101,
            image: ImgHCM,
            location: "Ho Chi Minh",
            date: "Tue 28 Dec 2021",
            description: "Ho Chi Minh city active and modernization. We always waiting for you!"
        },
        {
            id: 102,
            image: ImgDN,
            location: "Da Nang",
            date: "Thu 28 Nov 2021",
            description: "Da Nang has regional statue. We always waiting for you!"
        },
    ];

    const { showPopup, setShowPopup, handlePopup } = useContext(TicketContext);

    return (
        <div className='item-wrapper'>
            {addressInfo.map(item => {
                return (
                    <div className='item' key={item.id}>
                        <img className='item-img'
                            src={item.image}
                            alt=""
                        />
                        <div className='item-description'>
                            <h2>{item.location}</h2>
                            <p className='item-date'>{item.date}</p>
                            <p>{item.description}</p>
                        </div>
                        <div className='item-button'>
                            <button className='btn-buy' onClick={() => handlePopup(true)}>Buy Ticket</button>
                            <button className='btn-getfree'>Get Free</button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Item;