import CourseCard from "../../Components/Card/Card";
import "./dashboard.css";
import courses from "../../Data/Courses";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

function Dashboard() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <div className="dashboard-container">
        {courses.map((course, index) => (
          <div className="card-container" key={index}>
            <CourseCard
              image={course.image}
              instructor={course.instructor}
              title={course.title}
              duration={course.duration}
              price={course.price}
              level={course.level}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;