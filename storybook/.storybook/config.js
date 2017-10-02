import { configure, addDecorator } from '@storybook/react';
import  React from 'react';

import '../src/Name.css';

function loadStories() {

  require('../src/stories');
  require('../src/Name.stories');
}

configure(loadStories, module);
