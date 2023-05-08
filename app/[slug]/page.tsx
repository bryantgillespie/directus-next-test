import directus from '../../lib/directus';
import PageBuilder from '../../components/page-builder';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const { data: pages } = await directus.items('pages').readByQuery({
        fields: ['slug'],
    });

    return pages.map((page) => ({
        params: {
            slug: page.slug,
        },
    }));
}

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

export default async function DynamicPage({ params } : { params: { slug: string } }) {
	const page = await getPage(params.slug);
	return (
		<div>
            <PageBuilder blocks={page.blocks} />
		</div>
	);
}
