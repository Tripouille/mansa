import { Avatar, HStack, Text } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { useUserQuery } from 'services/user';
import UserInformationsSkeleton from './UserInformationsSkeleton';

const UserInformations = () => {
  const { data: user, isFetching, isError, isSuccess } = useUserQuery();

  if (isFetching) {
    return <UserInformationsSkeleton />;
  }

  if (isError) {
    return (
      <HStack align="center" spacing={3} py={3} data-cy="user-informations">
        <Text>Unavailable user informations</Text>
      </HStack>
    );
  }

  if (isSuccess) {
    const { first: firstname, last: lastname } = user.name;
    const fullName = `${lastname.toUpperCase()} ${firstname}`;

    return (
      <HStack align="center" spacing={3} data-cy="user-informations">
        <Avatar name={fullName} bgColor="primary" />
        <Heading as="h1" fontWeight="semibold">
          {fullName}
        </Heading>
      </HStack>
    );
  }
  return null;
};

export default UserInformations;
