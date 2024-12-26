import Tests from '@/container/Tests';
import { getTests } from '@/service';

export const metadata = {
  title: '시험목록'
}

const TestsPage = async() => {
  const tests = await getTests();
  return (
    <Tests tests={tests} />
  );
}

export default TestsPage;

