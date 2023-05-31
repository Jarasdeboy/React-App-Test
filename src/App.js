import logo from './logo.png';
import './App.css';

function App() {
	const rutaImagen = 'https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/d188e82e3328502aba1161b3/young-confident-woman-with-natural-light-make-up-holding-hands-waist-looking-left-empty-copy-space-staring-logo-smiling-standing-white-wall1.png';

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
						<div className='box-info zoom-in-out-box'>
							<div className='BigText'>How to Get Consulting Clients</div>
						</div>
						<p className='parrafoUser'>Nibh venenatis cras sed felis eget velit aliquet sagittis id. Tellus pellentesque eu tincidunt tortor aliquam nulla.</p>
						<p className='subparrafo'> Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like. He an thing rapid these after going drawn or. Timed she his law the spoil round defer. </p>
						<a href="#" className='BtnReadme link-animado'>read more</a>
					</div>
					<div className='box-user-img'>
						<img className='ImagenP' src ={rutaImagen} alt="Jaime foto"/>
					</div>
				</div>
			</section>
			<section className='footer'>
				
			</section>
		</div>
	);
}

export default App;
