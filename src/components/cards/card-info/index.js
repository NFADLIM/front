import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const InfoCard = (props) => {
	return (
		<Card className="cardInfo">
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
				<Button
					variant="success"
					className="CardButton w-100"
					as={Link}
					to={`/facilities/${props.id}`}
					key={props.id}
					params={props}
				>
					{props.nama}
				</Button>
			</Card.Body>
		</Card>
	);
};

export default InfoCard;
