import Header from '@/components/Header';
import UserInformations from '@/components/UserInformations';
import type { NextPage } from 'next';
import { chakra, Box, VStack } from '@chakra-ui/react';
import CompanyInformations from '@/components/CompanyInformations';
import Accounts from '@/components/Accounts';

const Home: NextPage = () => {
  return (
    <Box bgColor="gray.100" minH="100vh">
      <Header />
      <chakra.main px={[5, 20]} py={10}>
        <VStack align="left" spacing={10}>
          <UserInformations />
          <CompanyInformations />
          <Accounts />
        </VStack>
      </chakra.main>
    </Box>
  );
};

export default Home;
