import React from 'react';
import bg from '../../assets/img/footer.jpg';
import logo from '../../assets/img/logo-white.png';

const Footer = () => {
	return (
		<>
			<div
				style={{
					backgroundImage: `url(${bg})`,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					height: '330px',
				}}
			>
				<img
					src={logo}
					width="190rem"
					style={{ margin: '0px 40px' }}
					alt="LogoUPER"
				></img>
				<p
					style={{
						width: '19rem',
						color: 'white',
						textAlign: 'left',
						margin: '40px 0 40px 40px',
					}}
				>
					<b style={{ fontSize: '20px' }}>REKTORAT</b>
					<br></br>
					<br></br>
					Jl. Teuku Nyak Arief, RT.7/RW.8, Simprug, Kec. Kby. Lama, Kota Jakarta
					Selatan, Daerah Khusus Ibukota Jakarta 12220
					<br></br>
					<br></br>
					Pusat Informasi:
					<br></br>
					+62 812-1149-9919
					<br></br>
					(021) 50857540
					<br></br>
					info@universitaspertamina.ac.id
				</p>
			</div>
			<div
				style={{
					backgroundColor: 'rgba(8, 73, 153)',
					height: '3rem',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<p
					style={{
						color: 'white',
						textAlign: 'center',
						margin: '40px 0 40px 40px',
					}}
				>
					© 2021 Universitas Pertamina. All Rights Reserved
				</p>
			</div>
		</>
	);
};

export default Footer;
