import Bars from './Bars';
import {Carousel} from 'react-responsive-carousel';

interface SectionBars {
    bars: BarsContent[],
}

interface BarsContent {
    name: string,
    cor: string,
}

function BarsSection({bars}: SectionBars) {
	return (
		<div>
			<Carousel autoPlay={true}>
				{
					bars.map((bars, index) => {
						return (
							<Bars key={index} name={bars.name} cor={bars.cor}/>
						);
					})
				}
			</Carousel>
		</div>
	);
}

export default BarsSection;
