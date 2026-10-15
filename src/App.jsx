import { useState } from 'react'
import './App.css'

function App(){
  const [user,SetUser] = useState("")
  async function findUser(){
    const url=`https://docs.github.com/en/rest/${user}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
  }
  async function handleSubmit(e){
    e.preventDefault()
    findUser()
  }
  return (
    <div className="App">
      <h1>GitHub User Finder</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={user} onChange={(e) => SetUser(e.target.value)} placeholder="Enter GitHub username" />
        <button type="submit">Find User</button>
      </form>
      <div>
        <h2>User Details</h2>
        <p>Username: {user}</p> 
      </div>
    </div>
  )
}
export default App