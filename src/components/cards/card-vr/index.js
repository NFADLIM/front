import React from 'react';
import { Carousel } from 'react-bootstrap';

const VRTour = (props) => {
	return (
		<div>
			{/* <div id="carouselExampleFade" class="carousel slide carousel-fade">
				<div class="carousel-inner">
					<div class="carousel-item active">
						<iframe
							src={props.link}
							allow="xr-spatial-tracking; gyroscope; accelerometer"
							allowFullScreen="true"
							frameBorder={'0'}
							className="VRCard"
							scrolling="no"
						></iframe>
					</div>
					<div class="carousel-item">
						<iframe
							src={props.link}
							allow="xr-spatial-tracking; gyroscope; accelerometer"
							allowFullScreen="true"
							frameBorder={'0'}
							className="VRCard"
							scrolling="no"
						></iframe>
					</div>
					<div class="carousel-item">
						<iframe
							src={props.link}
							allow="xr-spatial-tracking; gyroscope; accelerometer"
							allowFullScreen="true"
							frameBorder={'0'}
							className="VRCard"
							scrolling="no"
						></iframe>
					</div>
				</div>
				<button
					class="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleFade"
					data-bs-slide="prev"
				>
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button
					class="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleFade"
					data-bs-slide="next"
				>
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div> */}
			<iframe
				src="https://kuula.co/share/collection/7vB1h?logo=1&card=1&info=1&logosize=40&fs=1&vr=1&zoom=1&sd=1&initload=0&autorotate=0.3&autop=50&autopalt=1&thumbs=0&alpha=0.60"
				allow="xr-spatial-tracking; gyroscope; accelerometer"
				allowFullScreen="true"
				frameBorder={'0'}
				className="VRCard"
				scrolling="no"
			></iframe>
			{/* <Carousel fade className="carousel-main">
				<Carousel.Item className="carousel-vr">
					<iframe
						src="https://kuula.co/share/collection/7vB1h?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1"
						allow="xr-spatial-tracking; gyroscope; accelerometer"
						allowFullScreen="true"
						frameBorder={'0'}
						className="VRCard"
						scrolling="no"
					></iframe>
				</Carousel.Item>
				<Carousel.Item className="carousel-vr">
					<iframe
						src="https://kuula.co/share/collection/7F5CF?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1"
						allow="xr-spatial-tracking; gyroscope; accelerometer"
						allowFullScreen="true"
						frameBorder={'0'}
						className="VRCard"
						scrolling="no"
					></iframe>
				</Carousel.Item>
				<Carousel.Item className="carousel-vr">
					<iframe
						src="https://kuula.co/share/collection/7F5Cv?logo=1&info=1&fs=1&vr=1&zoom=1&sd=1&initload=0&thumbs=3"
						allow="xr-spatial-tracking; gyroscope; accelerometer"
						allowFullScreen="true"
						frameBorder={'0'}
						className="VRCard"
						scrolling="no"
					></iframe>
				</Carousel.Item>
				<Carousel.Item className="carousel-vr">
					<iframe
						src="https://kuula.co/share/collection/7F5C9?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1"
						allow="xr-spatial-tracking; gyroscope; accelerometer"
						allowFullScreen="true"
						frameBorder={'0'}
						className="VRCard"
						scrolling="no"
					></iframe>
				</Carousel.Item>
				<Carousel.Item className="carousel-vr">
					<iframe
						src="https://kuula.co/share/collection/7F5Cf?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1"
						allow="xr-spatial-tracking; gyroscope; accelerometer"
						allowFullScreen="true"
						frameBorder={'0'}
						className="VRCard"
						scrolling="no"
					></iframe>
				</Carousel.Item>
				<Carousel.Item className="carousel-vr">
					<iframe
						src="https://kuula.co/share/collection/7F5CG?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1"
						allow="xr-spatial-tracking; gyroscope; accelerometer"
						allowFullScreen="true"
						frameBorder={'0'}
						className="VRCard"
						scrolling="no"
					></iframe>
				</Carousel.Item>
				<Carousel.Item className="carousel-vr">
					<iframe
						src="https://kuula.co/share/collection/7F5C0?logo=0&info=1&fs=1&vr=1&sd=1&thumbs=1"
						allow="xr-spatial-tracking; gyroscope; accelerometer"
						allowFullScreen="true"
						frameBorder={'0'}
						className="VRCard"
						scrolling="no"
					></iframe>
				</Carousel.Item>
			</Carousel> */}
		</div>
	);
};

export default VRTour;
