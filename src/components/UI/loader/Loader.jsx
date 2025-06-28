import React from "react";
import styles from './Loader.module.css';

const Loader = () => {
    return (
        <div className={styles.loaderContainer} role="status" aria-label="Загрузка">
            <div className={styles.spinner}></div>
        </div>
    );
}

export default Loader;
