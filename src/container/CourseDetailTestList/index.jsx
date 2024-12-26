"use client";
import Link from 'next/link';
import styles from './index.module.css';
import Table from '@/component/Table';
import Button from '@/component/Button';

const CourseDetailStudentList = ({tests, course_name}) => {
    const titles = ['시험 이름', '과목 이름', '시험 날짜', '시험 시간', 'OCR인증 여부', '완료', '시험코드'];
    const flex = [2, 1, 1, 1, 1, 1, 1];
    const data = tests.map((v) => {
        var start = new Date(v.startTime);
        var end = new Date(v.endTime);
        var year = start.getFullYear();
        var month = ('0' + (start.getMonth() + 1)).slice(-2);
        var day = ('0' + start.getDate()).slice(-2);

        var start_hours = ('0' + start.getHours()).slice(-2); 
        var start_minutes = ('0' + start.getMinutes()).slice(-2);
        var start_seconds = ('0' + start.getSeconds()).slice(-2); 

        var end_hours = ('0' + start.getHours()).slice(-2); 
        var end_minutes = ('0' + start.getMinutes()).slice(-2);
        var end_seconds = ('0' + start.getSeconds()).slice(-2); 

        var dateString = year + '-' + month  + '-' + day;
        var start_timeString = start_hours + ':' + start_minutes;
        var end_timeString = end_hours + ':' + end_minutes;


        return [v.examName, v.subject, dateString, start_timeString+' - '+end_timeString, v.OCR?'OCR 인증':'OCR 비인증', v.complete?'완료':'미완료', v.roomId];
    });
    return (
        <div className={styles.container}>
            <h2 className={styles.title_row}>{course_name}</h2>
            <div className={styles.row}>
                <div className={styles.right}>
                    <div className={styles.title_wrap}>
                        <span className={styles.title}>시험 목록</span>
                        <div className={styles.btn_wrap}>
                            <Button>시험 생성하기</Button>
                        </div>
                    </div>
                </div>
                <Table isLinked={true} flex={flex} data={data} titles={titles} />
            </div>
        </div>
    );
};

export default CourseDetailStudentList;