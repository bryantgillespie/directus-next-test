import directus from '../lib/directus';

type Globals = {
    title?: string;
    description?: string;
}

async function getGlobals() {
	const { data } = await directus.items('globals').readByQuery();
	return data as Globals;
}

export default async function HomePage() {
	const global = await getGlobals();
	return (
		<div>
			<h1>{global.title}</h1>
			<p>{global.description}</p>
		</div>
	);
}
