import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import { NormalizeStyles } from './shared/NormalizeStyles';
import { Search } from './screens/Search';
import { Details } from './screens/Details';
import { NotFound } from './screens/NotFound';
import { Header } from './common-components/Header/Header';
export function App() {
	return (
		<BrowserRouter>
		<Header></Header>
		<Routes>
					<Route path="/" element={<Search/>}></Route>
					<Route path="/detalhes/:id" element={<Details/>}></Route>
					<Route path="*" element={<NotFound/>}>Página não encontrada</Route>

		</Routes>
		</BrowserRouter>
	);
}

export default App;