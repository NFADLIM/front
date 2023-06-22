import React from 'react';
import { Card } from 'react-bootstrap';
import bg from '../../../assets/img/bg-upce.png';

const ExplainCard = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				margin: '40px',
			}}
		>
			<h1 style={{ marginRight: '90px', textAlign: 'left', color: 'white' }}>
				VIRTUAL <br></br> TOUR
			</h1>
			<Card
				style={{
					width: '55rem',
					border: '10px solid #E4372A',
					borderRadius: '10px',
				}}
			>
				<Card.Body
					style={{
						textAlign: 'left', fontWeight: 'bold', fontSize: "18px",
					}}
				>
					<p>
						Selamat datang di Virtual Tour Universitas Pertamina. Anda dapat menggunakan
						mouse atau langsung menggunakan tangan untuk mengendalikan virtual tour. 
						Penjelasan pengendalian lebih jelasnya, berada di bawah virtual tour. <br />
						.
					</p>
					<p></p>
				</Card.Body>
			</Card>
		</div>
	);
};

export default ExplainCard;
