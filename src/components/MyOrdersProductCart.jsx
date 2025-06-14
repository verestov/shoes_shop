const MyOrdersProductCart = ({ productId, productImg, productTitle }) => {
	return (
		<div className='card' style={{ border: 'none' }} key={productId}>
			<div className='cardImg'>
				<img width={133} height={112} src={productImg} alt='' />
			</div>
			<p style={{ margin: '0', padding: '0' }}>Мужские кроссовки</p>
			<p style={{ margin: '0', padding: '0' }}>{productTitle}</p>
		</div>
	)
}

export default MyOrdersProductCart
