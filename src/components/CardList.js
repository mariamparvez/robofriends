import React from 'react';
import Card from './Card';

const CardList = ({robots}) => 
(
    <main className='tc'>
        {
            robots.map((users, index) => {
                return (
                <Card id={robots[index].id} key={index} name={robots[index].name} email={robots[index].email}/>
                )
            })
        }
    </main>
); export default CardList;