import { useState } from 'react'
import Logo from '../Shared/Logo'
import { Badge, Avatar } from 'antd'
import BasketDrawer from '../BasketDrawer'
import { Link } from 'react-router-dom'

const Header = () => {
	const [notification, setNotification] = useState(0)
	const [openBasket, setOpenBasket] = useState(false)

	return (
		<header className='d-flex justify-between align-center'>
			<Link to='/'>
				<Logo />
			</Link>
			<ul className='d-flex'>
				<button
					className='btnStyle'
					onClick={() => setOpenBasket(prev => !prev)}
				>
					<img src='/img/cart.svg' alt='Basket' />
					<span>Корзина</span>
				</button>

				<BasketDrawer openBasket={openBasket} setOpenBasket={setOpenBasket} />

				<Link to='/favorites' className='d-flex items-center justify-center'>
					<button className='btnStyle'>
						<div className='heart-icon'>
							<img src='/img/heart.svg' alt='Fav' />
						</div>
						<span>Закладки</span>
					</button>
				</Link>
				<li className='d-flex align-center mr-30'>
					<Link to='/account'>
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
								<Avatar
									style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}
								>
									U
								</Avatar>
							</button>
						</Badge>
					</Link>
				</li>
			</ul>
		</header>
	)
}

export default Header
