/**
 * Created by snow on 22/09/2017.
 */

import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';

import Name from './Name';

storiesOf('Component', module)
    .add('Name', () => (
        <div>
            <h2>Normal</h2>
            <Name name="Luise Anderson"/>
            <h2>Highlighted</h2>
            <Name name="Louise Anderson" type="highlight"/>
            <h2>Disabled</h2>
            <Name name="Luise Anderson" type="disabled" />
        </div>
    )
);