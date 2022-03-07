import React from 'react';
import { Slide } from 'react-slideshow-image';
import classes from './index.module.css';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
	{
		url: 'https://www.w3schools.com/howto/img_mountains_wide.jpg',
		title: 'image1',
	},
	{
		url: 'https://www.w3schools.com/howto/img_snow_wide.jpg',
		title: 'image2',
	},
	{
		url: 'https://www.w3schools.com/howto/img_nature_wide.jpg',
		title: 'image3',
	},
];

const properties = {
	duration: 5000,
	transitionDuration: 500,
	infinite: true,
	indicators: true,
	arrows: true,
	pauseOnHover: true,
	autoplay: false,
	easing: 'ease',
};

const SlideShow = () => {
	return (
		<section className={classes['promotion']}>
			<div className={classes['slide-container']}>
				<Slide {...properties}>
					{slideImages.map((image, index) => (
						<div key={index} className={classes['each-slide']}>
							<img src={image.url} alt={image.title} />
						</div>
					))}
				</Slide>
			</div>
		</section>
	);
};

export default SlideShow;
