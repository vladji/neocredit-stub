import { EmailIcon } from '../../icons/EmailIcon';
import { VisaIcon } from '../../icons/VisaIcon';
import { MastercardIcon } from '../../icons/MastercardIcon';
import { MainButton } from '../UI/MainButton';
import styles from './styles.module.scss';
import { useState } from 'react';
import { Documents } from './Documents';

export const Footer = () => {
  const [showDocuments, setShowDocuments] = useState(false);

  const showDocumentsHandler = () => {
    setShowDocuments((prev) => !prev);
  };

  return (
    <footer className={`section ${styles.footer}`}>
      <div className={`container ${styles.container}`}>
        <div className={`${styles.block} ${styles.topBlock}`}>
          <div>
            <div className={styles.contacts}>
              <div className={`${styles.row}`}>
                <img className={styles.image} src="/images/whatsapp-logo.png" alt="WhatsApp" />
                <a href="tel:+77017576387">+7 701 757 63 87</a>
              </div>
              <div className={`${styles.row}`}>
                <EmailIcon />
                <a href="mailto:info@neocredit.kz">info@neocredit.kz</a>
              </div>
            </div>
            <div className={styles.cardsContainer}>
              <VisaIcon />
              <MastercardIcon />
            </div>
          </div>
          <div className={`desktopDisplay ${styles.license}`}>
            Номер лицензии ТОО “Legal Money” 05.22.0002.М. от 15.11.2022 года
          </div>
        </div>
        <div className={`${styles.block} ${styles.bottomBlock}`}>
          <MainButton
            className={styles.footerButton}
            text="Документы"
            handler={showDocumentsHandler}
          />
          <div className={styles.info}>
            <p className={styles.text}>
              ТОО «Микрофинансовая организация «LEGAL MONEY»
            </p>
            <p className={styles.text}>
              г. Алматы, 050057ул. Толе би, 101БЦ &quot;Толе би&quot;, 3 этаж,
              блок D
            </p>
            <p className={styles.text}>
              БИН: 220440007472ОКЭД: 64929Р/сч: KZ55601A861010717701АО
              &quot;Народный Банк Казахстана&quot; Кбе 15
            </p>
            <p className={styles.text}>БИК: HSBKKZKX</p>
          </div>
          <div className={`mobileDisplay ${styles.license}`}>
            Номер лицензии ТОО “Legal Money” 05.22.0002.М. от 15.11.2022 года
          </div>
        </div>
      </div>
      <Documents visible={showDocuments} onClose={showDocumentsHandler} />
    </footer>
  );
};
