import styled from 'styled-components'
import { useState } from 'react'

function TaksList({ value, func2, id }) {
	const [value2, setValue2] = useState('')
	const [render2, setRender2] = useState([])
	function HandleMyDock2(i) {
		i.preventDefault()
		setRender2((prev) => {
			return [
				...prev,
				{ value: value2, id: Math.random().toLocaleString() },
			]
		})
		setValue2('')
	}
	const func = (d) => {
		const o = render2.filter((i) => i.id !== d)
		setRender2(o)
	}
	return (
		<ContDock>
			<HeaderMyDock>
				<h2>{value}</h2>
				<span onClick={() => func2(id)}>❌</span>
			</HeaderMyDock>
			<form onSubmit={HandleMyDock2}>
				<MyDockInput
					onChange={(el) => setValue2(el.target.value)}
					type='text'
					value={value2}
					minLength={5}
					maxLength={15}
				/>
			</form>
			{render2.map((el) => {
				return (
					<ContCard key={el.id}>
						<ContDock1>{el.value}</ContDock1>
						<span onClick={() => func(el.id)}>❌</span>
					</ContCard>
				)
			})}
		</ContDock>
	)
}
const HeaderMyDock = styled.div`
	width: 200px;
	height: 40px;
	display: flex;
	justify-content: space-around;
	margin-top: 10px;
`
const ContDock = styled.div`
	max-width: 250px;
	height: 300px;
	border: 3px solid black;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 20px;
	overflow-x: auto;
	margin-top: 10px;
`

const ContDock1 = styled.div`
	width: 140px;
	height: 30px;
	border: 2px solid black;
	border-radius: 12px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: white;
`
const MyDockInput = styled.input`
	width: 150px;
	height: 25px;
	border-radius: 10px;
	text-align: center;
	margin-top: 10px;
`
const ContCard = styled.div`
	width: 140px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
`
export default TaksList
