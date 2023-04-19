import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="App">
			<header>
				<h1> Code share </h1>
			</header>
			<main className="show-components">
				<section className="menu component">
					<button className="selected"> Latest </button>
					<button> Best </button>
					<button> Upload new </button>
				</section>
				<hr />

				<div className="component">

					<section className="framed">
						<span className="intro">
							The latest snippets from coders like you!
						</span>
					</section>

					<section>
						<div className="vote">
							<code>let x=5;</code>
							<div className="vote-buttons">
								<button className="vote">🗑️</button>
								<button className="vote">✍️</button>
								<button className="vote">👍</button>
								<button className="vote">👎</button>
								<span className="score">5</span>
							</div>
						</div>

						<div className="vote">
							<textarea className="code" rows="4" value="let y = 8;" />
							<div className="vote-buttons">
								<button className="vote">✔️</button>
								<button className="vote">❌</button>
							</div>
						</div>


						<div className="vote">
							<code>
				// Get a button
								let btn = document.querySelector('&amp;my-button')
							</code>
							<div className="vote-buttons">
								<button className="vote">🗑️</button>
								<button className="vote">✍️</button>
								<button className="vote">👍</button>
								<button className="vote">👎</button>
								<span className="score">25</span>
							</div>
						</div>
					</section>
					<hr />
				</div>


				<div className="component">
					<section className="framed">
						<span className="intro">
							The most upvoted snippets from the community!
						</span>
					</section>
					(same design as "latest" tab)
					<hr />
				</div>


				<div className="component">
					<section className="framed">
						<span className="intro">
							Upload a new code snippet to the cloud!
						</span>
					</section>
					<section className="form">
						<label htmlFor="i1"> Title </label>
						<input id="i1" type="text" />

							<label htmlFor="i2"> Content </label>
							<textarea id="i2" rows="8" value="" />

							<button disabled> Upload </button>
					</section>
				</div>

			</main>
		</div>
	)
}

export default App
