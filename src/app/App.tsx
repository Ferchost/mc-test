import 'react-native-gesture-handler';
import React, {FC} from 'react';
import Navigation from './Navigation';
import {ThemeProvider} from 'styled-components/native';
import {CommonTheme} from '../atomic/theme';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); 
LogBox.ignoreAllLogs();
const App: FC = () => {
  return (
    <ThemeProvider theme={CommonTheme}>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
