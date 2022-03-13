import { Text } from '@chakra-ui/react';

interface BioProps {
	content: string;
}
const Bio = ({ content }: BioProps) => {
	return <Text dangerouslySetInnerHTML={{ __html: content }} lineHeight='1.7'></Text>;
};

export default Bio;
