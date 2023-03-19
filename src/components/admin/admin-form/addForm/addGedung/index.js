import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { addGedung } from '../../../../../services/api';

const AddGedungForm = () => {
	const [idGedung, setIdGedung] = useState('');
	const [namaGedung, setNamaGedung] = useState('');
	const [penjelasan, setPenjelasan] = useState('');
	const [gambar, setGambar] = useState('');
	const [linkTour, setLinkTour] = useState('');
	const navigate = useNavigate();
	const [validated, setValidated] = useState(false);

	const modalSuccess = () => {
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Add Gedung Success',
			showConfirmButton: false,
			timer: 1300,
		});
	};
	const modalError = () => {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Add Gedung Failed',
			showConfirmButton: false,
			timer: 1300,
		});
	};

	const Submit = (idGedung, namaGedung, penjelasan, gambar, linkTour) => {
		console.log(namaGedung);
		const bodyJSON = {
			idGedung: idGedung,
			namaGedung: namaGedung,
			penjelasan: penjelasan,
			gambar: gambar,
			linkTour: linkTour,
		};
		return addGedung(bodyJSON);
	};

	const handleSubmit = async (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			setValidated(true);
			event.preventDefault();
			await Submit(idGedung, namaGedung, penjelasan, gambar, linkTour)
				.then(() => {
					modalSuccess();
					setTimeout(() => navigate('/UPerVR/admin/dashboard'), 1300);
				})
				.catch(() => modalError());
		}
	};

	return (
		<div style={{ padding: '150px 0' }}>
			<div style={{ paddingBottom: '60px' }}>
				<h3 style={{ float: 'left', textDecoration: 'underline' }}>
					TAMBAH GEDUNG
				</h3>
			</div>

			<Form noValidate validated={validated} onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="validationnamaGedung">
					<Form.Label style={{ float: 'left' }}>id Gedung :</Form.Label>
					<Form.Control
						placeholder="id"
						aria-label="id"
						aria-describedby="basic-addon2"
						value={idGedung}
						onChange={(e) => setIdGedung(e.target.value)}
						required
					/>
					<Form.Control.Feedback type="invalid">
						Nama Gedung Kosong!
					</Form.Control.Feedback>
				</Form.Group>

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
						value={gambar}
						onChange={(e) => setGambar(e.target.value)}
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
						ADD
					</Button>{' '}
					<Button variant="danger" as={Link} to={`/UPerVR/admin/dashboard`}>
						Cancel
					</Button>{' '}
				</div>
			</Form>
		</div>
	);
};

export default AddGedungForm;
