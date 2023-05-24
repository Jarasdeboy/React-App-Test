import logo from './logo.png';
import './App.css';

function App() {
	return (
		<div className='Contenedor'>
			<header className='header'>
				<nav className='nav-bar'>
					<ul className='lista-options txthead'>
						<li><a>Home</a></li>
						<li><a>About</a></li>
						<li><a>Team</a></li>
						<li><a>Contact</a></li>
					</ul>
				</nav>
			</header>
			<section className='section'>
				<div className='user-info'>
					<div className='box-user-info'>
						<div className='box-info'></div>
					</div>
					<div className='box-user-img'></div>
				</div>
			</section>
			<footer className='footer'>
				<h1>Soy Footer</h1>
			</footer>
		</div>
	);
}

export default App;
