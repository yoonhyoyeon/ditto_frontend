"use client";
import Input from '@/component/Input';
import Button from '@/component/Button';
import styles from './index.module.css';
import { useState } from 'react';
import { signup } from '@/service';
import { useRouter } from 'next/navigation';

const SignupForm = () => {
    const [ checked, setChecked ] = useState(false);
    const [ name, setName ] = useState('');
    const [ id, setId ] = useState('');
    const [ pw, setPw ] = useState('');
    const [ re_pw, setRe_pw ] = useState('');
    const router = useRouter();
    const submit = async() => {
        console.log(name, id, pw)
        if(await signup(name, id, pw)) {
            router.push('/');
        }

    }
    return (
        <div className={styles.container}>
            <div className={styles.checkbox_wrap}>
                <label htmlFor="checked">교수자이신가요?</label>
                <Input
                    value={checked}
                    onChange={(e) => setChecked(e.target.value)}
                    type="checkbox"
                    id="checked"
                />
            </div>
            <div className={styles.input_wrap}>
                <span>이름</span>
                <Input 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                />
            </div>
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
            <div className={styles.input_wrap}>
                <span>비밀번호 확인</span>
                <Input 
                    value={re_pw} 
                    onChange={(e) => setRe_pw(e.target.value)}
                    type="password"
                />
            </div>
            <Button onClick={submit}>회원가입</Button>
        </div>
    );
};

export default SignupForm;