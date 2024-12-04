import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="name">Mufaris Fathima</h1>
        <p className="tagline">Aspiring Frontend Developer & Graphic Designer</p>
      </header>

      <main className="main">
        <section className="about">
          <h2>About Me</h2>
          <p>
            Hi, I'm Mufaris Fathima! I love creating visually appealing and user-friendly web interfaces.
            My passion lies in turning ideas into functional designs and enhancing user experiences.
          </p>
        </section>

        <section className="projects">
          <h2>Projects</h2>
          <ul>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Car Booking System
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Web-Based Conference Management System
              </a>
            </li>
          </ul>
        </section>

        <section className="contact">
          <h2>Contact Me</h2>
          <p>Email: <a href="mailto:yourname@example.com">yourname@example.com</a></p>
          <p>LinkedIn: <a href="#" target="_blank" rel="noopener noreferrer">Your LinkedIn Profile</a></p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Mufaris Fathima. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;

