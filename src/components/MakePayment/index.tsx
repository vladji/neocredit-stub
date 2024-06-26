import { CardBlank } from '../UI/CardBlank';
import { MainButton } from '../UI/MainButton';

export const MakePayment = () => {
  // const [showModal, setShowModal] = useState<boolean>(false);

  const makePayment = async () => {
    document.location.href = 'https://customer.freedompay.kz/links?slug=H4hK2';
  };

  return (
    <>
      <CardBlank>
        <MainButton text="Внести оплату" handler={makePayment} />
      </CardBlank>
      {/*<Modal visible={showModal} onClose={() => setShowModal(false)}>*/}
      {/*  <div className={styles.modalWrapper}>*/}
      {/*    <p>Вы будете перенаправлены на страницу оплаты.<br /> В поле <b>"Номер заказа"</b> введите <b>свой ИИН</b></p>*/}
      {/*    <MainButton text="Оплатить" handler={makePayment} />*/}
      {/*  </div>*/}
      {/*</Modal>*/}
    </>
  );
};
