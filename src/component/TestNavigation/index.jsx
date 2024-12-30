"use client";
import Link from 'next/link';
import Button from '../Button';
import styles from './index.module.css';
import { useEffect, useState } from 'react';

const TestNavigation = ({completeTest}) => {
    const [mm,setMM] = useState(30);
    const [ss,setSS] = useState(0);
    const [a, setA] =useState();
    const [b, setB] = useState();
    const [count, setCount] = useState([0,0,0]);
    const [warn1, setWarn1] = useState(false);
    const [warn2, setWarn2] = useState(false);
    const [warn3, setWarn3] = useState(false);
    const temp_students = [
        {
            name: '김도완',
            num: '1',
            count: 0
        },
        {
            name: '윤효연',
            num: '2',
            count: 0
        },
        {
            name: '이예람',
            num: '3',
            count: 0
        }
    ]

    useEffect(() => {
        const interval2 = setInterval(() => {
            const c = Math.floor(Math.random() * 14);
            const a = Math.floor(Math.random() * 16);
            const b = Math.floor(Math.random() * 18);
            if(a===0) setCount((prev) => {
                const newdata = [prev[0]+1, prev[1], prev[2]];
                return newdata;
            });
            if(b===0) setCount((prev) => {
                const newdata = [prev[0], prev[1]+1, prev[2]];
                return newdata;
            });
            if(c===0) setCount((prev) => {
                const newdata = [prev[0], prev[1], prev[2]+1];
                return newdata;
            });
            const d = Math.floor(Math.random() * 14);
            const e = Math.floor(Math.random() * 16);
            const f = Math.floor(Math.random() * 18);
            if(d===0) {
                setWarn1(true);
                setTimeout(() => {
                    setWarn1(false);
                }, 200)
            }
            if(e===0) {
                setWarn2(true);
                setTimeout(() => {
                    setWarn2(false);
                }, 200)
            }
            if(f===0) {
                setWarn3(true);
                setTimeout(() => {
                    setWarn3(false);
                }, 200)
            }
        }, 170)
        const interval = setInterval(() => {
            if(ss<=0) {
                setSS(60);
                setMM((prev) => prev-1);
            }
            setSS((prev) => prev-1);
        }, 1000);
        setA(interval);
        setB(interval2);

        return () => {
            clearInterval(interval);
            clearInterval(interval2);
        }
    }, [ss]);

    const warn = [warn1, warn2, warn3]

    const hi = () => {
        completeTest(); 
        clearInterval(a); 
        clearInterval(b);
    }
    return (
        <div className={styles.container}>
            <div className={styles.row1}>
                <Link href="/service/courses"><img src="/images/logo_white.png" /></Link>
                <span className={styles.code}>2ZKY370P</span>
            </div>
            <div className={styles.row2}>
                <span className={styles.test_name}>시험 이름</span>
            </div>
            <div className={styles.row3}>
                <span className={styles.subtxt}>남은 시간</span>
                <span className={styles.time}>{`${String(mm).padStart(2, "0")} : ${String(ss).padStart(2, "0")}`}</span>
            </div>
            <div className={styles.student_list}>
                <div className={styles.title}>총 3명</div>
                {
                    temp_students.toSorted((a, b) => b.count - a.count).map((v, i) => (
                        <div className={`${styles.item} ${warn[i] ? styles.active : null}`} key={i}>
                            <span className={styles.name}>{v.num}. {v.name}</span>
                            <span className={styles.count}>
                                <img src="/images/icon_warn.png"/>
                            </span>
                        </div>
                    ))
                }
            </div>
            <div className={styles.row4}>
                <Button onClick={hi}>시험 종료하기</Button>
            </div>
        </div>
    );
}

export default TestNavigation;