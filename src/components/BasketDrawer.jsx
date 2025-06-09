import { Drawer } from 'antd'
import { useEffect, useState } from 'react'
import { useCart } from './CartContext'

//FIXME: Пофиксить отображение элементов в корзине при их кол-во = 2, 3

const BasketDrawer = ({ openBasket, setOpenBasket }) => {
	const { items, removeFromCart } = useCart()
	const [amount, setAmount] = useState(0)
	useEffect(() => {
		const total = items.reduce((sum, product) => sum + product.price, 0)
		setAmount(total)
	}, [items])
	return (
		<Drawer
			title='Корзина'
			closable={{ 'aria-label': 'Close Button' }}
			onClose={() => setOpenBasket(prev => !prev)}
			open={openBasket}
		>
			<div className='drawer-container'>
				{items.length === 0 ? (
					<div className='emptyCart'>
						<div className='emptyCartContent'>
							<img
								width={120}
								height={120}
								src='/img/empty-cart.jpg'
								alt='Empty Cart'
							/>
							<h3>Корзина пустая</h3>
							<p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
						</div>
						<button
							onClick={() => setOpenBasket(prev => !prev)}
							className='sliderBtnStyle'
						>
							Вернуться назад
						</button>
					</div>
				) : (
					<>
						{items.map(product => (
							<div className='cartItem' key={product.id}>
								<div className='cartItemContent'>
									<img
										width={70}
										height={70}
										src={product.img}
										alt='BasketItemImg'
									/>
									<div>
										<p style={{ margin: '0', padding: '0' }}>
											Мужские кроссовки
										</p>
										<p style={{ margin: '0', padding: '0' }}>{product.title}</p>
										<b
											style={{
												fontSize: '16px',
												fontWeight: '700',
											}}
										>
											{product.price} руб.
										</b>
									</div>
								</div>
								<button onClick={() => removeFromCart(product.id)}>
									<svg
										width='32'
										height='32'
										viewBox='0 0 32 32'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<rect
											x='0.5'
											y='0.5'
											width='31'
											height='31'
											rx='7.5'
											fill='white'
											stroke='#DBDBDB'
										/>
										<path
											d='M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z'
											fill='#B5B5B5'
										/>
									</svg>
								</button>
							</div>
						))}

						<div className='purchaseContainer'>
							<div className='amountInfo'>
								<p>Итого:</p>
								<p>
									<b>{amount} руб.</b>
								</p>
							</div>
							<div className='amountInfo'>
								<p>Налог 5%:</p>
								<p>
									<b>{((amount * 5) / 100).toFixed(2)} руб.</b>
								</p>
							</div>
							<button className='sliderBtnStyle'>Оформить заказ </button>
						</div>
					</>
				)}
			</div>
		</Drawer>
	)
}

export default BasketDrawer
