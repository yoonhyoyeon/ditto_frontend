import styles from './index.module.css';

const TableRow = ({flex, data}) => {
    console.log(data);
    return (
        <div className={styles.TableRow} style={data[data.length-2]==="완료" ? { backgroundColor: 'var(--color-blue-0-opcaity-20)'} : null}>
            {data.map((v, i) => (
                <div key={i} style={v==="미완료" ? {flex: flex[i], color: 'rgba(244, 59, 74, 1)'} : {flex: flex[i]}} className={styles.item}>{v}</div>
            ))}
        </div>
    )
}

export default TableRow;