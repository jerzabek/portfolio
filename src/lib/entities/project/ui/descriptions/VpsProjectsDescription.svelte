<script>
	import { css } from 'styled-system/css';

	const diagramImageStyles = css({ mx: 'auto', maxWidth: '700px', width: '100%', height: 'auto' });
</script>

<div
	class={css({
		display: 'flex',
		flexDirection: 'column',
		gap: '4'
	})}
>
	<p>
		As a kid I spent my time playing video games with my friends, and from time to time we would
		play something together that required a multiplayer server of our own. Whether it was hosting a
		Minecraft server and port forwarding the family router, or running a VPN using Hamachi to play 7
		Days to Die, I had a great interest in running software and making it available to others.
	</p>
	<p>
		During my later teens this want turned into a need when I was offered payment to develop a
		moderation bot for Discord. I understood the most basic concept of a VPS but I had zero
		experience setting up a firewall, managing SSH access or using services such as Cloudflare.
		However for about 7 euros a month I rented a small VPS with 4 GB of RAM and 4 vCPUs and got to
		work.
	</p>
	<p>
		I made the Discord bot using Java and Discord4J then ran it on the VPS. That's it. Nothing but
		keyless SSH, FTP and one application running on the root user.
	</p>
	<p>
		After many years of experimenting with different hosting providers, services, going through high
		school and university, I learned a thing or two.
	</p>
	<p>
		Right now my server, nick named Kesidi after the serbian alt-rock band Buč Kesidi, looks like
		this:
	</p>

	<div class={css({ _dark: { display: 'none' } })}>
		<img src="/images/vps-diagram.webp" alt="Self managed VPS diagram" class={diagramImageStyles} />
	</div>

	<div class={css({ display: 'none', _dark: { display: 'block' } })}>
		<img
			src="/images/vps-diagram-dark.webp"
			alt="Self managed VPS diagram"
			class={diagramImageStyles}
		/>
	</div>

	<p>
		Root user disabled, proper firewall setup, secure SSH access in place, two-factor authentication
		enabled where possible and necessary, regular updates and backups, observability,
		discoverability, scalability, caching, common security practices, continuous integration and
		deployment, documentation et cetera.
	</p>
	<p>
		Most of these keywords are the bare minimum for secure and reliable public facing
		infrastructure, even though there are a million more, making this setup astonishingly simple—yet
		at this scale it very wall may be enough.
	</p>

	<p>As they say,</p>

	<div class={css({ pl: '8', py: '2', fontSize: 'xl' })}>
		<cite>"Za koga je, dobro je"</cite>
	</div>

	<p>
		Which translates to <em>"For whom it is, it is good"</em>.
	</p>

	<p>
		It is a continuous effort maintaining and improving such a setup, but it has plenty of benefits
		which make app development and deployment much easier and more enjoyable.
	</p>
	<p>
		Certainly if anything, this is a great learning experience and an extremely entertaining hobby.
	</p>
</div>
