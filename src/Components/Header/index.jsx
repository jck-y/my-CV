const Header = () => {
    return(
        <header className="l-header" id="header">
    <nav className="nav bd-container">
      <a href="#" className="nav_logo">Jacky</a>
      <div className="nav_menu" id="nav-menu">
        <ul className="nav_list">
        <li className="nav_item">
          {/* eslint-disable-next-line react/no-unknown-property */}
          <a href="#home" className="nav_link" activeLink="true">
            <i className="bx bx-home" />Home
          </a>
        </li>
          <li className="nav_item">
            <a href="#profile" className="nav_link">
              <i className="bx bx-user" />Profile
            </a>
          </li>
          <li className="nav_item">
            <a href="#education" className="nav_link">
              <i className="bx bx-book nav_icon" />Education
            </a>
          </li>
          <li className="nav_item">
            <a href="#skills" className="nav_link">
              <i className="bx bx-receipt nav_icon" />skill
            </a>
          </li>
          <li className="nav_item">
            <a href="#experience" className="nav_link">
              <i className="bx bx-briefcase-alt nav_icon" />Experience
            </a>
          </li>
          <li className="nav_item">
            <a href="#certificates" className="nav_link">
              <i className="bx bx-award nav_icon" />Certificates
            </a>
          </li>
        </ul>
      </div>
      <div className="nav_toggle" id="nav-toggle">
        <i className="bx bx-grid-alt" />
      </div>
    </nav>
  </header>
    )
}

export default Header;