import styled from 'styled-components'
import Header from '../Header/Header'
import { useState } from 'react'

function Menu({ setWentСame, wentСame }) {
	const [glavDock, setGlavDock] = useState()
	return (
		<MenuGlavnyi>
			{!wentСame && (
				<Header setWentСame={setWentСame} setGlavDock={setGlavDock} />
			)}
			{glavDock}
		</MenuGlavnyi>
	)
}
const MenuGlavnyi = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
export default Menu
