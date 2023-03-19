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
						link="https://kuula.co/share/collection/7vj4f?logo=1&card=1&info=1&fs=1&vr=1&zoom=1&thumbs=3&margin=8&alpha=0.60&inst=0"
					/>
				</Container>
			</div>
			{/* <div className="redBgDivHomePage">
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
			</div> */}
			<Container
				fluid="sm"
				className="container"
				style={{ paddingBottom: '25px' }}
			>
				<TutorialCard />
			</Container>

			{/* <div className="grayBgDivHomePage">
				<Container fluid="sm" className="container">
					<div className="areaCardDiv">
						{area.map((item) => (
							<AreaCard
								key={item.idGedung}
								bg={item.image}
								name={item.namaGedung}
								id={item.idGedung}
							/>
						))}
					</div>
				</Container>
			</div> */}

			<Container fluid="sm" className="container">
				<hr className="hrLine" />
			</Container>

			{/*nyari cara supaya mappingnya bisa masuk kedalam component card*/}
		</>
	);
};

export default HomePage;
