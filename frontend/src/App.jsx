import HealthCheck from './components/HealthCheck';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ background: '#282c34', color: 'white', padding: '1rem' }}>
        <h1>MERN Demo App</h1>
      </header>
      <main style={{ flex: 1, padding: '2rem' }}>
        <h2>Welcome to my MERN stack application!</h2>
        <HealthCheck />
      </main>
      <footer style={{ background: '#f0f0f0', color: '#333', padding: '1rem', textAlign: 'center' }}>
        Deployed by Your Name | Week 7 DevOps
      </footer>
    </div>
  );
}

export default App;
