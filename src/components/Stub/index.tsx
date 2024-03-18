import styles from './styles.module.scss';
import { CardBlank } from '../UI/CardBlank';
import { MakePayment } from '../MakePayment';

export const Stub = () => {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.containerInner}>
          <CardBlank className={styles.infoCard}>
            <h3>Уважаемые пользователи</h3>
            <p>В связи с техническими работами, в определенный период времени возможны
              некоторые временные ограничения в
              доступе к функциям сайта.
              Благодарим за ваше понимание и терпение.
            </p>
            <div className={styles.phoneWrapper}>
              <div className={styles.phoneInner}>
                <img className={styles.image} src="/images/whatsapp-logo.png" alt="WatsApp" />
                <a className={styles.cardLink} href="tel:++770175763877">+7 701 757 63 87</a>
              </div>
              <span>Только сообщения WatsApp</span>
            </div>
          </CardBlank>
          <MakePayment />
        </div>
      </div>
    </section>
  );
};
