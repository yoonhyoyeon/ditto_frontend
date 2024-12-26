"use client";
import styles from './index.module.css';
import Table from '@/component/Table';
import Button from '@/component/Button';
import { students } from '@/constants';

const CourseDetailStudentList = ({course_name}) => {
    const test_temp_titles = ['이름', '수험번호', '비밀번호', '생년월일'];
    const test_temp_data = students;
    const test_temp_flex=[1,1,1,1];
    return (
        <div className={styles.container}>
            <h2 className={styles.title_row}>{course_name}</h2>
            <div className={styles.row}>
                <div className={styles.right}>
                    <div className={styles.title_wrap}>
                        <span className={styles.title}>수강생 목록 <span className={styles.subtxt}>총 40명</span></span>
                        <div className={styles.btn_wrap}>
                            <Button>수강생 업로드</Button>
                        </div>
                    </div>
                </div>
                <Table flex={test_temp_flex} data={test_temp_data} titles={test_temp_titles} />
            </div>
        </div>
    );
};

export default CourseDetailStudentList;