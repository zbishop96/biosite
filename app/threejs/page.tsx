
'use client'

import MyScene from '../components/ThreeScene';


const HomePage = () => {
  return (
    <div style={{ width: '100vw', height: '93vh' }}> {/* Make canvas full viewport */}
      <MyScene />
    </div>
  );
};

export default HomePage;