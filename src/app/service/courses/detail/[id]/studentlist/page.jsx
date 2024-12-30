import CourseDetailStudentList from '@/container/CourseDetailStudentList';
import { getTest, getCourse } from '@/service';

export const metadata = {
  title: '수강생 목록'
}

const CourseDetailStudentListPage = async({params}) => {
  const id = (await params).id;
  const course_name = await getCourse(id).subjectName;
  return (
    <CourseDetailStudentList course_name={course_name} />
  );
}

export default CourseDetailStudentListPage;