interface BarsContent {
	name: string,
}


function SectionBar ({name}: BarsContent) {
	return (
		<div>
			<div>
				<p>{name}</p>
			</div>
		</div>
	);
}

export default SectionBar;
