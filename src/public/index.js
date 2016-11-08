'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from 'componentsShareRadium/Wrapper';
import Index from 'componentsIndex/Index';

(() => {
  ReactDOM.render(
    <Wrapper>
      <Index />
    </Wrapper>,
    document.getElementById('root')
  );
})();
