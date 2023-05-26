import './App.css'
import { api } from './api/api'
function App() {

	api.getCategories().then(console.log)
	api.getDataPaginated({limit:50, filter: 'priv'}).then(console.log)

  return (
    <h1 className="text-3xl font-bold h-screen">
      Hello world!
    </h1>
  )
}

export default App
