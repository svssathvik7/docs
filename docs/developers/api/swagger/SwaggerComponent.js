import React from 'react';
import { SwaggerDoc } from './Swagger';

const SwaggerComponent = ({ url }) => (
    <SwaggerDoc
      url={url}
      docExpansion='none'
    />
    );

export default SwaggerComponent;
