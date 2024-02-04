import Link from "next/link";

export default function Page() {
	return (
		<>
			<h1>F4 Page</h1>
			<div><Link href="/f1/f3">F3</Link></div>
			<div><Link href="/about">About</Link></div>
		</>
	);
}