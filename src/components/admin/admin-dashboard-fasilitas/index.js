import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { deleteFasilitas, getAllFasilitas } from '../../../services/api';

const DashboardFasilitas = () => {
	const [refresh, setRefresh] = useState(false);
	const [data, setData] = useState([]);

	const deleteData = (id) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				deleteFasilitas(id).then(() => {
					setRefresh(!refresh);
					Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
				});
			}
		});
	};

	const fetchApi = async () => {
		getAllFasilitas().then((response) => setData(response.data));
	};

	useEffect(() => {
		fetchApi();
	}, [refresh]);

	return (
		<div style={{ paddingTop: '30px' }}>
			<div>
				<h2>Tabel Fasilitas</h2>
			</div>
			<Table striped bordered hover responsive>
				<thead>
					<tr>
						<th>id</th>
						<th>Nama Fasilitas</th>
						<th>Gambar</th>
						<th>id Gedung</th>
						<th>Penjelasan</th>
						<th>Update</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item) => (
						<tr>
							<td>{item.idFasilitas}</td>
							<td>{item.namaFasilitas}</td>
							<td style={{ maxWidth: '40rem' }}>
								<img src={item.image} style={{ maxWidth: '15rem' }} />
							</td>
							<td>{item.idGedung}</td>

							<td>{item.penjelasan}</td>

							<td>
								{' '}
								<Button
									variant="warning"
									as={Link}
									to={`/UPerVR/admin/dashboard/update-fasilitas/${item.idFasilitas}`}
									id={item.idFasilitas}
								>
									Update
								</Button>{' '}
							</td>
							<td>
								{' '}
								<Button
									variant="danger"
									onClick={() => {
										deleteData(item.idFasilitas);
									}}
								>
									Delete
								</Button>{' '}
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default DashboardFasilitas;
