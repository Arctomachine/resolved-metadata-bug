/** Add your relevant code here for the issue to reproduce */
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Home',
}
export default function Home () {
	return (
		<div>
			<h1>Home page</h1>
			<p>In dev mode everything works. During build error will happen in test
				page</p>
		</div>
	)
}
