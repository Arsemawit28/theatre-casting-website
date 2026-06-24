import React from 'react';
import Header from './components/Header';
import StudentGallery from './components/StudentGallery';
import { studentsData } from './data/students';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <StudentGallery students={studentsData} />
      </main>
      <footer className="footer">
        <p>&copy; 2026 Theatre Arts Students - Class of 2026</p>
      </footer>
    </div>
  );
}

export default App;
