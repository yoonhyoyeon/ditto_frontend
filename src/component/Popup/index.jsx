import styles from './index.module.css';

const Popup = ({opened, setOpened, children}) => {
    const closePopup = () => setOpened(false);

    return (
        <div className={styles.container} style={opened ? {display: 'flex'} : null}>
            <div className={styles.background} onClick={closePopup} ></div>
            <div className={styles.popup}>
                <span className={styles.close_btn} onClick={closePopup}>취소</span>
                {children}
            </div>
        </div>
    )
}

export default Popup;