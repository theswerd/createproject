const data: Data = {
	name: 'Bond',
	movies: [
		{ name: 'Dr. No', year: 1962, lead_id: 5, rating: 95 },
		{ name: 'From Russia with Love', year: 1963, lead_id: 5, rating: 95 },
		{ name: 'Goldfinger', year: 1964, lead_id: 5, rating: 99 },
		{ name: 'Thunderball', year: 1965, lead_id: 5, rating: 87 },
		{ name: 'You Only Live Twice', year: 1967, lead_id: 5, rating: 73 },
		{ name: "On Her Majesty's Secret Service", year: 1969, lead_id: 6, rating: 81 },
		{ name: 'Diamonds Are Forever', year: 1971, lead_id: 5, rating: 64 },
		{ name: 'Live and Let Die', year: 1973, lead_id: 3, rating: 65 },
		{ name: 'The Man with the Golden Gun', year: 1971, lead_id: 3, rating: 39 },
		{ name: 'The Spy Who Loved Me', year: 1977, lead_id: 3, rating: 81 },
		{ name: 'Moonraker', year: 1979, lead_id: 3, rating: 60 },
		{ name: 'For Your Eyes Only', year: 1981, lead_id: 3, rating: 72 },
		{ name: 'Octopussy', year: 1983, lead_id: 3, rating: 75 },
		{ name: 'A View to a Kill', year: 1985, lead_id: 3, rating: 81 },
		{ name: 'The Living Daylights', year: 1987, lead_id: 4, rating: 74 },
		{ name: 'Licence to Kill', year: 1989, lead_id: 4, rating: 78 },
		{ name: 'GoldenEye|Golden Eye', year: 1995, lead_id: 2, rating: 79 },
		{ name: 'Tomorrow Never Dies', year: 1997, lead_id: 2, rating: 81 },
		{ name: 'The World Is Not Enough', year: 1999, lead_id: 2, rating: 72 },
		{ name: 'Die Another Day', year: 2002, lead_id: 2, rating: 82 },
		{ name: 'Casino Royale', year: 2006, lead_id: 1, rating: 83 },
		{ name: 'Quantum of Solace', year: 2008, lead_id: 1, rating: 81 },
		{ name: 'Skyfall', year: 2012, lead_id: 1, rating: 79 },
		{ name: 'Spectre', year: 2015, lead_id: 1, rating: 76 },
		{ name: 'No Time to Die', year: 2016, lead_id: 1, rating: 79 }
	],
	actors: [
		{ name: 'Daniel Craig', id: 1 },
		{ name: 'Pierce Brosnan', id: 2 },
		{ name: 'Roger Moore', id: 3 },
		{ name: 'Timothee Dalton', id: 4 },
		{ name: 'Sean Connery', id: 5 },
		{ name: 'George Lazenby', id: 6 }
	]
};

interface Data {
	name: string;
	movies: Movie[];
	actors: Actor[];
}

interface Movie {
	name: string;
	year: number;
	lead_id: number;
	rating: number;
}

interface Actor {
	name: string;
	id: number;
}

export default data;
