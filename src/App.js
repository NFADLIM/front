import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import {
	AreaPage,
	HomePage,
	Login,
	AdminPage,
	AddGedungPage,
	AddFasilitasPage,
	UpdateFasilitas,
	UpdateGedung,
} from './pages';
import ProtectedRoute from './route/protected-route';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/Area/:namaGedung/:id" element={<AreaPage />} />
				<Route path="/UPerVR/admin/login" element={<Login />} />
				<Route element={<ProtectedRoute />}>
					<Route path="/UPerVR/admin/dashboard" element={<AdminPage />} />
					<Route
						path="/UPerVR/admin/dashboard/add-gedung"
						element={<AddGedungPage />}
					/>
					<Route
						path="/UPerVR/admin/dashboard/add-fasilitas"
						element={<AddFasilitasPage />}
					/>
					<Route
						path="/UPerVR/admin/dashboard/update-fasilitas/:id"
						element={<UpdateFasilitas />}
					/>
					<Route
						path="/UPerVR/admin/dashboard/update-gedung/:id"
						element={<UpdateGedung />}
					/>
				</Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
