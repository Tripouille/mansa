import { Heading, VStack, Text } from '@chakra-ui/react';
import { useCompanyQuery } from 'services/company';
import CompanyInformationsSkeleton from './CompanyInformationsSkeleton';

const CompanyInformations = () => {
  const { data: company, isFetching, isError, isSuccess } = useCompanyQuery();

  if (isFetching) {
    return <CompanyInformationsSkeleton />;
  }

  if (isError) {
    return <Text data-cy="company-informations">Unavailable company informations</Text>;
  }

  if (isSuccess) {
    const {
      denomination: name,
      etablissement_siege: { siret, geo_adresse: address },
    } = company;

    return (
      <article data-cy="company-informations">
        <Heading mb={5} size="md">
          Company
        </Heading>
        <VStack spacing={1} align="left">
          <Text>Name: {name}</Text>
          <Text>Siret: {siret}</Text>
          <Text>Address: {address}</Text>
        </VStack>
      </article>
    );
  }
  return null;
};

export default CompanyInformations;
