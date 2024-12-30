"use client";
import Link from 'next/link';
import styles from './index.module.css';
import { useParams, usePathname } from 'next/navigation';
import { deleteCookie, getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { getUserName, getCourse } from '@/service';
import { useEffect, useState } from 'react';

const Navigation = () => {
    const path = usePathname();
    const params = useParams();
    const router = useRouter();
    const [ username, setUsername ] = useState('');
    const [ course_name, setCourse_name] = useState('hi');
    console.log(path.startsWith('/service/courses/detail'));

    const saveUsername = async() => {
        setUsername(await getUserName(getCookie('id')));
    }
    useEffect(() => {
        saveUsername();
    }, []);

    const saveCourseName = async() => {
        const data = await getCourse(params.id);
        setCourse_name(data.subjectName);
    }
    useEffect(() => {
        if(params.id!==undefined) saveCourseName();
    }, [params])

    const hidden_nav = {
        transform: 'translateX(-300px)'
    }
    const show_nav_detail = {
        left: '16px'
    }
    const logout = () => {
        deleteCookie('id');
        router.push('/');
    }
    
    return (
        <>
             <div className={styles.container}>
                <Link href="/service/courses">
                    <img className={styles.logo} alt="logo" src="/images/logo.svg"/>
                </Link>
                <div className={styles.nav_wrap} style={(path.startsWith('/service/courses/detail')) ? hidden_nav : null}>
                    <Link href="/service/courses">
                        <div className={`${styles.item} ${path==='/service/courses' ? styles.active : null}`}>
                            <img src="/images/icon_book.svg"/>
                            <span>과목 목록</span>
                        </div>
                    </Link>
                    <Link href="/service/tests">
                        <div className={`${styles.item} ${path==='/service/tests' ? styles.active : null}`}>
                            <img src="/images/icon_hat2.svg"/>
                            <span>시험 목록</span>
                        </div>
                    </Link>
                </div>
                <div className={`${styles.nav_wrap} ${styles.detail_nav_wrap}`} style={(path.startsWith('/service/courses/detail')) ? show_nav_detail : null}>
                    <div className={styles.top}>
                        <Link href="/service/courses"><img src="/images/icon_back.png" /></Link>
                        <span>{course_name}</span>
                    </div>
                    <Link href={`/service/courses/detail/${params.id}/home`}>
                        <div className={`${styles.item} ${path.endsWith('/home') ? styles.active : null}`}>
                            <img src="/images/icon_home.svg"/>
                            <span>홈</span>
                        </div>
                    </Link>
                    <Link href={`/service/courses/detail/${params.id}/studentlist`}>
                        <div className={`${styles.item} ${path.endsWith('/studentlist') ? styles.active : null}`}>
                            <img src="/images/icon_book.svg"/>
                            <span>수강생 목록</span>
                        </div>
                    </Link>
                    <Link href={`/service/courses/detail/${params.id}/testlist`}>
                        <div className={`${styles.item} ${path.endsWith('/testlist') ? styles.active : null}`}>
                            <img src="/images/icon_hat2.svg"/>
                            <span>시험 목록</span>
                        </div>
                    </Link>
                </div>
                <div className={styles.footer}>
                    <span onClick={logout}><img src="/images/icon_logout.svg"/> 로그아웃</span>
                </div>
            </div>
            <div className={styles.navbar}>
                <span className={styles.name}>{username}</span>
            </div>
        </>
    );
}

export default Navigation;