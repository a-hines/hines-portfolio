import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Nighthawk',
			description:
                'A side-scroll game created in a team-stting utizling a RESTful API we created.',
            image: 'nighthawk.png',
			technologies: [
				'RESTful API',
				'JavaScript',
				'Handlebars.js',
				'MySQL',
				'Sequelize',
				'Heroku',
			],
			github: 'https://github.com/Patrickgp/video-game',
			deployed: 'https://fast-ridge-15962.herokuapp.com/',
		},
		{
			name: 'NoFomo',
			description:
                'A rental app for not-your-everyday-items from boats to bouncy castels.',
			image: 'nofomo.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Bootstrap',
				'React',
				'Redux',
                'MongoDB',
                'Mongoose',
                'Express',
                'and more!'
			],
			github: 'https://github.com/Patrickgp/nofomo',
			deployed: 'https://shrouded-eyrie-44498.herokuapp.com/',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
