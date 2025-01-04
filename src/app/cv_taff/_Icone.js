import React from 'react';

const Icone = ({children}) => {
  return (
    <div className="bg-primary w-10 h-10 md:w-16 md:h-16 rounded-full">
        {children}
    </div>
  );
}

export default Icone;
