function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1>你好，我是 <span className="highlight">张三</span></h1>
          <p className="subtitle">全栈开发工程师 | 技术爱好者</p>
          <p className="description">
            热衷于构建优秀的 Web 应用，不断探索新技术。
            专注于前端开发和后端服务，致力于打造高效、优雅的代码解决方案。
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">查看我的项目</a>
            <a href="#contact" className="btn btn-secondary">联系我</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="avatar">
            👨‍💻
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
