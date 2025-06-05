import MainContentHeader from '../MainContentHeader'
import ProductList from '../ProductList'
import Slider from '../Slider'

const MainContent = () => {
	return (
		<div className='content'>
			<Slider />
			<MainContentHeader />
			<ProductList />
		</div>
	)
}

export default MainContent
