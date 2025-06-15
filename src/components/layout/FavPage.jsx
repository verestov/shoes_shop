import { useCart } from '../CartContext'
import { EmptyState } from '../Shared/EmptyState'
import { Link } from 'react-router-dom'
import Header from './Header'
import MyOrdersProductCart from '../MyOrdersProductCart'

const FavPage = () => {
	const { favorites } = useCart()
	return (
		<div className='wrapper clear'>
			<Header />
			<div className='contentAccount'>
				{favorites.length === 0 ? (
					<EmptyState
						title='Закладок нет :('
						subtitle1='Вы ничего не добавили'
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
							<h1>Мои избранные</h1>
						</div>
						<div className='accountOrders' style={{ border: 'none' }}>
							<div className='accountItems'>
								{favorites.map(product => (
									<MyOrdersProductCart
										key={product.id}
										productId={product.id}
										productImg={product.img}
										productTitle={product.title}
										productPrice={product.price}
									/>
								))}
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default FavPage
