import Courses from '@/container/Courses';
import { getCourses } from '@/service';

export const metadata = {
  title: '과목목록'
}

const CoursesPage = async () => {
  const courses = await getCourses();
  
  return (
    <Courses courses={courses} />
  );
}

export default CoursesPage;