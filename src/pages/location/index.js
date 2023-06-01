import React, { useState, useEffect } from 'react';
import {
	VRTour,
	TutorialCard,
	GedungCard,
	FasilitasCard,
} from '../../components';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import bg from '../../assets/img/bg-sc.png';
import { getAllFasilitas, getGedungById } from '../../services/api';
import { isValidURL } from '../../helpers';

const AreaPage = () => {
	const [gedung, setGedung] = useState([]);
	const [fasilitas, setFasilitas] = useState([]);
	const params = useParams();

	const fetchApi = async (id) => {
		getGedungById(id).then((response) => {
			setGedung(response.data);
		});

		getAllFasilitas().then(({ data }) => {
			setFasilitas(data.filter(f => f.idGedung == params.id));
		});
	};

	useEffect(() => {
		fetchApi(params.id);
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, [params]);

	return (
		<>
			<div
				style={{
					backgroundImage: `url(${bg})`,
					backgroundPosition: 'center top',
					backgroundRepeat: 'no-repeat',
					backgroundSize: '100% 80%',
					border: 'none',
				}}
			>
				<Container fluid="sm" className="container">
					<GedungCard
						name={gedung.namaGedung}
						img={gedung.gambar}
						exp={gedung.penjelasan}
					/>
					{ isValidURL(gedung.linkTour) ? <VRTour style={{ zIndex: '1' }} link={gedung.linkTour} /> : '' }
				</Container>
			</div>
			<Container fluid="sm" className="container">
				<TutorialCard />
			</Container>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexWrap: 'wrap',
				}}
				className="grayBgDivHomePage"
			>
				<Container
					fluid="sm"
					className="container"
					style={{ justifyContent: 'space-between' }}
				>
					{fasilitas.map((item, index) => (
						<FasilitasCard
							nama={item.namaFasilitas}
							exp={item.penjelasan}
							img={item.gambar}
							id={item.idFasilitas}
							index={index}
						/>
					))}
				</Container>
			</div>
		</>
	);
};

export default AreaPage;
