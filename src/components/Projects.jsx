const projects = [
  {
    title: "个人博客系统",
    description: "使用 React + Node.js 开发的个人博客平台，支持文章管理、评论功能和暗黑模式。",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#"
  },
  {
    title: "待办事项应用",
    description: "简洁高效的任务管理工具，支持本地存储、分类管理和数据统计。",
    tech: ["JavaScript", "CSS3", "LocalStorage"],
    github: "#",
    demo: "#"
  },
  {
    title: "天气查询应用",
    description: "基于第三方 API 的天气查询应用，显示实时天气和天气预报。",
    tech: ["React", "API Integration", "CSS Grid"],
    github: "#",
    demo: "#"
  },
  {
    title: "电商网站原型",
    description: "功能完善的电商平台前端原型，包含商品展示、购物车和结算流程。",
    tech: ["Vue.js", "Vuex", "Element UI"],
    github: "#",
    demo: "#"
  }
]

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">项目展示</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={project.github} className="btn btn-small" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={project.demo} className="btn btn-small btn-primary" target="_blank" rel="noopener noreferrer">演示</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
