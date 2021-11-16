<script>
	import data from '../data';

	let movies = data.movies;
</script>

<h1>{data.name}</h1>
<button
	on:click={() => {
		movies = movies.sort((a, b) => {
			return a.year - b.year;
		});
	}}>Sort by year descending</button
>
<button
	on:click={() => {
		movies = movies.sort((a, b) => {
			return b.year - a.year;
		});
	}}>Sort by year ascending</button
>
<ul>
	{#each movies as movie}
		<li>
			<b>{movie.name}</b> | <span class="year">{movie.year}</span> | {data.actors.find((actor) => actor.id == movie.lead_id)
				.name}
		</li>
	{/each}
</ul>
<style>
    li {
        list-style: square;
       
    }

    .year {
        color: red;
        font-weight:900;
    }

</style>