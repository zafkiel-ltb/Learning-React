import Student from "./Student.jsx"

function App() {
  return (
    <>
        <Student name="Spongebob" age={30} isStudent={true}></Student>
        <Student name="Patrick" age={42} isStudent={false}></Student>
        <Student name="Yanami" age={18} isStudent={true}></Student>
        <Student name="Sandy" age={27} isStudent={false}></Student>
        <Student/>
    </> 
  )
}

export default App
