"use client";
import Input from '@/component/Input';
import Button from '@/component/Button';
import styles from './index.module.css';
import { useState } from 'react';
import { login } from '@/service';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
    const [ id, setId ] = useState('');
    const [ pw, setPw ] = useState('');
    const router = useRouter();

    const submit = async () => {
        if(await login(id, pw)) {
            router.push("/service/courses");
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.input_wrap}>
                <span>아이디</span>
                <Input 
                    value={id} 
                    onChange={(e) => setId(e.target.value)}
                    type="text"
                />
            </div>
           
            <div className={styles.input_wrap}>
                <span>비밀번호</span>
                <Input 
                    value={pw} 
                    onChange={(e) => setPw(e.target.value)}
                    type="password"
                />
            </div>
            <Button onClick={submit}>로그인</Button>
        </div>
    );
};

export default LoginForm;