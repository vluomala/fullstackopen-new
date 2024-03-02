const Header = ({course}) => {
    return (
      <div>
        <h2>{course}</h2>
      </div>
    )
  }
  
  const Part = ({part}) => {
    return (
      <div>
        <p>
          {part.name} {part.exercises}
        </p>
      </div>
    )
  }
  
  const Content = ({parts}) => {
    console.log("Content parts: ", parts);
    return (
      <div>
        {parts.map((part) => (        
            <Part part={part} key={part.name}/>
        ))}
      </div>
    )
  }
  
  const Total = ({parts}) => {
    const total = parts.reduce((total, part) => {
      console.log('const total', total, part)
      return total + part.exercises; 
    },0);
  
    return (
      <div>
        <h3>Number of exercises {total}</h3>
      </div>
    )
  }
  
  const Course = ({course}) => {
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    )
  }
  
  const Courses = ({courses}) => {
    console.log(courses);
    return (
      <div>
        <h1>Web Development curriculumn</h1>
        {courses.map(course =>  <Course key={course.id} course={course} />)};
      </div>
    )
  }

  export default Courses;