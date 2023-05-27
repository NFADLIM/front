import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { AreaCard, TutorialCard, ExplainCard, VRTour } from '../../components';
import { getAllGedung } from '../../services/api';

const HomePage = () => {
	const [area, setArea] = useState([]);

	const fetchApi = async () => {
		getAllGedung().then((response) => setArea(response.data));
	};
	useEffect(() => {
		fetchApi();
	}, []);
	return (
		<>
			<div className="blueBgDivHomePage">
				<Container fluid="sm" className="container">
					<ExplainCard />
					<VRTour
						style={{ zIndex: '1' }}
						link="https://kuula.co/share/collection/7vB1h?logo=1&card=1&info=1&logosize=40&fs=1&vr=1&zoom=1&sd=1&initload=0&autorotate=0.3&autop=50&autopalt=1&thumbs=0&alpha=0.60"
					/>
				</Container>
			</div>
			{ <div className="redBgDivHomePage">
				<h2
					style={{
						color: 'white',
						writingMode: 'tb-rl',
						transform: 'rotate(180deg)',
						fontSize: '50px',
						textAlign: 'center',
					}}
				>
					GEDUNG UNIVERSITAS PERTAMINA
				</h2>
			</div> }
			<Container
				fluid="sm"
				className="container"
				style={{ paddingBottom: '25px' }}
			>
				<TutorialCard />
			</Container>

			{ <div className="grayBgDivHomePage">
				<Container fluid="sm" className="container">
					<div className="areaCardDiv">
						{area.map((item) => (
							<AreaCard
								key={item.idGedung}
								bg={item.gambar}
								name={item.namaGedung}
								id={item.idGedung}
							/>
						))}
					</div>
				</Container>
			</div> }

			<Container fluid="sm" className="container">
				<hr className="hrLine" />
			</Container>

			{/*nyari cara supaya mappingnya bisa masuk kedalam component card*/}
		</>
	);
};

export default HomePage;
