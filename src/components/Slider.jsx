import { Carousel } from 'antd'

const Slider = () => {
	return (
		<>
			<Carousel arrows autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
				<div className='slider-container'>
					<div className='sliderLeft'>
						<div className='sliderLogo'>
							<img src='/public/img/logo_slider.png' alt='' />
						</div>
						<div className='slider_p'>
							<p style={{ color: '#A5D364' }}>Stan Smith,</p>
							<p style={{ color: '#000' }}>Forever!</p>
						</div>
						<button id='sliderBtn' className='sliderBtnStyle'>
							Купить
						</button>
					</div>
					<div className='sliderRight'>
						<img src='/public/img/frog_slider.png' alt='' />
					</div>
				</div>

				<div className='slider-container'>
					<div className='sliderLeft'>
						<div className='sliderLogo'>
							<img src='/public/img/logo_slider.png' alt='' />
						</div>
						<div className='slider_p'>
							<p style={{ color: '#A5D364' }}>skdjfghsdfgkjhfdsg</p>
							<p style={{ color: '#000' }}>3423463246!</p>
						</div>
						<button id='sliderBtn' className='sliderBtnStyle'>
							Купить
						</button>
					</div>
					<div className='sliderRight'>
						<img src='/public/img/frog_slider.png' alt='' />
					</div>
				</div>

				<div className='slider-container'>
					<div className='sliderLeft'>
						<div className='sliderLogo'>
							<img src='/public/img/logo_slider.png' alt='' />
						</div>
						<div className='slider_p'>
							<p style={{ color: '#A5D364' }}>23234235</p>
							<p style={{ color: '#000' }}>asdfasdfadf!</p>
						</div>
						<button id='sliderBtn' className='sliderBtnStyle'>
							Купить
						</button>
					</div>
					<div className='sliderRight'>
						<img src='/public/img/frog_slider.png' alt='' />
					</div>
				</div>
			</Carousel>
		</>
	)
}

export default Slider
