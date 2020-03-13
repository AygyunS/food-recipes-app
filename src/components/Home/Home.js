import React from 'react';

import LastFoods from '../LastFoods/LastFoods'
import data from '../data/data';
import { Link } from 'react-router-dom';


const food = data.filter(item => {
	const selectedIdFood = 3;
	return item.id === String(selectedIdFood);
})[0];


const layOutFood = (food) => {
	let foodTitle = food.name;
	return (
		<div key={foodTitle}>
			<Link to={`/foods/${food.id}`}>
				<h1>{foodTitle}</h1>
			</Link>
			<div>
				<div>
					<Link to={`/foods/${food.id}`}>
						<img src={food.imageURL} alt={foodTitle} />
					</Link>
					<div>
						{food.information.map((info, index) => {
							return (
								<div key={index}>
									<ul>
										<li>{info.date}</li>
										<li>{info.type}</li>
										<li>{info.difficulty}</li>
										<li>{info.time}</li>
									</ul>
								</div>
							);
						})}
					</div>
					<span>
						<Link to={`/foods/${food.id}`}>
							<span>See full recipe</span>
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
};


const Home = () => {
	return (
		<div>
			<h2>Home</h2>
			<div>
				{layOutFood(food)}
				<h2>Last recipes</h2>
				<LastFoods />
			</div>
		</div>
	);
}

export default Home;
