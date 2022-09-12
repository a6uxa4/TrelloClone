import React, { useState } from 'react'
import styled from 'styled-components'
import { InputForm } from '../Form/Form'
import TaksList from './ContItem'
function MyDock() {
	const [value, setValue] = useState('')
	const [render, setRender] = useState([])

	function HandleMyDock1(i) {
		i.preventDefault()
		setRender((prev) => {
			return [
				...prev,
				{ value: value, id: Math.random().toLocaleString() },
			]
		})
		setValue('')
	}
	const func2 = (d) => {
		const o = render.filter((i) => i.id !== d)
		setRender(o)
	}

	return (
		<MyDockGlav>
			<form onSubmit={HandleMyDock1}>
				<InputForm
					minLength={5}
					maxLength={15}
					style={{ textAlign: 'center', fontSize: '20px' }}
					type='text'
					onChange={(el) => setValue(el.target.value)}
					value={value}
				/>
			</form>
			<MyDockGlav1>
				{render.map((el) => {
					return (
						<TaksList
							id={el.id}
							key={el.id}
							value={el.value}
							func2={func2}
						/>
					)
				})}
			</MyDockGlav1>
		</MyDockGlav>
	)
}

const MyDockGlav = styled.div`
	max-width: 900px;
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow-x: auto;
`

const MyDockGlav1 = styled.div`
	max-width: 1000px;
	margin-top: 50px;
	display: flex;
	overflow-x: scroll;
	overflow-x: auto;
`

export default MyDock
