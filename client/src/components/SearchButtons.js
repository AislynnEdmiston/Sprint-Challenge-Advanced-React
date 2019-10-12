import React from 'react'


function SearchButtons() {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    
    return (
        <div>
        {alphabet.map(letter => <button>{letter}</button>)}
        </div>
    )
}

export default SearchButtons
