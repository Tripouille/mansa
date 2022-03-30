import Header from '@/components/Header';
import UserInformations from '@/components/UserInformations';
import type { NextPage } from 'next';
import { chakra, Box, VStack } from '@chakra-ui/react';
import CompanyInformations from '@/components/CompanyInformations';

const Home: NextPage = () => {
  return (
    <Box bgColor="gray.100" h="100vh">
      <Header />
      <chakra.main px={[5, 20]} py={5}>
        <VStack align='left' spacing={10}>
            <UserInformations />
            <CompanyInformations />
        </VStack>
      </chakra.main>
    </Box>
  );
};

export default Home;
