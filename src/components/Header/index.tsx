import { LogoIcon } from '../../icons/LogoIcon';
import styles from './styles.module.scss';
import cn from 'classnames';

export const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logoWrapper}>
          <a href="/">
            <LogoIcon />
          </a>
        </div>
        <div className={styles.contacts}>
          <div className={styles.callBlock}>
            <div className={styles.titleWrapper}>
              <span>Call center</span>
            </div>
            <div className={styles.phoneWrapper}>
              <img className={styles.image} src="/images/phone-icon.svg" alt="call" />
              <a href="tel:+77089128007">
                <span className={styles.value}>
                <span className={styles.mark}>+7 708 </span>
                912 80 07
                </span>
              </a>
            </div>
          </div>
          <div className={cn(styles.callBlock, 'desktopDisplay')}>
            <div className={styles.titleWrapper}>
              <span>WhatsApp</span>
            </div>
            <div className={styles.phoneWrapper}>
              <img className={styles.image} src="/images/whatsapp-logo.png" alt="whatsapp" />
              <a href="https://wa.me/77017576387">
                <span className={styles.value}>
                <span className={styles.mark}>+7 701 </span>
                757 63 87
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
