import React from 'react'
import styled from 'styled-components'
import TrelloIcon from '../../Img/IconTrello.png'
import Card from '../Glavnyi/Glavnyi'
import MyDock from '../MyDock/MyDock'

function Header({ setWentСame, setGlavDock }) {

	function Null(){
		setWentСame(true)
		setGlavDock(null)
	}
	return (
		<HeaderMenu>
			<HeaderImg src={TrelloIcon} />
			<HeaderH1>Trello</HeaderH1>
			<HeaderButton onClick={() => setGlavDock(<Card />)}>
				Главная
			</HeaderButton>
			<HeaderButton onClick={()=>setGlavDock(<MyDock/>)}>Мои Доски</HeaderButton>
			<HeaderButton onClick={Null}>Выйти</HeaderButton>
		</HeaderMenu>
	)
}

export const HeaderButton = styled.button`
	width: 100px;
	height: 30px;
	border-radius: 12px;
	background-color: rgb(46, 53, 117);
	color: white;
`
const HeaderImg = styled.img`
	width: 50px;
	height: 50px;
`
const HeaderMenu = styled.div`
	width: 1000px;
	height: 80px;
	background-color: rgb(66, 135, 245);
	display: flex;
	justify-content: center;
	align-items: center;
	justify-content: space-around;
`
const HeaderH1 = styled.h1`
	color: white;
	font-family: Georgia, 'Times New Roman', Times, serif;
`
export default Header
