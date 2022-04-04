import Link from 'next/link';
import IconMail from 'src/components/icons/IconMail';
import IconGit from 'src/components/icons/IconGit';
import Stack from 'src/components/layout/Stack';

const Footer = () => {
	return (
		<Stack
			justifyContent='space-around'
			alignItems='center'
			backgroundColor='black'
			width='100%'
			p={0}
			m={0}
			fontSize='0.8rem'
		>
			<a href='https://github.com/artursem' rel='noopener noreferrer' target='_blank'>
				<Stack
					flex={1}
					direction='row'
					alignItems='center'
					height={50}
					color='gray.400'
					_hover={{ color: 'gray.100' }}
					transition='color 0.3s ease-in'
				>
					<IconGit />
					<p>github.com/artursem</p>
				</Stack>
			</a>
		</Stack>
	);
};

export default Footer;
