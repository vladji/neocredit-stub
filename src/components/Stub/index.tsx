import styles from './styles.module.scss';

export const Stub = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <h1 className={styles.title}>
          Технические работы
        </h1>
        <p>
          На данный момент наш сайт находится на техническом обслуживании для улучшения качества предоставляемых услуг.
          Приносим извинения за временные неудобства.
        </p>
        <a className={styles.phone} href="tel:+77089128007">
          +7 708 912-80-07
        </a>
      </div>
      <div className={styles.imageWrapper}>
        <img src="./stub-image.png" alt="image" />
      </div>
    </div>
  );
};
