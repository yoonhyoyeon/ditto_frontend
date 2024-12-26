"use client";
import styles from './index.module.css';
import Button from '@/component/Button';
import { useState } from 'react';
import Popup from '@/component/Popup';
import Input from '@/component/Input';
import Table from '@/component/Table';
import { createTest } from '@/service';

const Tests = ({tests}) => {
    const [opened, setOpened] = useState(false);
    const [subject_name, setSubject_name] = useState('');
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time_start, setTime_start] = useState('12:00');
    const [time_end, setTime_end] = useState('13:00');
    const [OCR, setOCR] = useState(null);


    const submit = async () => {
        if(await createTest(subject_name, name, time_start, time_end, date, OCR===1)) {
            location.reload(true);
        }
    }
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
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.title}>시험 목록</span>
                    <div className={styles.btn_wrap}>
                        <Button onClick={() => { setOpened(true); console.log('?')}}><img src="/images/icon_plus.svg"/> 시험 생성하기</Button>
                    </div>
                </div>
                <Table isLinked={true} data={data} flex={flex} titles={titles} />
                
            </div>
            <Popup opened={opened} setOpened={setOpened}>
                <div className={styles.popup_contents}>
                    <h1 className={styles.title}>시험 생성</h1>
                    <div className={styles.form}>
                        <div className={styles.input_wrap}>
                            <div className={styles.txt}>과목 이름</div>
                            <Input
                                value={subject_name}
                                onChange={(e) => setSubject_name(e.target.value)} 
                            />
                        </div>
                        <div className={styles.input_wrap}>
                            <div className={styles.txt}>시험 제목</div>
                            <Input
                                value={name}
                                onChange={(e) => setName(e.target.value)} 
                            />
                        </div>
                        <div className={styles.input_wrap}>
                            <div className={styles.txt}>시험 날짜</div>
                            <Input
                                value={date}
                                onChange={(e) => setDate(e.target.value)} 
                                type="date"
                            />
                        </div>
                        <div className={styles.input_wrap}>
                            <div className={styles.txt}>시험 시작 시간</div>
                            <Input
                                value={time_start}
                                onChange={(e) => setTime_start(e.target.value)}
                                type="time" 
                            />
                        </div>
                        <div className={styles.input_wrap}>
                            <div className={styles.txt}>시험 종료 시간</div>
                            <Input
                                value={time_end}
                                onChange={(e) => setTime_end(e.target.value)}
                                type="time" 
                            />
                        </div>
                        <div className={styles.input_wrap}>
                            <div className={styles.txt}>OCR 인증 여부</div>
                            <div className={styles.checkbox_wrap}>
                                <div onClick={() => setOCR(1)} className={styles.checkbox} style={OCR===1 ? { backgroundColor: 'var(--color-blue-0)' } : null}></div>
                                <span className={styles.txt}>인증함</span>
                                <div onClick={() => setOCR(2)} className={styles.checkbox} style={OCR===2 ? { backgroundColor: 'var(--color-blue-0)' } : null}></div>
                                <span className={styles.txt}>인증하지 않음</span>
                            </div>
                        </div>
                        <Button onClick={submit}>과목 생성하기</Button>
                    </div>
                </div>
            </Popup>
        </>
    );
};

export default Tests;