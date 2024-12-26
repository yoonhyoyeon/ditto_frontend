"use client"
import styles from './index.module.css';
import { useState } from 'react';
import { getCookie, setCookie } from 'cookies-next';

const CookieForm = () => {
    const [key, setKey] = useState("");
    const [value, setValue] = useState("");
    const option = {
        maxAge: 3600 * 24 * 14 //14일
    }

    return (
        <div>
            <input 
                value={key}
                onChange={(e) => { setKey(e.target.value) }}
                placeholder='key'
            />
            <input 
                value={value}
                onChange={(e) => { setValue(e.target.value) }}
                placeholder='value'
            />
            <button onClick={() => {setCookie(key, value, option)}}>set</button>
            <button onClick={() => {alert(getCookie(key))}}>get</button>
        </div>
    );
}

export default CookieForm;