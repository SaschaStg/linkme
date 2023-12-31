import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
    return (
        <div className="app">
            <Header />
            {/* App Body */}
            <div className="app__body">
                <Sidebar />
                <Feed />
            </div>
            {/* Feed */}
            {/* Widgets */}
        </div>
    );
}

export default App;
