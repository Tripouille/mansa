import Header from '@/components/Header';
import UserInformations from '@/components/UserInformations';
import type { NextPage } from 'next';
import { chakra, Box } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Box bgColor="gray.100" h="100vh">
      <Header />
      <chakra.main px={[5, 20]} py={5}>
        <UserInformations />
      </chakra.main>
    </Box>
  );
};

export default Home;
