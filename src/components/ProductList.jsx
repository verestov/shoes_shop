import { products } from '../products'
import ProductCart from './ProductCart'

const ProductList = () => {
	return (
		<div className='cardContainer'>
			{products.map(p => (
				<ProductCart key={p.id} product={p} />
			))}
		</div>
	)
}

export default ProductList
