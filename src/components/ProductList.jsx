import { products } from '../products'
import ProductCart from './ProductCart'

const ProductList = ({ searchQuery }) => {
	const filteredProducts = products.filter(product =>
		product.title.toLowerCase().includes(searchQuery.toLowerCase())
	)

	return (
		<div className='cardContainer'>
			{filteredProducts.map(p => (
				<ProductCart key={p.id} product={p} />
			))}
		</div>
	)
}

export default ProductList
