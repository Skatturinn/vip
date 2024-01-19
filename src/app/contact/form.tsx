'use client'
import { FormEvent, useState } from "react"

export const ContactForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault()
		console.log(name, email, message)
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				body: JSON.stringify({
					name: name, email: email, message: message
				}),
				headers: {
					'content-type': 'application/json'
				}
			})

		} catch (err: any) {
			console.log(err)
			console.error(err)

		}
	}

	return <>
		<form onSubmit={onSubmit}>
			<input
				value={name}
				onChange={(e) => setName(e.target.value)}
				type="text"
				placeholder="name"
			/>
			<input
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				type="text" placeholder="email" />
			<textarea
				value={message}
				onChange={e => setMessage(e.target.value)}
			></textarea>
			<button>Press me</button>
		</form></>
}