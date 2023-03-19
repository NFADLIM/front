import React, { useState, useEffect } from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import logo from '../../assets/img/logo-decorated.png';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { getAllGedung } from '../../services/api';
const Header = () => {
	const isLogin = Cookies.get('token');
	const [refresh, setRefresh] = useState(false);
	const [area, setArea] = useState([]);
	const navigate = useNavigate();

	const fetchApi = async () => {
		await getAllGedung().then((response) => setArea(response.data));
	};
	useEffect(() => {
		fetchApi();
	}, [refresh]);

	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			variant="dark"
			style={{ backgroundColor: '#135CB2', height: '6em' }}
		>
			<img
				src={logo}
				alt="logo"
				style={{ position: 'relative', width: '21em', height: '6em' }}
			/>
			<Container fluid>
				<Navbar id="navbar-nav" style={{ position: 'relative' }}>
					<Nav className="me-auto navStyle">
						<Nav.Link as={Link} to="/" className="navLink">
							<p className="navLink-p">Home</p>
						</Nav.Link>

						{/* <NavDropdown
							title="Area"
							id="collasible-nav-dropdown"
							className="navLink"
							onClick={() => setRefresh(!refresh)}
						>
							{area.map((item) => (
								<NavDropdown.Item
									key={item.id}
									as={Link}
									to={`/Area/${item.namaGedung}/${item.id}`}
									name={item.namaGedung}
									params={item}
								>
									<p>{item.namaGedung}</p>
								</NavDropdown.Item>
							))}
						</NavDropdown> */}

						<Nav.Link
							href="https://universitaspertamina.ac.id/"
							target="_blank"
							className="navLink"
						>
							<p className="navLink-p">UPER</p>
						</Nav.Link>
						<Nav.Link
							href="https://pmb.universitaspertamina.ac.id/"
							target="_blank"
							className="navLink"
						>
							<p className="navLink-p">Daftar Sekarang!</p>
						</Nav.Link>
						{isLogin ? (
							<>
								<NavDropdown
									title="Admin"
									id="collasible-nav-dropdown"
									className="navLink"
								>
									<NavDropdown.Item as={Link} to="/UPerVR/admin/dashboard">
										<p>Dashboard</p>
									</NavDropdown.Item>
									<NavDropdown.Item
										onClick={() => {
											Cookies.remove('token');
											navigate('/UPerVR/admin/login');
										}}
									>
										<p>Logout</p>
									</NavDropdown.Item>
								</NavDropdown>
							</>
						) : (
							<></>
						)}
					</Nav>
				</Navbar>
			</Container>
		</Navbar>
	);
};

export default Header;
