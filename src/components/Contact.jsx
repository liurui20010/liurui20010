function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">联系我</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>如果你有任何问题或合作意向，欢迎通过以下方式联系我：</p>
            <div className="contact-methods">
              <div className="contact-item">
                <span className="icon">📧</span>
                <div>
                  <h4>邮箱</h4>
                  <p>your.email@example.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">🐙</span>
                <div>
                  <h4>GitHub</h4>
                  <p>@yourusername</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">💼</span>
                <div>
                  <h4>LinkedIn</h4>
                  <p>/in/yourname</p>
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="你的姓名" required />
            <input type="email" placeholder="你的邮箱" required />
            <textarea rows="5" placeholder="你的消息" required></textarea>
            <button type="submit" className="btn btn-primary">发送消息</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
