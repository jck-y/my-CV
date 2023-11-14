const Main = () => {
    return(
<div>
<main className="l-main bd-container">
  <div className="resume">
    <div className="resume_left">
      <section className="home" id="home">
        <div className="home_container section bd-grid">
          <div className="home_data bd-grid">
            <img src="/profile.jpg" alt className="home_img" />
            <h1 className="home_tittle">Jacky Karongkong</h1>
            <h3 className="home_profession">Student</h3>
          </div>
          <div className="home_address bd-grid">
            <span className="home_information">
              <i className="bx bx-map " /> Jl. Minahasa 5, Kec. Kalawat,
              Kabupaten Minahasa Utara, Sulawesi Utara
            </span>
            <span className="home_information">
              <i className="bx bx-envelope " /> j13karongkong@gmail.com
            </span>
            <span className="home_information">
              <i className="bx bx-phone " /> +628-5157-809772
            </span>
          </div>
        </div>
        {/* <i className="bx bx-moon change-theme" title="theme" id="theme-button" onClick={themeButton} /> */}
      </section>
      <section className="social section">
  <h2 className="secition-title">Social</h2>
  {/* <div className="social_container bd-grid">
    <a href="https://www.instagram.com/jckyy.kg/" target="_blank" className="social_link">
      <i className="bx bxl-instagram social_icon" />@jckyy.k
    </a>
    <a href="https://www.linkedin.com/in/jacky-karongkong-264898293/" target="_blank" className="social_link">
      <i className="bx bxl-linkedin-square social_icon" />jacky karongkong
    </a>
    <a href="https://web.facebook.com/jacky.karongkong.1/" target="_blank" className="social_link">
      <i className="bx bxl-facebook-square social_icon" />jacky
    </a>
  </div> */}
</section>
      <section className="profile section" id="profile">
        <h2 className="section-title">Profile</h2>
        <p className="profile_description"> saya seorang mahasiswa universitas klabat, fakultas ilmu komputer jurusan informatika. </p>
      </section>
      <section className="education section" id="education">
        <h2 className="section-title">Education</h2>
        <div className="education_content bd-grid">
          <div className="education_time">
            <span className="education_rounder" />
            <span className="education_line" />
          </div>
          <div className="education_data bd-grid">
            <h3 className="education_title">Computer Science</h3>
            <span className="education_studies">
              Universitas Klabat
            </span>
            <span className="education_year">2021-2025</span>
          </div>
        </div>
        <div className="education_content bd-grid">
          <div className="education_time">
            <span className="education_rounder" />
            {/* <span className="education_line" /> */}
          </div>
          <div className="education_data bd-grid">
            <h3 className="education_title">Teknik Komputer</h3>
            <span className="education_studies">SMK KLABAT</span>
            <span className="education_year">2017-2020</span>
          </div>
        </div>
        {/* <div className="education_content bd-grid">
    <div className="education_time">
      <span className="education_rounder" />
    </div>
    <div className="education_data bd-grid">
      <h3 className="education_title">SMP KALAWAT</h3>
      <span className="education_studies">Universitas Klabat</span>
      <span className="education_year">2013-2016</span>
    </div>
  </div> */}
      </section>
      <section className="skills section" id="skills">
        <h2 className="section-title">Skills</h2>
        <div className="skills_content bd-grid">
          <ul className="skills_data">
            <li className="skills_name">
              <span className="skills_circle" />
              HTML
            </li>
            <li className="skills_name">
              <span className="skills_circle" />
              CSS
            </li>
            <li className="skills_name">
              <span className="skills_circle" />
              Python
            </li>
            <li className="skills_name">
              <span className="skills_circle" />
              C#
            </li>
          </ul>
          <ul className="skills_data">
            <li className="skills_name">
              <span className="skills_circle" />
              Javascript
            </li>
            <li className="skills_name">
              <span className="skills_circle" />
              Git
            </li>
            <li className="skills_name">
              <span className="skills_circle" />
              C++
            </li>
          </ul>
        </div>
      </section>
    </div>
    <div className="resume_right">
      <section className="experience section" id="experience">
        <h2 className="section-title">Experience</h2>
        <div className="experience_container bd-grid">
          <div className="experience_content">
            <div className="experience_time">
              <span className="experience_rounder" />
              <span className="experience_line" />
            </div>
            <div className="experience_data bd-grid">
              <h3 className="experience_title">BASIC JS</h3>
              <span className="experience_company">From Aug-Oct</span>
              <p className="experience_description">
                saya berhasil menyelesaikan hackerank
              </p>
            </div>
          </div>
          <div className="experience_content">
            <div className="experience_time">
              <span className="experience_rounder" />
            </div>
            <div className="experience_data bd-grid">
              <h3 className="experience_title">INDONESIAN CIVIC PRO</h3>
              <span className="experience_company">
                From January-May
              </span>
              <p className="experience_description">
                saya berhasil menghafal pasa pasal
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="certificate section" id="certificate">
        <h2 className="section-title">Certificate</h2>
        <div className="certificate_container bd-grid">
          <div className="certificate_content">
            <h3 className="certificate_title">
              HackerRank Certificate
            </h3>
            <p className="certificate_description">
              Successfully cleared the assessment for the skill
              JavaScript (Basic)
            </p>
          </div>
        </div>
      </section>
      <section className="languages">
        <h2 className="section-title">languages</h2>
        <div className="languages_container">
          <ul className="languages_content bd-grid">
            <li className="languages_name">
              <span className="languages_circle" />
              Indonesian
            </li>
            <li className="languages_name">
              <span className="languages_circle" />
              English
            </li>
          </ul>
        </div>
      </section>
      <section className="interest section">
        <h2 className="section-title">Interests</h2>
        <div className="interests_container bd-grid">
          <div className="interests_content">
            <i className="bx bx-headphone interest_icon" />
            <span className="interests_name">Music</span>
          </div>
          <div className="interests_content">
            <i className="bx bx-movie interest_icon" />
            <span className="interests_name">Film</span>
          </div>
          <div className="interests_content">
            <i className="bx bxl-internet-explorer interest_icon" />
            <span className="interests_name">Social</span>
          </div>
          <div className="interests_content">
            <i className="bx bx-book interest_icon" />
            <span className="interests_name">Reads</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</main>
<a href="#" className="scrolltop" id="scroll-top">
  <i className="bx bx-up-arrow-alt scrolltop_icon" />
</a>
</div>
    )
}
export default Main;