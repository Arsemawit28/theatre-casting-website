import React, { useState, useMemo } from 'react';
import StudentCard from './StudentCard';
import SearchBar from './SearchBar';
import '../styles/StudentGallery.css';

const StudentGallery = ({ students }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTalent, setSelectedTalent] = useState('');

  const filteredStudents = useMemo(() => {
    return students.filter(student => {
      const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTalent = selectedTalent === '' || student.talents.includes(selectedTalent);
      return matchesSearch && matchesTalent;
    });
  }, [students, searchTerm, selectedTalent]);

  return (
    <section className="gallery-section">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedTalent={selectedTalent}
        setSelectedTalent={setSelectedTalent}
      />
      <div className="results-info">
        <p>Showing {filteredStudents.length} of {students.length} students</p>
      </div>
      <div className="gallery">
        {filteredStudents.length > 0 ? (
          filteredStudents.map(student => (
            <StudentCard key={student.id} student={student} />
          ))
        ) : (
          <div className="no-results">
            <p>No students found. Try adjusting your search or filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default StudentGallery;
