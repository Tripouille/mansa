import { Grid, Heading, Text } from '@chakra-ui/react';
import { useAccountsQuery } from 'services/account';
import AccountInformations from './AccountInformations';
import AccountsSkeleton from './AccountsSkeleton';

const Accounts = () => {
  const { data: accounts, isFetching, isError, isSuccess } = useAccountsQuery();

  if (isFetching) return <AccountsSkeleton />;

  if (isError) {
    return <Text data-cy="accounts">Unavailable accounts</Text>;
  }

  if (isSuccess) {
    return (
      <article data-cy="accounts">
        <Heading mb={5} size="md">
          Accounts
        </Heading>
        {accounts.length === 0 && <Text>No available accounts</Text>}
        <Grid templateColumns={['1fr', null, 'repeat(2, 1fr)']} gap={6}>
          {accounts.map(account => (
            <AccountInformations key={account.account_number} account={account} />
          ))}
        </Grid>
      </article>
    );
  }
  return null;
};

export default Accounts;
