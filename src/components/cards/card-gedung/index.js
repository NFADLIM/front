import React from 'react';
import { Card } from 'react-bootstrap';

const GedungCard = (props) => {
	return (
		<Card
			style={{
				backgroundColor: '#C1D340',
				borderRadius: '20px',
				width: '85rem',
				margin: '40px 0px',
			}}
		>
			<Card.Body style={{ display: 'flex' }}>
				<div>
					<h1 style={{ color: 'white' }}>{props.name}</h1>
					<div
						style={{
							backgroundColor: 'white',
							width: '35rem',
							height: '18rem',
							borderRadius: '20px',
							margin: '10px 50px 0px 25px',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							padding: '100px',
							color: '#6B7280',
						}}
					>
						<h5>{props.exp}</h5>
					</div>
				</div>
				<div>
					<img
						src={props.img}
						width="100%"
						style={{
							border: '3px solid #0057B1',
							borderRadius: '20px',
							boxShadow: '10px 10px 15px -4px rgba(0,0,0,0.67)',
						}}
					/>
				</div>
			</Card.Body>
		</Card>
	);
};

export default GedungCard;
