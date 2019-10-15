import React from 'react';
import { useLightMode } from '../hooks/useLightMode';

export default function NavBar() {
    const [lightMode, setLightMode] = useLightMode(false);

    const toggleMode = event => {
        event.preventDefault()
        setLightMode(!lightMode)
    }



    return (
        <nav className='navbar'>
            <div className='light-mode__toggle'>
                <div
                    onClick={toggleMode}
                    className={lightMode ? 'toggle toggled' : 'toggle'}
                ></div>
            </div>
        </nav>
    )
}
