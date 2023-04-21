import Home, {useEffect} from "./components/home/home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App container" id="home_page">
            <div id="main"><Home/></div>
        </div>
    );
}

export default App;
