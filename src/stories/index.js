import React from 'react';
import { storiesOf, action } from '@kadira/react-native-storybook';
import CenteredView from './centered_view.js';
import { Text } from 'react-native';

storiesOf('CenteredView')
  .add('default view', () => (
    <CenteredView>
      <Text style={{fontSize: 30}} onClick={action('Clicked')}>Hello Storybook Hello</Text>
    </CenteredView>
  ))
  .add('another view', () => (
    <CenteredView>
      <Text>Another Storybook 4</Text>
    </CenteredView>
  ));
