"use client";
import Button from '../Button';
import styles from './index.module.css';
import { useEffect, useState } from 'react';

const TestNavigation = () => {
    const [mm,setMM] = useState(30);
    const [ss,setSS] = useState(0);
    const temp_students = [
        {
            name: '이름',
            num: '1',
            count: 0
        },
        {
            name: '이름',
            num: '2',
            count: 8
        },
        {
            name: '이름',
            num: '3',
            count: 0
        },
        {
            name: '이름',
            num: '4',
            count: 0
        },
        {
            name: '이름',
            num: '5',
            count: 16
        },
        {
            name: '이름',
            num: '6',
            count: 0
        },
        {
            name: '이름',
            num: '7',
            count: 0
        },
        {
            name: '이름',
            num: '8',
            count: 0
        },
        {
            name: '이름',
            num: '9',
            count: 0
        },
        {
            name: '이름',
            num: '10',
            count: 0
        },
        {
            name: '이름',
            num: '11',
            count: 0
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            if(ss<=0) {
                setSS(60);
                setMM((prev) => prev-1);
            }
            setSS((prev) => prev-1);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [ss])
    return (
        <div className={styles.container}>
            <div className={styles.row1}>
                <img src="/images/logo_white.png" />
                <span className={styles.code}>2ZKY370P</span>
            </div>
            <div className={styles.row2}>
                <img src="/images/icon_back.png" />
                <span className={styles.test_name}>시험 이름</span>
            </div>
            <div className={styles.row3}>
                <span className={styles.subtxt}>남은 시간</span>
                <span className={styles.time}>{`${String(mm).padStart(2, "0")} : ${String(ss).padStart(2, "0")}`}</span>
            </div>
            <div className={styles.student_list}>
                <div className={styles.title}>총 40명</div>
                {
                    temp_students.toSorted((a, b) => b.count - a.count).map((v, i) => (
                        <div className={styles.item} key={i}>
                            <span className={styles.name}>{v.num}. {v.name}</span>
                            <span className={styles.count}>
                                <img src="/images/icon_warn.png"/>
                                <span>{v.count}</span>
                            </span>
                        </div>
                    ))
                }
            </div>
            <div className={styles.row4}>
                <Button>시험 종료하기</Button>
            </div>
        </div>
    );
}

export default TestNavigation;