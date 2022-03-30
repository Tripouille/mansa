import { FC } from 'react';
import { Avatar, HStack, Skeleton, SkeletonCircle } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { useUserQuery } from 'services/user';

const UserInformations: FC = () => {
  const { data: user, isFetching, isError, isSuccess } = useUserQuery();

  if (isFetching) {
    return (
      <HStack align="center" spacing={3} padding={3} data-cy="user-informations">
        <SkeletonCircle size="50px" flexShrink={0} />
        <Skeleton w="350px" h="40px" />
      </HStack>
    );
  }

  if (isError) {
    return (
      <HStack align="center" spacing={3} padding={3} data-cy="user-informations">
        <Heading as="h1" fontWeight="semibold">
          Unaivalable user informations
        </Heading>
      </HStack>
    );
  }

  if (isSuccess) {
    const { first: firstname, last: lastname } = user.name;

    return (
      <HStack align="center" spacing={3} padding={3} data-cy="user-informations">
        <Avatar name={`${lastname} ${firstname}`} bgColor="primary" />
        <Heading as="h1" fontWeight="semibold">
          {lastname.toUpperCase()} {firstname}
        </Heading>
      </HStack>
    );
  }
  return null;
};

export default UserInformations;
