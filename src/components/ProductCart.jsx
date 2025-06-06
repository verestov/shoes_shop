import React, { useState } from 'react'

const ProductCart = ({ product }) => {
	const [like, setLike] = useState(false)
	const [added, setAdded] = useState(false)

	return (
		<div className='card'>
			<div className='cardImg'>
				<img width={133} height={112} src={product.img} alt='' />
				<button onClick={() => setLike(prev => !prev)}>
					<img
						src={like ? '/img/liked.svg' : '/img/unliked.svg'}
						alt='like button'
					/>
				</button>
			</div>
			<p style={{ margin: '0', padding: '0' }}>Мужские кроссовки</p>
			<p style={{ margin: '0', padding: '0' }}>{product.title}</p>
			<div className='d-flex justify-between align-center'>
				<div className='d-flex flex-column'>
					<span
						style={{ color: '#b6b6b6', fontWeight: '700', marginTop: '10px' }}
					>
						ЦЕНА:
					</span>
					<b style={{ fontSize: '16px', fontWeight: '700' }}>
						{product.price} руб.
					</b>
				</div>
				<button onClick={() => setAdded(prev => !prev)}>
					<img
						width={32}
						height={32}
						src={added ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
					/>
				</button>
			</div>
		</div>
	)
}

export default ProductCart
