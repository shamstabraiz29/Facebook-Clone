import { StoryCard } from './StoryCard';

const stories = [
	{
		name: 'Ali',
		src: 'https://links.papareact.com/4u4',
		profile: 'https://links.papareact.com/zvy',
	},
	{
		name: 'Ali',
		src: 'https://links.papareact.com/xql',
		profile: 'https://links.papareact.com/4u4',
	},
	{
		name: 'Ali',
		src: 'https://links.papareact.com/k2j',
		profile: 'https://links.papareact.com/f0p',
	},
	{
		name: 'Ali',
		src: 'https://links.papareact.com/xql',
		profile: 'https://links.papareact.com/snf',
	},
	{
		name: 'Ali',
		src: 'https://links.papareact.com/4u4',
		profile: 'https://links.papareact.com/zvy',
	},
];

export const Stories = () => {
	return (
		<div className='flex justify-center space-x-3 mx-auto'>
			{stories.map((story, index) => {
				return (
					<StoryCard
						key={index}
						name={story.name}
						src={story.src}
						profile={story.profile}
					/>
				);
			})}
		</div>
	);
};
