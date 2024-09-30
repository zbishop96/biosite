
'use client'

import ThreeScene from '../components/ThreeScene';
import MyScene from '../components/myScene';


const HomePage = () => {
  return (
    <div style={{ width: '100vw', height: '93vh' }}> {/* Make canvas full viewport */}
      <MyScene />
    </div>
  );
};

export default HomePage;