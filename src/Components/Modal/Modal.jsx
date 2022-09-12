import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { HeaderButton } from '../Header/Header'
import '../Modal/Modal.css'

function Modal({ setJalobModal, jalobModal }) {
	const [valueJalob, setValueJalob] = useState('')
	const [yes, setYes] = useState([])

	function HandleChangeJalob() {
		if (valueJalob === '') {
			return
		} else {
			setYes((prev) => {
				return [
					...prev,
					{
						value: 'Успешно приняли ✔',
						id: Math.random().toString(),
					},
				]
			})
		}

		setValueJalob('')
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			setYes([])
		}, 1500)
		return () => clearTimeout(timer)
	}, [yes])

	return (
		<div
			className={jalobModal ? 'modal active' : 'modal'}
			onClick={() => setJalobModal(false)}
		>
			<div
				className={
					jalobModal ? 'modal__content active' : 'modal__content'
				}
				onClick={(e) => e.stopPropagation()}
			>
				<JalobInput
					type='text'
					placeholder='Оставьте Жалобы'
					onChange={(el) => setValueJalob(el.target.value)}
					value={valueJalob}
					maxLength={16}
				/>
				<HeaderButton onClick={HandleChangeJalob}>Next</HeaderButton>
				{yes.map((item) => {
					return (
						<JalobRender key={item.id}>
							<span>{item.value}</span>
						</JalobRender>
					)
				})}
			</div>
		</div>
	)
}

const JalobInput = styled.input`
	width: 200px;
	height: 40px;
	text-align: center;
	margin-bottom: 10px;
`
const JalobRender = styled.div`
	width: 200px;
	height: 40px;
	border: 1px solid black;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
	font-family: cursive;
	border-radius: 5px;
	font-size: 18px;
`

export default Modal
