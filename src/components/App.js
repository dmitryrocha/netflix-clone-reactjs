import '../style/App.css';
import Row from './Row';
import Banner from './Banner';
import request from '../request';
import NavBar from "./NavBar";

function App() {
  return (
    <div className="app">

        <NavBar />
        <Banner />

        <Row title='Originais Netflix' fetchURL={request.fetchNetflixOriginals} isLargeRow/>
        <Row title='Tendências' fetchURL={request.fetchTrending} />
        <Row title='Mais Votados' fetchURL={request.fetchTopRated} />
        <Row title='Filmes de Ação' fetchURL={request.fetchActionMovies} />
        <Row title='Filmes de Comédia' fetchURL={request.fetchComedyMovies} />
        <Row title='Filmes de Horror' fetchURL={request.fetchHorrorMovies} />
        <Row title='Filmes Românticos' fetchURL={request.fetchRomanceMovies} />
        <Row title='Documentários' fetchURL={request.fetchDocumantaries} />
    </div>
  );
}

export default App;
