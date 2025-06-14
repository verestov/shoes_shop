import { useCart } from '../CartContext'
import MyOrdersProductCart from '../MyOrdersProductCart'
import Header from './Header'
import { Link } from 'react-router-dom'
import { EmptyState } from '../Shared/EmptyState'

const AccountPage = () => {
	const { orders } = useCart()
	return (
		<div className='wrapper clear'>
			<Header />
			<div className='contentAccount'>
				{orders.length === 0 ? (
					<EmptyState
						title='У вас нет заказов'
						subtitle1='Вы нищеброд?'
						subtitle2='Оформите хотя бы один заказ.'
					/>
				) : (
					<div className='d-flex items-center flex-column'>
						<div className='accountPageHeader'>
							<Link to='/'>
								<button>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
										className='lucide lucide-chevron-left-icon lucide-chevron-left'
									>
										<path d='m15 18-6-6 6-6' />
									</svg>
								</button>
							</Link>
							<h1>Мои покупки</h1>
						</div>
						{orders.map((order, index) => (
							<div className='accountOrders' key={index}>
								<h2>Заказ #{index + 1}</h2>
								<h3>
									Итого: <b>{order.total} руб.</b>
								</h3>
								<div className='accountItems'>
									{order.items.map(product => (
										<MyOrdersProductCart
											productId={product.id}
											productImg={product.img}
											productTitle={product.title}
											productPrice={product.price}
										/>
									))}
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default AccountPage
