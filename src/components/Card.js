import React from 'react';
import 'tachyons';

const Card = ({name,id,email}) => 
(
    <main className='tc br2 dib bg-yellow pa2 ma2 grow shadow-2'>
        <img src={`https://robohash.org/${id}`} alt="robots" />
        <h2>{name}</h2>
        <p>{email}</p>
    </main>
); export default Card;