import SearchBtn from './Shared/SearchBtn'

function MainContentHeader() {
	return (
		<div className=''>
			<div className='d-flex justify-between align-center'>
				<h1>Все кроссовки</h1>
				<div className='w-30'>
					<SearchBtn />
				</div>
			</div>
		</div>
	)
}

export default MainContentHeader
