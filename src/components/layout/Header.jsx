import { useState } from 'react'
import Logo from '../Shared/Logo'
import { Badge, Avatar } from 'antd'
import BasketDrawer from '../BasketDrawer'
import { Link } from 'react-router-dom'
import { useCart } from '../CartContext'

const Header = () => {
	const { items, favorites } = useCart()
	const [openBasket, setOpenBasket] = useState(false)

	return (
		<header className='d-flex justify-between align-center'>
			<Link to='/'>
				<Logo />
			</Link>
			<ul className='d-flex'>
				<Badge count={items.length} offset={[-120, 0]}>
					<button
						className='btnStyle'
						onClick={() => setOpenBasket(prev => !prev)}
					>
						<img src='/img/cart.svg' alt='Basket' />
						<span>Корзина</span>
					</button>
				</Badge>

				<BasketDrawer openBasket={openBasket} setOpenBasket={setOpenBasket} />
				<Badge dot={favorites.length > 0} offset={[-130, 0]}>
					<Link to='/favorites' className='d-flex items-center justify-center'>
						<button className='btnStyle'>
							<div className='heart-icon'>
								<img src='/img/heart.svg' alt='Fav' />
							</div>
							<span>Закладки</span>
						</button>
					</Link>
				</Badge>
				<li className='d-flex align-center mr-30'>
					<Link to='/account'>
						<button
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
					</Link>
				</li>
			</ul>
		</header>
	)
}

export default Header
