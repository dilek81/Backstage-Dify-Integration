import React from 'react';
import { createPlugin } from '@backstage/core-plugin-api';
import { DifyComponent } from './components/DifyComponent';

export const DifyPlugin = createPlugin({
  id: 'dify',
  routes: {
    root: DifyComponent,
  },
});
