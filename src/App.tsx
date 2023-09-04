import './App.css'
import Grandpa from './Grandpa'
import UserContextProvider from './context';



function App(): JSX.Element {

  return (
    <UserContextProvider>
      <Grandpa />
    </UserContextProvider>

  )
}

export default App
