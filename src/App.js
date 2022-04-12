import logo from "./logo.svg"
import "./App.css"
import { useState } from "react"

function App() {
	const [name, setName] = useState({ value: "", error: "" })
	const [number, setNumber] = useState({ value: "", error: "" })
	const [email, setEmail] = useState({ value: "", error: "" })
	const [password, setPassword] = useState({ value: "", error: "" })

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	const handleNameInput = (event) => {
		const namePart = event.target.value.split(" ")
		console.log(namePart[namePart.length - 1])
		if (namePart.length < 2) {
			setName({ value: "", error: "name must be at least 2 characters" })
		} else if (namePart[namePart.length - 1] == "") {
			setName({ value: "", error: "name must be at least 2 characters" })
		} else {
			setName({ value: "", error: "" })
		}
	}
	return (
		<>
			<form>
				<input onChange={handleNameInput} type="text" name="" id="" />
				<input type="number" name="" id="" />
				<input type="email" name="" id="" />
				<input type="password" name="" id="" />
				<p>{name.error}</p>
			</form>
		</>
	)
}

export default App
