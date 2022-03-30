import { chakra, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <chakra.header
      display="flex"
      alignItems="center"
      bgColor="white"
      boxShadow="md"
      py={5}
      px={[5, 20]}
    >
      <Text fontSize="4xl" fontWeight="semibold" color="primary">
        Mansa<chakra.span color="red">.</chakra.span>
      </Text>
    </chakra.header>
  );
};

export default Header;
