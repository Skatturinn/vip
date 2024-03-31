'use client'
import { FC } from 'react';
import { useState } from "react"
import { useForm } from "react-hook-form";
import { messagevalidationmiddleware } from '../util/validation';
import styles from "./form.module.scss"

export type FormData = {
	name: string;
	email: string;
	message: string;
};
export const ContactForm: FC = () => {
	const { register, handleSubmit } = useForm<FormData>();
	const [wait, setWait] = useState(false);
	async function onSubmit(data: FormData) {
		try {
			const a = messagevalidationmiddleware(data.name, data.email, data.message);
			if (a) {
				try {
					setWait(true)
					const res = await fetch('/api/contact', {
						method: 'POST',
						body: JSON.stringify({
							a
						}),
						headers: {
							'content-type': 'application/json'
						}
					})
					setWait(false)
					if (res.status >= 200 && res.status < 300) {
						window.alert('Skilaboð mótekin')
						window.history.pushState({}, '', '/');
						window.history.go();
					} else {
						throw new Error(res.statusText)

					}

				} catch (err) {
					window.alert(err)
				}
			}
		} catch (err) { window.alert(err) }
	}
	return <>
		<div className={wait ? styles.loading : ''}></div>
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<div className={styles.field}>
				<label
					htmlFor='name' >nafn</label>
				<input
					type="text"
					placeholder=""
					{...register('name', { required: true })}
				/>
			</div>
			<div className={styles.field}>
				<label
					htmlFor='email'>netfang</label>
				<input

					type="text" placeholder=""
					{...register('email', { required: true })}
				/>
			</div>
			<div className={styles.field}>
				<label
					htmlFor='message' >Fyrirspurn</label>
				<textarea
					placeholder=""
					{...register('message', { required: true })}
				></textarea>
			</div>
			<button className={styles.button}>Senda</button>
		</form></>
}