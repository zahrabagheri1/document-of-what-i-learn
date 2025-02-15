import React, { useMemo } from 'react';

const App = () => {
  const rowClassRules = useMemo(
    () => ({
      'red-row': (p) => {
        console.log(p);
        return p.data.make === "Toyota";
      }
    }),
    []
  );

  return (
    // rest of the component
  );
};

export default App;
