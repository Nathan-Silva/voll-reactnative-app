import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base';
import { TouchableOpacity } from 'react-native';

import Logo from './assets/Logo.png'
import { Title } from './components/Title';

export default function Register() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt='Logo Voll' />

      <Title>
        Faca login em sua conta
      </Title>
      <Box>
        <FormControl mt={3}>
          <FormControl.Label>Email</FormControl.Label>
          <Input placeholder='Insira seu endereco de email' size='lg' w="100%"borderRadius='lg' bgColor='gray.100' shadow={3}/>
        </FormControl>
        <FormControl mt={3}>
          <FormControl.Label>Senha</FormControl.Label>
          <Input placeholder='Insira sua senha' size='lg' w="100%"borderRadius='lg' bgColor='gray.100' shadow={3}/>
        </FormControl>
      </Box>

      <Button w="100%" bg="blue.800" mt={10} borderRadius="lg" >
        Entrar
      </Button>
      <Link href='' mt={2}>Esqueceu sua senha?</Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}> 
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity>
          <Text color="blue.500">
            Faca seu cadastro
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}

