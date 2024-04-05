import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base';
import { TouchableOpacity } from 'react-native';

import Logo from './assets/Logo.png'
import { Title } from './components/Title';
import { InputText } from './components/InputText';
import { ButtonComponent } from './components/ButtonComponent';



export default function Login() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt='Logo Voll' />

      <Title>
        Faca login em sua conta
      </Title>
      <Box>
        <InputText label='Email' placeholder='Insira seu endereco de e-mail'/>
        <InputText label='Senha' placeholder='Insira sua senha'/>
      </Box>

      <ButtonComponent>
        Entrar
      </ButtonComponent>
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

