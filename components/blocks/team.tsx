export default async function BlockTeam({ data }) {
	return (
		<div>
            <h1>Team Block</h1>
            <pre>{JSON.stringify(data, null, 4)}</pre>
		</div>
	);
}
