
import { useEffect, useState } from 'react';
import './App.css';
import Movie from './Movie';
import Pageing from './Pageing';
import PageWrpper from './PageWrapping';




function App() {

	const [ currentPage, setCurrentPage ] = useState(1);
	const [movie, setMovies ] = useState([]);
	
	useEffect(()=>{
		searchMovie();
	},[]);


	let timesPerPage = 2;
	

	const  searchMovie = async () => {
		let url= 'https://lucasmoy.dev/data/react/peliculas.json';

	let result = await fetch (url, {
			"method": 'GET',
			"mode":'no-cors',
			"headers":{
				"Accept": 'application/json',
				"Content-Type": 'application/json'
			}
		})
	let json = await result.json();
		setMovies(json)
		
	}
	
	const getTotalPages = () =>{
			let total = movie.length
			return Math.ceil(total/timesPerPage)
		}

		
			let moviePerPage = movie.slice(
			(currentPage -1 ) * timesPerPage,
			currentPage * timesPerPage
		)

	return (

		<PageWrpper>

			{moviePerPage.map(movie =>
				<Movie

					title={movie.titulo}
					rating={movie.calificacion}
					director={movie.director }
					runTime={movie.duracion }
					date={movie.fecha }
					stars= {movie.actores }
					descripcion={movie.descripcion}
					img = {movie.img}
					 />
			)}

			<Pageing page={currentPage} total={getTotalPages()} onChange={(page) => {
				
				setCurrentPage(page);
			}}  />

			

		</PageWrpper>


	);

} 

export default App;