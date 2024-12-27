import React, { useEffect, useCallback } from 'react';
import { SwaggerDoc } from './Swagger';

const SwaggerComponent = ({ url }) => {
  const expandFirstTag = ()=>{
    const firstButton = document.getElementsByClassName("expand-operation")[0];
    if(firstButton){
      firstButton.click();
    }
  }

  return (
    <div className="swagger-wrapper">
      <SwaggerDoc
        url={url}
        docExpansion="none"
        onComplete={expandFirstTag}
      />
    </div>
  );
};

export default SwaggerComponent;