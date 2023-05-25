import logo from './logo.png';
import './App.css';

function App() {
	const rutaImagen = 'https://scontent.fslw1-1.fna.fbcdn.net/v/t31.18172-8/21125532_1489758431063173_6890971843348264248_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=Qcnp3zl2_7EAX8TvYPZ&_nc_ht=scontent.fslw1-1.fna&oh=00_AfDdSagTtXLZX-bgl8SqjUUoKPNReVP37kYm_tVDZppXrQ&oe=649668BF';

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
						<div className='box-info'>
							<div className='BigText'>How to be a Lego Manager</div>
						</div>
						<p className='parrafoUser'>You need to have a big dick to satisfy lego girls.</p>
					</div>
					<div className='box-user-img'>
						<img className='ImagenP' src ={rutaImagen} alt="Jaime foto"/>
					</div>
				</div>
			</section>
			<footer className='footer'>
				<h1>Soy Footer</h1>
			</footer>
		</div>
	);
}

export default App;
