import { Page } from '../../components/layout/Page';
import { Text } from '@chakra-ui/layout';

export default function Overview() {
  return (
    <Page
      title="Latest writings"
      heading="Find the latest of my writings here."
    >
      <Text fontSize="md" cy={4}>
        so much content...
      </Text>
    </Page>
  );
}