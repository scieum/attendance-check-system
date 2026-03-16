import { useState } from 'react';
import Home from './components/Home';
import Selectmode from './components/Selectmode';
import Floor1 from './components/Floor1';
import Floor2 from './components/Floor2';
import Floor3 from './components/Floor3';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'selectmode' | 'floor1' | 'floor2' | 'floor3'>('home');

  return (
    <div className="w-full h-full overflow-y-auto">
      {currentScreen === 'home' && (
        <Home onNavigateToSelectMode={() => setCurrentScreen('selectmode')} />
      )}
      {currentScreen === 'selectmode' && (
        <Selectmode
          onNavigateToHome={() => setCurrentScreen('home')}
          onNavigateToFloor1={() => setCurrentScreen('floor1')}
          onNavigateToFloor2={() => setCurrentScreen('floor2')}
          onNavigateToFloor3={() => setCurrentScreen('floor3')}
        />
      )}
      {currentScreen === 'floor1' && (
        <Floor1 onNavigateBack={() => setCurrentScreen('selectmode')} />
      )}
      {currentScreen === 'floor2' && (
        <Floor2 onNavigateBack={() => setCurrentScreen('selectmode')} />
      )}
      {currentScreen === 'floor3' && (
        <Floor3 onNavigateBack={() => setCurrentScreen('selectmode')} />
      )}
    </div>
  );
}