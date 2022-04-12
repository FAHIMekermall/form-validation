import "./App.css"
import { useState } from "react"

function App() {
	const [name, setName] = useState({ value: "", error: "" })
	const [number, setNumber] = useState({ value: "", error: "" })
	const [userName, setUserName] = useState({ value: "", error: "" })
	const [password, setPassword] = useState({ value: "", error: "" })

	const [confirmPassword, setConfirmPassword] = useState({
		value: "",
		error: "",
	})

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	const handleNameInput = (event) => {
		const namePart = event.target.value.split(" ")
		if (namePart.length < 2) {
			setName({
				value: "",
				error: "Name must contain at least 2 characters",
			})
		} else if (namePart[namePart.length - 1] == "") {
			setName({
				value: "",
				error: "Name must contain at least 2 characters",
			})
		} else if (/[a-z]/.test(event.target.value[0])) {
			setName({
				value: "",
				error: "Name must start with capital letter",
			})
		} else {
			setName({ value: "", error: "" })
		}
		if (event.target.value == "") {
			setName({ value: "", error: "" })
		}
	}

	const handleuserNameInput = (event) => {
		if (
			event.target.value.length >= 1 &&
			!/[a-zA-Z]/.test(event.target.value[0])
		) {
			setUserName({
				value: "",
				error: "Username should start with alphabetic character",
			})
		} else if (/[A-Z]/.test(event.target.value)) {
			setUserName({
				value: "",
				error: "You should use all lowercase letter in user",
			})
		} else {
			setUserName({ value: event.target.value, error: "" })
		}
	}
	const handlePasswordInput = (event) => {
		if (event.target.value.length < 8) {
			setPassword({ value: "", error: "Password too short" })
		} else if (
			/[a-z]/.test(event.target.value) &&
			!/[A-Z]/.test(event.target.value)
		) {
			setPassword({
				value: "",
				error: "You need minimum 1 uppercase letter",
			})
		} else if (
			!/[!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/.test(
				event.target.value
			)
		) {
			setPassword({
				value: "",
				error: "You need minimum 1 special characters",
			})
		} else {
			setPassword({ value: event.target.value, error: "" })
		}
		if (event.target.value == "") {
			setPassword({ value: "", error: "" })
		}
	}
	const handleConfirmPasswordInput = (event) => {
		if (password.value !== event.target.value) {
			setConfirmPassword({ value: "", error: "Password mismatch" })
		} else {
			setConfirmPassword({ value: event.target.value, error: "" })
		}
		if (event.target.value == "") {
			setConfirmPassword({ value: "", error: "" })
		}
	}
	return (
		<div>
			<div className="login-container">
				<form onSubmit={handleSubmit}>
          
					<h1 style={{ fontFamily: "monospace" }}>
						Create an account
					</h1>
					<input
						onChange={handleNameInput}
						placeholder="Full Name"
						type="text"
						name="last-name"
						id="last-name"
						required
					/>
					{name.error && (
						<small className="error">{name.error}</small>
					)}

					<input
						onChange={handleuserNameInput}
						placeholder="username"
						type="text"
						name="userName"
						id="userName"
						required
					/>
					{userName.error && (
						<small className="error">{userName.error}</small>
					)}
					<input
						onChange={handlePasswordInput}
						placeholder="Password"
						type="password"
						name="password"
						id="password"
						required
					/>
					{password.error && (
						<small className="error">{password.error}</small>
					)}
					<input
						onChange={handleConfirmPasswordInput}
						placeholder="Confirm Password"
						type="Password"
						name="rePassword"
						id="rePassword"
						required
					/>
					{confirmPassword.error && (
						<small className="error">{confirmPassword.error}</small>
					)}
					<input
						type="submit"
						value="Create an account"
						id="login-btn"
					/>
				</form>
			</div>
		</div>
	)
}

export default App
