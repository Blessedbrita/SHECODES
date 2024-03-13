import "./styles.css";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
      <h2></h2>

      <footer>This project is coded by {""}
        <a href="https://github.com/Blessedbrita">Blessed</a>,
        open-sourced on {""}
        <a href="https://github.com/Blessedbrita/SHECODES/tree/master">GitHub</a> {""}
        and hosted on Netlify
      </footer>
    </div>
  );
}
