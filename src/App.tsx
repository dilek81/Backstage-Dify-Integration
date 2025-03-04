import React from 'react';
import { App } from '@backstage/core';
import { DifyPlugin } from './plugins/dify/DifyPlugin';

const AppComponent = () => (
  <App>
    <DifyPlugin />
  </App>
);

export default AppComponent;
