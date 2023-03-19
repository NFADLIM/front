import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getGedungById, updateGedung } from '../../../../../services/api';

const UpdateGedungForm = () => {
	const [data, setData] = useState([]);
	const params = useParams();
	const [namaGedung, setNamaGedung] = useState('');
	const [penjelasan, setPenjelasan] = useState('');
	const [image, setImage] = useState('');
	const [linkTour, setLinkTour] = useState('');
	const navigate = useNavigate();
	const [validated, setValidated] = useState(false);

	const modalSuccess = () => {
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Update Gedung Success',
			showConfirmButton: false,
			timer: 1300,
		});
	};
	const modalError = () => {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Update Gedung Failed',
			showConfirmButton: false,
			timer: 1300,
		});
	};

	const Submit = (namaGedung, penjelasan, image, linkTour) => {
		console.log (namaGedung);
		const bodyJSON = {
			namaGedung: namaGedung,
			penjelasan: penjelasan,
			gambar: image,
			linkTour: linkTour,
		};
		return updateGedung(params.id, bodyJSON);
	};

	const handleSubmit = async (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			setValidated(true);
			event.preventDefault();
			await Submit(namaGedung, penjelasan, image, linkTour)
				.then(() => {
					modalSuccess();
					setTimeout(() => navigate('/UPerVR/admin/dashboard'), 1300);
				})
				.catch(() => modalError());
		}
	};

	const fetchApi = async () => {
		getGedungById(params.id).then((response) => setData(response.data));
	};

	useEffect(() => {
		fetchApi();
		setNamaGedung(data.namaGedung);
		setPenjelasan(data.penjelasan);
		setImage(data.gambar);
		setLinkTour(data.linkTour);
	}, [data.idGedung]);

	return (
		<div style={{ padding: '150px 0' }}>
			<div style={{ paddingBottom: '60px' }}>
				<h3 style={{ float: 'left', textDecoration: 'underline' }}>
					UPDATE GEDUNG
				</h3>
			</div>
			<Form noValidate validated={validated} onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="validationnamaGedung">
					<Form.Label style={{ float: 'left' }}>Nama Gedung :</Form.Label>
					<Form.Control
						placeholder="tempat"
						aria-label="tempat"
						aria-describedby="basic-addon2"
						value={namaGedung}
						onChange={(e) => setNamaGedung(e.target.value)}
						required
					/>
					<Form.Control.Feedback type="invalid">
						Nama Gedung Kosong!
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="validationPenjelasanGedung">
					<Form.Label style={{ float: 'left' }}>Penjelasan Gedung :</Form.Label>
					<Form.Control
						placeholder="tempat ini digunakan untuk ..."
						aria-label="tempat"
						aria-describedby="basic-addon2"
						value={penjelasan}
						onChange={(e) => setPenjelasan(e.target.value)}
						required
					/>
					<Form.Control.Feedback type="invalid">
						Penjelasan Gedung Kosong!
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="validationPenjelasanGedung">
					<Form.Label style={{ float: 'left' }}>Lik VR Gedung :</Form.Label>
					<Form.Control
						placeholder="kuula.com"
						aria-label="tempat"
						aria-describedby="basic-addon2"
						value={linkTour}
						onChange={(e) => setLinkTour(e.target.value)}
						required
					/>
					<Form.Control.Feedback type="invalid">
						Link VR Gedung Kosong!
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="validationGambarGedung">
					<Form.Label style={{ float: 'left' }}>Gambar Gedung :</Form.Label>
					<Form.Control
						type="text"
						required
						value={image}
						onChange={(e) => setImage(e.target.value)}
					/>{' '}
					<Form.Control.Feedback type="invalid">
						Gambar Gedung Kosong!
					</Form.Control.Feedback>
				</Form.Group>
				<div
					className="addGroup"
					style={{ justifyContent: 'space-evenly', paddingTop: '25px' }}
				>
					<Button variant="primary" type="submit">
						Update
					</Button>{' '}
					<Button variant="danger" as={Link} to={`/UPerVR/admin/dashboard`}>
						Cancel
					</Button>{' '}
				</div>
			</Form>
		</div>
	);
};

export default UpdateGedungForm;
