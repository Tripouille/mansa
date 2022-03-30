import { FC } from 'react';
import { Avatar, HStack, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

export interface UserInformationsProps {
  firstname: string;
  lastname: string;
  isLoading: boolean;
}

const UserInformations: FC<UserInformationsProps> = ({ firstname, lastname, isLoading }) => {
  if (isLoading) {
    return (
      <HStack align="center" spacing={3} padding={3}>
        <SkeletonCircle size="50px" flexShrink={0} />
        <Skeleton w="350px" h="40px" />
      </HStack>
    );
  }

  return (
    <HStack align="center" spacing={3} padding={3}>
      <Avatar name={`${lastname} ${firstname}`} bgColor="primary" />
      <Heading as="h1" fontWeight="semibold">
        {lastname.toUpperCase()} {firstname}
      </Heading>
    </HStack>
  );
};

export default UserInformations;
