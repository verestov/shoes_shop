import { Link } from 'react-router-dom'

export const EmptyState = ({
	title,
	subtitle1,
	subtitle2,
	imageSrc = '/img/emptyOrders.png',
	backLink = '/',
}) => {
	return (
		<div className='emptyCartAccount'>
			<div className='emptyCartContentAccount'>
				<img width={70} height={70} src={imageSrc} alt='Empty State' />
				<h2>{title}</h2>
				{subtitle1 && <span>{subtitle1}</span>}
				{subtitle2 && <span>{subtitle2}</span>}
			</div>
			<Link to={backLink}>
				<button className='accountButton'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='lucide lucide-move-left'
					>
						<path d='M6 8L2 12L6 16' />
						<path d='M2 12H22' />
					</svg>
					<p>Вернуться назад</p>
				</button>
			</Link>
		</div>
	)
}
