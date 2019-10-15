import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useLightMode (value) {
    const [lightMode, setLightMode] = useLocalStorage('LMKey', false);

    useEffect(() => {
        const body = document.querySelector('body');

        if(lightMode === true){
            body.classList.add('light-mode')
        } else {
            body.classList.remove('light-mode')
        }
    }, [lightMode])

    return [lightMode, setLightMode]
}