import Link from 'next/link';
import styles from './index.module.css';
import { deleteCourse } from '@/service';
import { useRouter } from 'next/navigation';

const CourseItem = ({id, name}) => {
    const router = useRouter();

    const deleteItem = async() => {
        if(confirm("정말 삭제 하시겠습니까?")) {
            if(await deleteCourse(id)) {
                location.reload(true);
            }
        }
    }
    return (
        <div className={styles.item}>
            <Link href={`/service/courses/detail/${id}/home`}>
                <div className={styles.left}>
                    <div className={styles.icon_wrap}>
                        <img src="/images/icon_book.svg" />
                    </div>
                    <span className={styles.name}>{name}</span>
                </div>
            </Link>
            <div className={styles.right}>
                <img src="/images/icon_edit.svg" />
                <img onClick={deleteItem} src="/images/icon_trash.svg" />
            </div>
        </div>
    )
}

export default CourseItem;