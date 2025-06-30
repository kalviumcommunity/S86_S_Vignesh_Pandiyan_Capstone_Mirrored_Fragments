import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const player = {
    name: "Runo",
    age: 19,
    emotionalStats: {
      confidence: 75,
      anxiety: 40,
      focus: 60,
      willpower: 50
    },
    physicalStats: {
      strength: 8,
      stamina: 9,
      agility: 7
    },
    mentalStats: {
      mentalStrength: 6,
      memory: 3
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <button onClick={()=> navigate('/')} className='bg-gray-100 text-black text-xl p-2 rounded-xl'>Back</button>
      <h2 className="text-2xl font-bold text-center">Player Profile</h2>
      <p><strong>Name:</strong> {player.name}</p>
      <p><strong>Age:</strong> {player.age}</p>

      <div>
        <h3 className="text-xl font-semibold">Emotional Stats</h3>
        <ul>
          {Object.entries(player.emotionalStats).map(([key, value]) => (
            <li key={key}>{key}: {value}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Physical Stats</h3>
        <ul>
          {Object.entries(player.physicalStats).map(([key, value]) => (
            <li key={key}>{key}: {value}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Mental Stats</h3>
        <ul>
          {Object.entries(player.mentalStats).map(([key, value]) => (
            <li key={key}>{key}: {value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
