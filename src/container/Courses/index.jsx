"use client";
import styles from './index.module.css';
import Button from '@/component/Button';
import Popup from '@/component/Popup';
import { useEffect, useState } from 'react';
import CourseItem from '@/component/CourseItem';
import Input from '@/component/Input';
import { createCourse, getCourses } from '@/service';
import { useRouter } from 'next/navigation';

const Courses = ({courses}) => {
    const [opened, setOpened] = useState(false);
    const [name, setName] = useState('');
    const [student, setStudent] = useState('');
    const [checked, setChecked] = useState(false);

    const router = useRouter();

    const submit = async() => {
        if(await createCourse(name)) {
            location.reload(true);
        }   
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.title}>과목 목록</span>
                    <div className={styles.btn_wrap}>
                        <Button onClick={() => { setOpened(true); console.log('?')}}><img src="/images/icon_plus.svg"/> 과목 생성하기</Button>
                    </div>
                </div>
                <div className={styles.course_list}>
                    {courses.map((v,i) => (
                        <CourseItem name={v.subjectName} key={v._id} id={v._id} />
                    ))}
                </div>
            </div>
            <Popup opened={opened} setOpened={setOpened}>
                <div className={styles.popup_contents}>
                    <h1 className={styles.title}>과목 생성</h1>
                    <div className={styles.form}>
                        <div className={styles.input_wrap}>
                            <div className={styles.txt}>과목 이름</div>
                            <Input
                                value={name}
                                onChange={(e) => setName(e.target.value)} 
                            />
                        </div>
                        <div className={styles.input_wrap}>
                            <div className={styles.txt}>수강생 목록</div>
                            <div className={styles.file_wrap}>
                                <Input 
                                    value={student}
                                    onChange={(e) => setStudent(e.target.value)}
                                    type="file"
                                />
                                <div className={styles.sub_txt}>* .csv 파일을 업로드하세요</div>
                            </div>
                        </div>
                        <div className={styles.checkbox_wrap}>
                            <Input 
                                value={checked}
                                onChange={(e) => setChecked(e.target.value)}
                                type="checkbox"
                                id="checkbox"
                            />
                            <label htmlFor="checkbox">나중에 업로드하기</label>
                        </div>
                        <Button onClick={submit}>과목 생성하기</Button>
                    </div>
                </div>
            </Popup>
        </>
    );
};

export default Courses;