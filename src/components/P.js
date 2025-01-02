import React from 'react';

function P({children}) {
  return (
    <p className='break-words'>
      {children}
    </p>
  );
}

export default P;
