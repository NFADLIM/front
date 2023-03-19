import React from 'react';
import { Card } from 'react-bootstrap';

const InfoOddCard = (props) => {
	return (
		<Card className="oddInfoCard">
			<img
				src={props.img}
				style={{
					maxWidth: '50%',
					width: '100rem',
					borderRadius: '20px',
					border: '3px solid white',
				}}
			/>

			<Card.Body>
				<b
					style={{
						color: '#0057B1',
						fontSize: '18px',
					}}
				>
					{props.nama}
				</b>
				<br />
				<div>
					<p>{props.exp}</p>
				</div>
			</Card.Body>
		</Card>
	);
};

export default InfoOddCard;
