import styled from 'styled-components'
import Menu from './Components/Menu/Menu'
import React, { useState } from 'react'
import Form from './Components/Form/Form'

function App() {
	const [wentСame, setWentСame] = useState(true)
	return (
		<Glavnyi>
			<Menu wentСame={wentСame} setWentСame={setWentСame} />
			{wentСame && <Form setWentСame={setWentСame} />}
		</Glavnyi>
	)
}

const Glavnyi = styled.div`
	height: 753px;
	background-color: #eeeee4;
`

export default App


