import UserInformations from '@/components/UserInformations';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <UserInformations firstname="Rémy" lastname="Tinco" isLoading />
    </div>
  );
};

export default Home;
