import { FC } from 'react';

const WrapperV: FC = (props) => {
	return (
		<div
			style={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{props.children}
		</div>
	);
};

export default WrapperV;
