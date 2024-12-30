import CourseDetailHome from '@/container/CourseDetailHome';
import { getTest, getCourse } from '@/service';

export const metadata = {
  title: '과목 상세 페이지'
}

const CourseDetailHomePage = async({params}) => {
  const id = (await params).id;
  const course_name = await getCourse(id).subjectName;
  console.log(course_name);
  const tests = await getTest(id);
  console.log(tests);


  return (
    <CourseDetailHome tests={tests} course_name={course_name} course_id={id}/>
  );
}

export default CourseDetailHomePage;