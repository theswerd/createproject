<script>
	import data from '../data';
	const base_movies = data.movies;
	let movies = base_movies;

	let selected_bond;

	let sorts = [
		{
			name: 'year descending',
			sort: (a, b) => b.year - a.year
		},
		{
			name: 'year ascending',
			sort: (a, b) => a.year - b.year
		},
		{
			name: 'name descending',
			sort: (a, b) => b.name.localeCompare(a.name)
		},
		{
			name: 'name ascending',
			sort: (a, b) => a.name.localeCompare(b.name)
		},
		{
			name: 'rating descending',
			sort: (a, b) => b.rating - a.rating
		},
		{
			name: 'rating ascending',
			sort: (a, b) => a.rating - b.rating
		}
	];

	let selected_sort = 0;
	$: {
		console.log('ran');
		movies = base_movies
			.filter((movie) => {
				console.log('filter', selected_bond);
				if (selected_bond == 'all') {
					return true;
				} else {
					return movie.lead_id == selected_bond;
				}
			})
			.sort(sorts[selected_sort].sort);
	}
</script>

<h1>{data.name}</h1>
<select bind:value={selected_sort}>
	{#each sorts as sort, index}
		<option value={index}>{sort.name}</option>
	{/each}
</select>

<!-- <button
	on:click={()=>{
		movies = base_movies.sort((movie1, movie2) => {
			return movie1.lead_id - movie2.lead_id;
		});
	}}> Sort by Lead Bond</button> -->
<select bind:value={selected_bond}>
	<optgroup>

	<option selected value="all">All</option>
	</optgroup>
	<optgroup>

	{#each data.actors as actor}
		<option value={actor.id}>{actor.name}</option>
	{/each}
	</optgroup>
</select>
<ul>
	{#each movies as movie}
		<li>
			<b>{movie.name}</b> | <span class="year">{movie.year}</span> | {data.actors.find(
				(actor) => actor.id == movie.lead_id
			).name} | {movie.rating}
		</li>
	{/each}
</ul>

<style>
	li {
		list-style: square;
	}

	.year {
		color: red;
		font-weight: 900;
	}
</style>
