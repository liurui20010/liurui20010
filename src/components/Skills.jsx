const skills = [
  { category: "前端开发", items: ["React", "Vue.js", "TypeScript", "HTML5/CSS3", "JavaScript(ES6+)"] },
  { category: "后端开发", items: ["Node.js", "Express", "Python", "Django/Flask", "RESTful API"] },
  { category: "数据库", items: ["MySQL", "MongoDB", "PostgreSQL", "Redis"] },
  { category: "工具与部署", items: ["Git", "Docker", "Nginx", "Linux", "CI/CD"] },
  { category: "其他技能", items: ["UI/UX 设计", "问题排查", "团队协作", "文档编写"] }
]

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">我的技能</h2>
        <div className="skills-grid">
          {skills.map((category, index) => (
            <div key={index} className="skill-card">
              <h3>{category.category}</h3>
              <ul className="skills-list">
                {category.items.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
