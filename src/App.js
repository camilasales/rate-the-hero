import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import { NormalizeStyles } from './shared/NormalizeStyles';
import { Search } from './screens/Search';
import { Details } from './screens/Details';
import { NotFound } from './screens/NotFound';
export function App() {
	return (
		<BrowserRouter>
      <Routes>
				<Route path="/detalhes/:id" element={<Details/>}></Route>
				<Route path="/pesquisa" element={<Search/>}></Route>
				<Route path="*" element={<NotFound/>}>Página não encontrada</Route>

      </Routes>
		</BrowserRouter>
	);
}

export default App;