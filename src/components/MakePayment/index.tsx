import { CardBlank } from '../UI/CardBlank';
import { MainButton } from '../UI/MainButton';

export const MakePayment = () => {
  const makePayment = async () => {
    document.location.href = 'https://customer.freedompay.money/links?slug=H4hK2'
  };

  return (
    <CardBlank>
      <MainButton text="Внести оплату" handler={makePayment} />
    </CardBlank>
  );
};
