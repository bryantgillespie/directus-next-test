import BlockHero from "./blocks/hero";
import BlockTeam from "./blocks/team";
export default function PageBuilder({ blocks }) {
    const mapping = {
        'block_hero': BlockHero,
        'block_team': BlockTeam
    }
	return (
		<div>
            {blocks.map((block, index) => {
                const BlockComponent = mapping[block.collection] ?? BlockHero;
                return <BlockComponent key={index} data={block.item} />
            })}
		</div>
	);
}
