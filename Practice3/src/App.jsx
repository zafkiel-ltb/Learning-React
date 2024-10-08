import Girlfriend from './Girlfriend.jsx'
import List from './List.jsx'

function App() {

  const foods = [{id: 1, name: 'Banana', quantity: 15, calories: 100},
                 {id: 2, name: 'Coconut', quantity: 20, calories: 115},
                 {id: 3, name: 'Orange', quantity: 10, calories: 100},
                 {id: 4, name: 'Grapes', quantity: 50, calories: 210}]
  
  const students = [{id: 1, name: "Duong Minh Chanh", score: 10},
                   {id: 2, name: "Nguyen Thi Giang", score: 15},
                   {id: 3, name: "Tran Tri Quynh", score: 69}]
  

  return (
    <>
      <List items={foods} category = "Foods"/> 
      <Girlfriend items={students} grade = "Good"/>
    </>
  )
}

export default App
