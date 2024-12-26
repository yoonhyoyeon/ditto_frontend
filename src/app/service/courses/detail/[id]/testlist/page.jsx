import CourseDetailTestList from '@/container/CourseDetailTestList';
import { getTest, getCourse } from '@/service';

export const metadata = {
  title: '시험 목록'
}

const CourseDetailTestListPage = async({params}) => {
  const id = (await params).id;
  const course_name = await getCourse(id);
  const tests = await getTest(id);
  return (
    <CourseDetailTestList course_name={course_name} tests={tests}/>
  );
}

export default CourseDetailTestListPage;