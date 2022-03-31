import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Account } from 'services/account/types';

export interface AccountInformationsProps {
  account: Account;
}

const AccountInformations: FC<AccountInformationsProps> = ({ account }) => {
  const { account_number, available, currency } = account;

  return (
    <Box
      py={5}
      px={4}
      color="primary"
      borderColor="primary"
      borderWidth={1}
      borderRadius="lg"
      bgColor="primaryBackground"
    >
      <Flex justify="space-between" fontWeight="semibold">
        <Text mr={1}>Account Number:</Text>
        <Text>{account_number}</Text>
      </Flex>
      <Flex justify="space-between" mt={1}>
        <Text mr={1}>Balance:</Text>
        <Text>
          {available} {currency}
        </Text>
      </Flex>
    </Box>
  );
};

export default AccountInformations;
