import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <Cards/>
      <audio id="audio" src="./starwars.mp3" preload="none" controls></audio>
    </div>
  );
}

export default App;
