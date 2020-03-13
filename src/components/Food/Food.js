import React, { Fragment } from 'react';
import data from '../data/data';
import { Link } from 'react-router-dom';

const theData = food => {
	let keysName = Object.keys(food);
	let foodTitle = food.name;

	return (
		<div key={foodTitle}>
			<Link to="/foods">Go back to Food page</Link>
			<h1>{foodTitle}</h1>
			<div>
				<div>
					<img src={food.imageURL} alt={foodTitle} />
					<div>
						<ul>
							{food.information.map((info, index) => {
								return (
									<React.Fragment key={index}>
										<li>{info.date}</li>
										<li>{info.type}</li>
										<li>{info.difficulty}</li>
										<li>{info.time}</li>
									</React.Fragment>
								);
							})}
						</ul>
					</div>
				</div>
			</div>

			<div>
				<h3>{keysName[2]}</h3>
				<ul>
					{food.ingredients.map((info, index) => {
						return (
							<React.Fragment key={index}>
								<li key={index}>
									<div>{info.name}</div>
									<div>{info.quantity}</div>
								</li>
							</React.Fragment>
						);
					})}
				</ul>
			</div>

			<div>
				<h3>{keysName[3]}</h3>
				<ol>
					{food.steps.map((info, index) => {
						return <li key={index}>{info}</li>;
					})}
				</ol>
			</div>
		</div>
	);
};

const Food = props => {
	const food = data.filter(item => {
		return item.id === props.match.params.id;
	})[0];

	return (
		<Fragment>
			<div>{theData(food)}</div>
		</Fragment>
	);
};

export default Food;
