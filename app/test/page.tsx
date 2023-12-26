import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'

export async function generateMetadata (parent: ResolvingMetadata): Promise<Metadata> {
	const parentMeta = await parent

	return { ...parentMeta, title: 'Test page' }
}

function Page () {
	return (
		<div>
			<h1>Test page</h1>
			<p>In dev mode everything works. During build error will happen here</p>
		</div>
	)
}

export default Page
