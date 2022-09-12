import styled from 'styled-components'
import IconTrello from '../../Img/IconTrello.png'
import IconApple from '../../Img/IconApple.png'
import IconGoogle from '../../Img/IconGoogle.png'
import { useState } from 'react'
import Modal from '../Modal/Modal'

function Form({ setWentСame }) {
	const [valueEmail, setValueEmail] = useState('')
	const [valuePassword, setValuePassword] = useState('')
	const [jalobModal, setJalobModal] = useState(false)

	const initState = {
		email: 'abu@gmail.com',
		password: '123',
	}
	function HandleChange() {
		if (valueEmail === initState.email) {
			if (initState.password === valuePassword) {
				setWentСame(false)
			}
		}
		setValueEmail('')
		setValuePassword('')
	}

	return (
		<GlavnyiForm>
			<ContainerForm>
				<Conatiner1Form>
					<ImgIconForm src={IconTrello} />
					<H1Form>Trello</H1Form>
				</Conatiner1Form>
				<PForm>Войти</PForm>
				<form onSubmit={HandleChange}>
					<InputForm
						type='email'
						placeholder='Введите адрес электронной почты'
						onChange={(el) => setValueEmail(el.target.value)}
						value={valueEmail}
					/>
				</form>
				<form onSubmit={HandleChange}>
					<InputForm
						type='password'
						placeholder='Введите пароль'
						onChange={(el) => setValuePassword(el.target.value)}
						value={valuePassword}
						pattern='[0-9]{3}'
						title='Строке Должен Быть Цифры Максимум 3 '
					/>
				</form>
				<ButtonForm onClick={HandleChange}>Продолжить</ButtonForm>
				<PForm style={{ color: 'gray' }}>или</PForm>
				<ButtonForm
					style={{
						background: 'white',
						boxShadow: 'rgb(0 0 0 / 40%) 1px 1px 5px 0px',
						color: 'var(--ds-text,#42526E)',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						justifyContent: 'space-around',
						padding: '0 20px',
					}}
				>
					<ImgIconForm
						src={IconGoogle}
						style={{ width: '20px', height: '20px' }}
					/>
					Войти с помощью Google
				</ButtonForm>
				<ButtonForm
					style={{
						background: 'white',
						boxShadow: 'rgb(0 0 0 / 40%) 1px 1px 5px 0px',
						color: 'var(--ds-text,#42526E)',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						justifyContent: 'space-around',
						padding: '0 20px',
					}}
				>
					<ImgIconForm
						src={IconApple}
						style={{ width: '20px', height: '20px' }}
					/>
					Войти с помощью Apple
				</ButtonForm>
				<HrForm />
				<Conatiner1Form style={{ height: '30px', margin: '0' }}>
					<PForm onClick={() => setJalobModal(true)}>Жалобы</PForm>
				</Conatiner1Form>
			</ContainerForm>
			{jalobModal && (
				<Modal setJalobModal={setJalobModal} jalobModal={jalobModal} />
			)}
		</GlavnyiForm>
	)
}

const GlavnyiForm = styled.div`
	height: 753px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #eeeee4;
`
const ContainerForm = styled.div`
	width: 400px;
	height: 600px;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	justify-content: space-around;
	box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.15);
	border-radius: 2px;
`
export const InputForm = styled.input`
	width: 250px;
	height: 40px;
	border-radius: 8px;
	border: 2px solid gray;
	padding: 5px 5px 5px 5px;
`
const ButtonForm = styled.button`
	width: 250px;
	height: 40px;
	background-color: var(--ds-background-brand-bold, #0052cc);
	color: white;
	border: none;
	border-radius: 6px;
`
const ImgIconForm = styled.img`
	width: 80px;
	height: 80px;
`
const H1Form = styled.h1`
	font-size: 50px;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const Conatiner1Form = styled.div`
	width: 250px;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
`
const PForm = styled.p`
	font-size: large;
	color: black;
	font-weight: bold;
`
const HrForm = styled.hr`
	width: 80%;
	color: black;
`
export default Form
