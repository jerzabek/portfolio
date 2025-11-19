<script>
	import { css } from 'styled-system/css';
</script>

<div
	class={css({
		display: 'flex',
		flexDirection: 'column',
		gap: '4'
	})}
>
	<p>
		Having a four day long weekend gave me the perfect opportunity to finally update my portfolio
		website, which had previously been unattended for six whole years!
	</p>
	<p>
		When I get a burst of willpower to write a new app, if it is not large, complex or overly
		important I often choose a new language or framework I've never worked with in order to gain
		some experience and insight. This time around I decided to toy with Svelte and SvelteKit.
	</p>
	<p>
		I setup a blank Svelte project using the CLI scaffolding tool <code>sv</code> and added Panda CSS.
		As with any website, the difficult part is finding a good design. I scouted awwwards for ideas, chatted
		with AI tools to see what they had in mind, or in RAM rather. Finally I found some motivation and
		started prompting Copilot to help me both speed up the whole process and simplify work considering
		I am entirely unfamiliar with Svelte.
	</p>
	<p>
		You are looking at the results of that effort, I think it turned out pretty well, if I do say so
		myself.
	</p>
	<h3 class={css({ fontWeight: 'bold', fontSize: '2xl', mt: '4' })}>Tech stack</h3>
	<ul class={css({ listStyleType: 'disc', pl: '8', spaceY: '2' })}>
		<li>Svelte</li>
		<li>SvelteKit</li>
		<li>Panda CSS</li>
		<li>Containerized using Docker</li>
		<li>Deployed using Docker Compose and Traefik on my own VPS</li>
	</ul>
</div>
