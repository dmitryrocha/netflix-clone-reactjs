import './App.css';
import Row from './Row';
import request from './request';

function App() {
  return (
    <div className="App">
      <h1>teste</h1>
      <Row title='Originais Netflix' fetchURL={request.fetchNetflixOriginals} />
      <Row title='Tendências' fetchURL={request.fetchTrending} />
    </div>
  );
}

export default App;
