import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './components/layout/MainPage'
import AccountPage from './components/layout/AccountPage'
import FavPage from './components/layout/FavPage'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/account' element={<AccountPage />} />
				<Route path='/favorites' element={<FavPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
