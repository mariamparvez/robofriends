import React from 'react';

const Scroll = (props) => 
(
    <main style={{overflowY: 'scroll', height: '40rem'}}>
        {props.children}
    </main>
); export default Scroll;