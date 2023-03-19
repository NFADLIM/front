import React from 'react';
import { Card, Stack } from 'react-bootstrap';

const TutorialCard = () => {
	return (
		<div className="cardTutorial">
			<Card.Body className="cardBodyTutorial">
				<Stack gap={3} direction="horizontal">
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="white"
							class="bi bi-badge-vr"
							viewBox="0 0 16 16"
							style={{ width: '8rem' }}
						>
							<path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
							<path d="M4.508 11h1.429l1.99-5.999H6.61L5.277 9.708H5.22L3.875 5.001H2.5L4.508 11zm6.387-5.999H8.5V11h1.173V8.763h1.064L11.787 11h1.327L11.91 8.583C12.455 8.373 13 7.779 13 6.9c0-1.147-.773-1.9-2.105-1.9zm-1.222 2.87V5.933h1.05c.63 0 1.05.347 1.05.989 0 .633-.408.95-1.067.95H9.673z" />
						</svg>
						<br></br>
						<b style={{ fontSize: '20px' }}>
							Virtual Tour <br /> Tutorial
						</b>
					</div>
					<div className="vr" />
					<div>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								class="bi bi-chevron-bar-contract"
								viewBox="0 0 16 16"
								style={{ width: '4rem' }}
							>
								<path
									fill-rule="evenodd"
									d="M3.646 14.854a.5.5 0 0 0 .708 0L8 11.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708zm0-13.708a.5.5 0 0 1 .708 0L8 4.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zM1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8z"
								/>
							</svg>
							<p>Klik panah untuk berpindah lompat ke tempat lain</p>
						</div>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								class="bi bi-arrows-fullscreen"
								viewBox="0 0 16 16"
								style={{ width: '4rem' }}
							>
								<path
									fill-rule="evenodd"
									d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"
								/>
							</svg>
							<p>Klik icon dikanan atas untuk fullscreen</p>
						</div>
					</div>
					<div>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								class="bi bi-arrows-move"
								viewBox="0 0 16 16"
								style={{ width: '4rem' }}
							>
								<path
									fill-rule="evenodd"
									d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10zM.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8z"
								/>
							</svg>
							<p>Klik dan geser untuk melihat sekitar</p>
						</div>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								style={{ width: '4rem' }}
								fill="currentColor"
								class="bi bi-arrow-down-up"
								viewBox="0 0 16 16"
							>
								<path
									fill-rule="evenodd"
									d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
								/>
							</svg>
							<p>Scroll keatas dan kebawah untuk melakukan zoom</p>
						</div>
					</div>
				</Stack>
			</Card.Body>
		</div>
	);
};

export default TutorialCard;
