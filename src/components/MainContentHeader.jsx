import { Input } from 'antd'

function MainContentHeader() {
	return (
		<div className=''>
			<div className='d-flex justify-between align-center'>
				<h1>Все кроссовки</h1>
				<div className='w-30'>
					<Input.Search placeholder='Поиск' variant='filled' />
				</div>
			</div>
		</div>
	)
}

export default MainContentHeader
