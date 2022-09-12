import React from 'react'
import styled from 'styled-components'
import '../Glavnyi/Slider.scss'

function Card() {
	return (
		<Slider>
			<figure className='icon-cards mt-3'>
				<div className='icon-cards__content'>
					<div className='icon-cards__item d-flex align-items-center justify-content-center'>
						<img src='https://mir-s3-cdn-cf.behance.net/projects/404/8faab9133879335.Y3JvcCwxMzgwLDEwODAsMzM0LDA.png' />
					</div>
					<div className='icon-cards__item d-flex align-items-center justify-content-center'>
						<img src='https://digitalmym.com/wp-content/uploads/2019/04/digital-mym-comment-utiliser-trello-en-tete-min-1080x675.jpg' />
					</div>
					<div className='icon-cards__item d-flex align-items-center justify-content-center'>
						<img src='https://rankerstudio.com/wp-content/uploads/2021/06/%C2%BFQue-es-Trello-y-como-la-utilizamos-para-organizar-todo.png' />
					</div>
				</div>
			</figure>
		</Slider>
	)
}

const Slider = styled.div`
	margin-top: 150px;
`

export default Card
