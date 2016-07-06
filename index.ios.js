/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@kadira/react-native-storybook';

configure(() => {
  require('./src/stories');
}, module)

const StorybookUI = getStorybookUI({port: 9001, host: 'localhost'});
AppRegistry.registerComponent('RnHello', () => StorybookUI);
