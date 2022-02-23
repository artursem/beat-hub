import { FC } from 'react';
// MOVE TO .ENV
import ListArtists from '../../models/listArtists';

const OptionList = ({ id, name }: ListArtists) => {
	return (
		<li>
			<b>{name}</b>
			<br />
			<i>{id}</i>
		</li>
	);
};

export default OptionList;
