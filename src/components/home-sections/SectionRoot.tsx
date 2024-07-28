export default function SectionRoot({children}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="flex flex-col">
			{children}
		</div>
	);
}