import styles from './index.module.css';

const Input = ({value, onChange, placeholder, type, id, children}) => {
    return (
        <input 
            id={id}
            type={type}
            placeholder={placeholder}
            className={styles.input}
            value={value}
            onChange={onChange}
        >
                {children}
        </input>
    )
}

export default Input;