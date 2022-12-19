import './App.css';
import Movie from './Movie';
import MovieJson from './movies.json';

import PageWrpper from './PageWrapping';

function App() {

	let movies = MovieJson;

	

	return (

		<PageWrpper>

			{movies.map(movie =>
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

		</PageWrpper>


	)

}

export default App;