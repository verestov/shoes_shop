import { useState } from 'react'
import Logo from '../Shared/Logo'
import { Badge, Avatar, Drawer } from 'antd'

const Header = () => {
	const [notification, setNotification] = useState(0)
	const [openBasket, setOpenBasket] = useState(false)

	return (
		<header className='d-flex justify-between align-center'>
			<Logo />
			<ul className='d-flex'>
				<button
					className='btnStyle'
					onClick={() => setOpenBasket(prev => !prev)}
				>
					<img src='/img/cart.svg' alt='Basket' />
					<span>1205 руб</span>
				</button>
				<Drawer
					title='Корзина'
					closable={{ 'aria-label': 'Close Button' }}
					onClose={() => setOpenBasket(prev => !prev)}
					open={openBasket}
				>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</Drawer>
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
