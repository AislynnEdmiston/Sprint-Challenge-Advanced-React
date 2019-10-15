import React from 'react'
import '../App.css'

export default function Players(props) {
    return (
        <div>
            <h3>{props.player.name}</h3>
            <h4>{props.player.country}</h4>
            <h4>{props.player.searches}</h4>
        </div>
    )
}


// this.state = {
//     player: [{
//       country: '',
//       id: '',
//       name: '',
//       searches: ''
//     }]