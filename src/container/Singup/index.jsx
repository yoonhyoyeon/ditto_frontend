import Link from 'next/link';
import styles from './index.module.css';
import SignupForm from '@/component/SignupForm';

const Signup = () => {
    return (
        <div className={styles.container}>
            <Link href="/"><img className={styles.logo} alt="logo" src="/images/logo.svg"/></Link>
            <div className={styles.contents}>
                <h1>회원가입</h1>
                <SignupForm />
            </div>
        </div>
    );
};

export default Signup;