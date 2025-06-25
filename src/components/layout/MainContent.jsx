import { useState } from 'react'
import MainContentHeader from '../MainContentHeader'
import ProductList from '../ProductList'
import Slider from '../Slider'

const MainContent = () => {
	const [searchQuery, setSearchQuery] = useState('')

	return (
		<div className='content'>
			<Slider />
			<MainContentHeader
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
			/>
			<ProductList searchQuery={searchQuery} />
		</div>
	)
}

export default MainContent
