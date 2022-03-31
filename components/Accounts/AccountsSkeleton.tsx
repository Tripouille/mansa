import { Grid, Skeleton } from '@chakra-ui/react';

const AccountsSkeleton = () => {
  return (
    <div data-cy="accounts">
      <Skeleton w="100px" h="40px" mb={5} />
      <Grid templateColumns={['1fr', null, 'repeat(2, 1fr)']} gap={6}>
        {[1, 2, 3, 4].map(index => (
          <Skeleton key={index} h={100} />
        ))}
      </Grid>
    </div>
  );
};

export default AccountsSkeleton;
