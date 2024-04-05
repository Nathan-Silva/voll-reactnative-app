// import Login from './src/Login';
import Register from './src/Register';
import { NativeBaseProvider, StatusBar } from 'native-base';

import { THEME } from './src/styles/themes';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar backgroundColor={THEME.colors.blue[800]}/>
      <Register />
    </NativeBaseProvider>
  );
}
