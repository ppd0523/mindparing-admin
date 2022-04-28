import React from 'react';

interface IDBProvider {

}
const dbContext = React.createContext('hello');

function DBProvider({children}: {children: React.ReactNode}) {
  return <dbContext.Provider value='world'>{children}</dbContext.Provider>;
}

export { dbContext, DBProvider };