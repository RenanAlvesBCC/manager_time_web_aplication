import styles from '../styles/components/pages/Profile.module.css';

export function Profile() {


    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/RenanAlvesBCC.png" alt="Renan Alves"/>
            <div>
                <strong>Renan Alves</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div> 
        </div>
    )

}