import Link from 'next/link'

export default function RootLayout ({ children }) {
	return (
		<html>
		<head/>
		<body>
		<nav>
			<Link href={'/'}>Home</Link><br/>
			<Link href={'/test'}>Test</Link>
		</nav>
		{children}
		</body>
		</html>
	)
}
