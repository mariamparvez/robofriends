import React from 'react';

const Search = ({search}) => {
    return (
            <main className='tc ma2'>
                <h1>RoboFriends</h1>
                <form action="search">
                    <input type="search" placeholder='Search...' name='search' className='pa2' onChange={search}/>
                </form>
            </main>
    )}; export default Search;