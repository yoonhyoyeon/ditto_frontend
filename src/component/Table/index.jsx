import Link from 'next/link';
import styles from './index.module.css';
import TableRow from './TableRow';

const Table = ({flex, titles, data, isLinked}) => {
    return (
        <div className={styles.container}>
            <div className={styles.titles}>
                <TableRow data={titles} flex={flex} />
            </div>
            <div className={styles.contents}>
                { data.map((v, i) => (
                    <Link key={i} href={isLinked ? `/service/test/${v[v.length - 1]}` : ''}>
                        <TableRow data={v} flex={flex} />
                    </Link>
                    
                ))}
            </div>
        </div>
    )
}

export default Table;