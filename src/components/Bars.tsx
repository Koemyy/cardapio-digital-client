import {Property} from 'csstype';
import Color = Property.Color;
import BarsSection from './BarsSection';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Link from 'next/link';

interface BarsSection {
    name: string,
    cor: Color,
}

function Bars({name, cor}: BarsSection) {
	return (
		<div className="py-5 inline-block hover:text-xl ease-in-out duration-300 cursor-pointer">
			<Link href = {`#${name}`}>
				<p style={{textDecorationColor: cor}} className="text-white-300 px-2 underline underline-offset-8 md:text-xl">{name}</p>
			</Link>
		</div>
	);
}

export default Bars;
