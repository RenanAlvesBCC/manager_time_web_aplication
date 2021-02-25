import styles from '../styles/components/pages/Profile.module.css';
import {useContext} from "react";
import {ChallengesContext} from "../contexts/ChallengesContext";

export function Profile() {


    const{ level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/RenanAlvesBCC.png" alt="Renan Alves"/>
            <div>
                <strong>Renan Alves</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    )

}
