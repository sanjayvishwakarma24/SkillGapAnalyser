import "./CareerRoadmap.css";
function CareerRoadmap() {
  const roadmap = [
    {
      step: "01",
      title: "Strengthen JavaScript",
      description:
        "Improve JavaScript fundamentals, ES6+, asynchronous programming, and DOM concepts.",
      duration: "2 Weeks",
    },
    {
      step: "02",
      title: "Master React.js",
      description:
        "Build practical React projects and learn components, hooks, state management, and APIs.",
      duration: "3 Weeks",
    },
    {
      step: "03",
      title: "Learn Backend Development",
      description:
        "Build a foundation in Node.js, REST APIs, authentication, and server-side development.",
      duration: "4 Weeks",
    },
    {
      step: "04",
      title: "Practice Database & SQL",
      description:
        "Learn relational databases, SQL queries, database design, and CRUD operations.",
      duration: "2 Weeks",
    },
  ];

  return (
    <section className="career-roadmap" id="career-roadmap">
      <div className="roadmap-header">
        <div>
          <h2>Personalized Career Roadmap</h2>
          <p>
            A recommended learning path based on your current skill gaps.
          </p>
        </div>
      </div>

      <div className="roadmap-list">
        {roadmap.map((item) => (
          <div className="roadmap-item" key={item.step}>
            <div className="roadmap-step">{item.step}</div>

            <div className="roadmap-content">
              <div className="roadmap-title">
                <h3>{item.title}</h3>
                <span>{item.duration}</span>
              </div>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CareerRoadmap;