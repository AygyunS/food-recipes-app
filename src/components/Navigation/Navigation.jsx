import React from 'react';
import './Navigation.css';

import Navbar from '../Navbar/Navbar'
import About from '../About/About';
import Home from '../Home/Home';
import Food from '../Food/Food';
import FoodList from '../FoodList/FoodList';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function Navigation() {
	return (
		<Router>
			<div>
				<Navbar />
				<hr />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/foods" exact component={FoodList}/>
					<Route path="/foods/:id" component={Food} />
					<Route render={() => <h1>404: page not found</h1>} />
				</Switch>

			</div>
			<Navbar />

		</Router>
	);
}
