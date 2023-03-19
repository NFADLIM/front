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
					border: '3px solid #E4372A',
					backgroundImage: `url(${bg})`,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					borderRadius: '20px',
				}}
			>
				<Card.Body
					style={{
						color: 'white',
						textAlign: 'left',
					}}
				>
					<p>
						Selamat datang di Universitas Pertamina. Kamu dapat menggunakan
						mouse atau langsung menggunakan tangan. Geser layar untuk melihat
						sekitar. Gunakan klik kiri mouse untuk melihat-lihat. Tekan secara
						bersamaan untuk memperbesar dan memperkecil. <br />
						Universitas Pertamina merupakan kampus swasta non-kedinasan yang
						berada di bawah naungan Yayasan Pertamina. Universitas Pertamina
						didirikan pada tahun 2016. Universitas Pertamina saat ini memiliki 6
						Fakultas dan 15 Program Studi strata 1 dan berlokasi di Jl. Teuku
						Nyak Arief, RT.7/RW.8, Simprug, Kec. Kby. Lama, Kota Jakarta
						Selatan.
					</p>
					<p></p>
				</Card.Body>
			</Card>
		</div>
	);
};

export default ExplainCard;
