import React, { useState } from 'react';

function PersonSkills() {
  const [inputSkill, setInputSkill] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSkillInputChange = (event) => {
    setInputSkill(event.target.value);
  };

  const handleAddSkill = () => {
    if (inputSkill.trim() !== '' && !selectedSkills.includes(inputSkill)) {
      setSelectedSkills([...selectedSkills, inputSkill]);
      setInputSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSelectedSkills(selectedSkills.filter(skill => skill !== skillToRemove));
  };

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-and-search">
        <input
          type="text"
          placeholder="Type skill and press Enter to add"
          value={inputSkill}
          onChange={handleSkillInputChange}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              handleAddSkill();
            }
          }}
        />
        {selectedSkills.length > 0 && (
          <div className="selected-skills-box">
            {selectedSkills.map((skill) => (
              <span key={skill} className="selected-skill">
                {skill}
                <button onClick={() => handleRemoveSkill(skill)}>x</button>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonSkills;
