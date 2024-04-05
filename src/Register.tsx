import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import Logo from './assets/Logo.png'
import { Title } from './components/Title';
import { InputText } from './components/InputText';
import { ButtonComponent } from './components/ButtonComponent';

export default function Register() {

  const [sectionNumber, setSectionNumber] = useState(0);

  const sections = [
    {
      id: 1,
      title: 'Insira alguns dados básicos',
      inputText : [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Digite seu nome completo'
        },
        {
          id: 2,
          label: 'Email',
          placeholder: 'Digite seu email'
        }
      ]
    },
    {
      id: 2,
      title: 'Agora, mais alguns dados sobre voce:',
      inputText : [
        {
          id: 1,
          label: 'CEP',
          placeholder: 'Digite seu CEP'
        }
      ]
    }
  ]

function advanceNextSection(){
  if(sectionNumber < sections.length - 1){
    setSectionNumber(sectionNumber + 1)
  }
}

function returnBackSection(){
  if(sectionNumber > 0){
    setSectionNumber(sectionNumber - 1)
  }
}

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt='Logo Voll' />

      <Title>
        {sections[sectionNumber].title}
      </Title>
      <Box>
         {
          sections[sectionNumber].inputText.map(input => {
            return <InputText label={input.label} placeholder={input.placeholder} key={input.id}/>
          })
         }
      </Box>

      { sectionNumber > 0 && <ButtonComponent onPress={() => returnBackSection()} bgColor="gray.400">
        Voltar
      </ButtonComponent>}

      <ButtonComponent onPress={() => advanceNextSection()} mt={4}>
        Avancar
      </ButtonComponent>
      
    </VStack>
  );
}

