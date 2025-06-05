import { useState } from 'react'
import Logo from '../Shared/Logo'
import { Badge, Avatar } from 'antd'

const btnStyle = {
	direction: 'none',
	border: 'none',
	background: 'transparent',
	cursor: 'pointer',
}

const Header = () => {
	const [notification, setNotification] = useState(0)

	return (
		<header className='d-flex justify-between align-center'>
			<Logo />
			<ul className='d-flex'>
				<button className='btnStyle'>
					<img src='/img/cart.svg' alt='Basket' />
					<span>1205 руб</span>
				</button>
				<button className='btnStyle'>
					<div className='heart-icon'>
						<img src='/img/heart.svg' alt='Fav' />
					</div>
					<span>Закладки</span>
				</button>
				<li className='d-flex align-center mr-30'>
					<Badge count={notification}>
						<button
							onClick={() => setNotification(notification + 1)}
							style={{
								direction: 'none',
								border: 'none',
								background: 'transparent',
								cursor: 'pointer',
							}}
						>
							<Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>
								U
							</Avatar>
						</button>
					</Badge>
				</li>
			</ul>
		</header>
	)
}

export default Header
