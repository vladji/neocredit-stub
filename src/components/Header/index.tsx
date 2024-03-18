import { LogoIcon } from '../../icons/LogoIcon';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logoWrapper}>
          <a href="/">
            <LogoIcon />
          </a>
        </div>
        <div className={styles.callCenter}>
          <div className={styles.titleWrapper}>
            <img className={styles.image} src="/images/whatsapp-logo.png" alt="WhatsApp" />
            <span>Только сообщения WhatsApp</span>
          </div>
          <div className={styles.phoneWrapper}>
            <img className={`${styles.image} mobileDisplay`} src="/images/whatsapp-logo.png" alt="WhatsApp" />
            <a href="tel:++77017576387">
                <span className={styles.value}>
                <span className={styles.mark}>+7 701 </span>
                757 63 87
                </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
