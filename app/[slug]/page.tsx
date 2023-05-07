import directus from '../../lib/directus';
import PageBuilder from '../../components/page-builder';
import { notFound } from 'next/navigation';

async function getPage(slug) {
	try {
		const { data: pages} = await directus.items('pages').readByQuery({
            filter: {
                slug: {
                    _eq: slug
                }
            },
            limit: 1,
            fields: ['title', 'slug', 'blocks','blocks.*.*.*']
        });

		return pages[0]
	} catch (error) {
		notFound();
	}
}

export default async function DynamicPage({ params }) {
	const page = await getPage(params.slug);
	return (
		<div>
			{/* <h1>{page.title}</h1> */}
            {/* <pre>{JSON.stringify(page, null, 4)}</pre> */}
            <PageBuilder blocks={page.blocks} />
		</div>
	);
}
