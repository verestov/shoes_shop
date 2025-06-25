import { useState } from 'react'
import { products } from '../../products'

const allItems = products
	.filter(product => typeof product.title === 'string')
	.map(product => product.title)

const SearchBtn = ({ query, onQueryChange }) => {
	const [suggestions, setSuggestions] = useState([])

	const handleInput = e => {
		const value = e.target.value
		onQueryChange(value) // Передаем значение в родительский компонент

		if (value.trim() === '') {
			setSuggestions([])
			return
		}

		const matches = allItems.filter(item =>
			item.toLowerCase().includes(value.toLowerCase())
		)
		setSuggestions(matches)
	}

	const handleSelected = item => {
		onQueryChange(item) // Обновляем query в родительском компоненте
		setSuggestions([])
	}

	return (
		<div className='search-block'>
			<button id='searchBtn'>
				<img src='/img/search.svg' alt='search' />
			</button>
			<input
				type='text'
				placeholder='Поиск...'
				value={query}
				onChange={handleInput}
			/>
			{suggestions.length > 0 && (
				<ul>
					{suggestions.map((item, index) => (
						<li
							key={index}
							style={{
								padding: '8px',
								cursor: 'pointer',
								borderBottom: '1px solid #eee',
							}}
							onClick={() => handleSelected(item)}
						>
							{item}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default SearchBtn
