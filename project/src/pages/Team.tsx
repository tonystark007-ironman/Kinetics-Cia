import React, { useState } from 'react';

interface TeamMember {
  name: string;
  role: string;
  email: string;
  phone: string;
}

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: 'Aswath Pranav Balan T',
      role: 'Senior Developer',
      email: 'aswath@example.com',
      phone: '+1 234-567-8901'
    },
    {
      name: 'Krupashni Janakiraman',
      role: 'Project Manager',
      email: 'krupashni@example.com',
      phone: '+1 234-567-8902'
    },
    {
      name: 'MS Dhoni',
      role: 'Team Lead',
      email: 'msdhoni@example.com',
      phone: '+1 234-567-8903'
    },
    {
      name: 'Matheesha Pathirana',
      role: 'Developer',
      email: 'matheesha@example.com',
      phone: '+1 234-567-8904'
    },
    {
      name: 'Rachel',
      role: 'UI/UX Designer',
      email: 'rachel@example.com',
      phone: '+1 234-567-8905'
    },
    {
      name: 'Joey',
      role: 'QA Engineer',
      email: 'joey@example.com',
      phone: '+1 234-567-8906'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {teamMembers.map((member) => (
        <div
          key={member.name}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          onMouseEnter={() => setHoveredMember(member.name)}
          onMouseLeave={() => setHoveredMember(null)}
        >
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-600 dark:text-gray-300">
                {member.name.charAt(0)}
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">{member.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{member.role}</p>
            
            <div className={`transition-opacity duration-300 ${
              hoveredMember === member.name ? 'opacity-100' : 'opacity-0'
            }`}>
              <p className="text-gray-600 dark:text-gray-300">{member.email}</p>
              <p className="text-gray-600 dark:text-gray-300">{member.phone}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;