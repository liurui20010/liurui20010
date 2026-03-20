import { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <a href="#" className="logo">MyPortfolio</a>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>首页</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>关于</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>技能</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>项目</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>联系</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
