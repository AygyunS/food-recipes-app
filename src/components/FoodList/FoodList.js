import React from 'react';
import data from '../data/data';
import { Link } from 'react-router-dom';


const layOutFoods = data.map(food => {
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
});

class FoodList extends React.Component {
	render() {
		return (
			layOutFoods
		);
	}
}

export default FoodList;
