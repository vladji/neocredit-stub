import { FC, ReactNode } from 'react';
import { Header } from '../Header';

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <section className="section">
        <div className="container">
          {children}
        </div>
      </section>
    </>
  );
};
