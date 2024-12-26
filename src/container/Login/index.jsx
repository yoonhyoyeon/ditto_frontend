import styles from './index.module.css';
import LoginForm from '@/component/LoginForm';
import Link from 'next/link';

const Login = () => {
    
    return (
    <div className={styles.container}>
        <div className={styles.left_area}>
            <Link href="/"><img className={styles.logo} alt="logo" src="/images/logo.svg"/></Link>
            <div className={styles.contents}>
                <h1>디토를 시작하세요</h1>
                <p>로그인 해주세요.</p>
                <LoginForm />
                <div className={styles.subtxt_wrap}>
                    <span>계정이 없으신가요? <Link href="/signup">회원가입</Link></span>
                </div>
            </div>
            
        </div>
        <div className={styles.right_area}>
            <img src="/images/ditto_styled.png" />
        </div>
    </div>
    );
};

export default Login;