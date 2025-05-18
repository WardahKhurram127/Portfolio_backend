import React from 'react';
import { CheckCircle, EmojiEvents } from '@mui/icons-material';

const AchievementsPage = () => {
  const achievements = [
    {
      icon: <CheckCircle className="text-red-400 w-5 h-5" />,
      text: (
        <>
          Participated in <span className="text-red-400 font-semibold">CODE RUSH 2023</span>
        </>
      ),
    },
    {
      icon: <CheckCircle className="text-red-400 w-5 h-5" />,
      text: (
        <>
          Participated in <span className="text-red-400 font-semibold">Riphah Computing Challenge 2024</span>
        </>
      ),
    },
    {
      icon: <EmojiEvents className="text-red-400 w-5 h-5" />,
      text: (
        <>
          Award in <span className="text-red-400 font-semibold">Mental Math Competition</span> at School Level 2019
        </>
      ),
    },
  ];

  return (
    <div className="h-[100vh] w-[100%] bg-gray-900 text-white py-12 px-4 md:px-12 2xl:ml-32 p-20  min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-bold hover:text-[#FF4D4D] text-center mb-2">ACHIEVEMENTS</h2>
      <hr className="border-red-500 w-44 mx-auto mb-10" />

      <ul className="space-y-6 max-w-2xl mx-auto">
        {achievements.map((item, index) => (
          <li key={index} className="flex items-start bg-gray-800 space-x-4 hover:bg-gray-700 p-4 rounded-lg transition duration-200 shadow-md">
            {item.icon}
            <span className="text-lg">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AchievementsPage;