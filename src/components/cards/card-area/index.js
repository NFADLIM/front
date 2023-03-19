import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AreaCard = (props) => {
	return (
		<Card className="CardArea">
			<Card.Body
				style={{
					backgroundImage: `url("${props.bg}")`,
				}}
				className="CardBodyArea"
			>
				<Button
					variant="success"
					className="CardButton"
					as={Link}
					to={`/Area/${props.name}/${props.id}`}
					key={props.id}
					params={props}
				>
					{props.name}
				</Button>
			</Card.Body>
		</Card>
	);
};

export default AreaCard;
