import React from 'react'

const Logo = () => {
	return (
		<div className='d-flex align-center'>
			<img width={40} height={40} src='/img/logo.png' alt='' />

			<div>
				<h3 className=''>React Sneakers</h3>
				<p>Магазин лучших кроссовок</p>
			</div>
		</div>
	)
}

export default Logo
