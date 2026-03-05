import React from 'react';
import './index.css';
import './App.css'; 

function App() {
  return (
    <div className="container">
      <main className="card">
        <img 
          src="./kozlojak.jpeg" 
          alt="Zdjęcie profilowe" 
          className="profile-img" 
        />
        
        <h1 className="title">Kozlojak-dev</h1>
        
        <div className="badge">Strona w budowie</div>
        
        <p className="description">
          Pasjonat technologii, deweloper w procesie tworzenia. 
          Właśnie buduję swój cyfrowy identyfikator z użyciem Reacta.
        </p>

        <section className="footer-info">
          <p>Stay tuned! Więcej projektów pojawi się już wkrótce.</p>
        </section>
      </main>
      
      <footer style={{ marginTop: '20px', color: '#30363d', fontSize: '0.8rem' }}>
        React + Vite + GitHub Actions Deployment
      </footer>
    </div>
  );
}

export default App;