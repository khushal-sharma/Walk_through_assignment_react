
import './App.css'
import Button from './Components/Button/Button'
import Header from './Components/Header/Header'
import List from './Components/List/List'
import Person from './Components/Person/Person'

function App() {
  const Items = ["item1","item2",'item3']
  const ItemsList = Items.map(item => <List item={item}/>)

  return (
    <>
      <Header title="Header"/> 
      <Person name="khushal" age="24"/>
      <Button text="Click"/>
      {ItemsList}
    </>
  )
}

export default App
