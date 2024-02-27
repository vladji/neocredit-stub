import { LogoIcon } from '../../icons/LogoIcon';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.left}>
          <a href="/">
            <LogoIcon />
          </a>
          <div className={styles.callCenter}>
            <span className={styles.title}>Call center:</span>
            <span className={styles.value}>
                <span className={styles.mark}>+7 700 </span>
                750 15 00
              </span>
          </div>
        </div>
      </div>
    </header>
  );
};
