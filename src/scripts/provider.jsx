// We want to make data available for multiple consumers
// Understanding this pattern make the use of React Context pretty clear tho

import React from 'react';

const DataContext = React.createContext();

function App() {
  const data = {hola: 12}
  
  return (
    <div>
      <DataContext.Provider value={data} >
        <Component1 />
        <Component2 />
      </DataContext.Provider>
    </div>
  )
}

const Component1 = () => <List />
const Component2 = () => <ListItem />

function ListItem() {
  const {data} = React.useContext(DataContext);
  return <span>{data.hola}</span>
  }


// Each component consuming the context has to re-render if the state changes
// 😕

