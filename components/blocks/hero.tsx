export default async function BlockHero({ data }) {
	return (
		<div>
            <h1>Hero Block</h1>
            <pre>{JSON.stringify(data, null, 4)}</pre>
		</div>
	);
}
