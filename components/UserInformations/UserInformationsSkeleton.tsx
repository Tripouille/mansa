import { HStack, Skeleton, SkeletonCircle } from '@chakra-ui/react';

const UserInformationsSkeleton = () => {
  return (
    <HStack align="center" spacing={3} py={3} data-cy="user-informations">
      <SkeletonCircle size="50px" flexShrink={0} />
      <Skeleton w="350px" h="40px" />
    </HStack>
  );
};

export default UserInformationsSkeleton;
