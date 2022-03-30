import { Skeleton, VStack } from '@chakra-ui/react';

const CompanyInformationsSkeleton = () => {
  return (
    <div data-cy="company-informations">
      <Skeleton w="100px" h="40px" mb={5} />
      <VStack spacing={1} align="left">
        <Skeleton w="200px" h="20px" />
        <Skeleton w="220px" h="20px" />
        <Skeleton w="300px" h="20px" />
      </VStack>
    </div>
  );
};

export default CompanyInformationsSkeleton;
