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
import { getAllFasilitas, getFasilitasById, getGedungById } from '../../services/api';

export default function Fasilitas() {
	const [fasilitas, setFasilitas] = useState([]);
	const params = useParams();

	const fetchApi = async (id) => {
        const { data: fasilitas } = await getFasilitasById(id)
		
        setFasilitas(fasilitas);
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
						name={fasilitas.namaFasilitas}
						img={fasilitas.gambar}
						exp={fasilitas.penjelasan}
					/>
					<VRTour style={{ zIndex: '1' }} link={fasilitas.linkTour} />
				</Container>
			</div>
			<Container fluid="sm" className="container">
				<TutorialCard />
			</Container>
		</>
	);
};
