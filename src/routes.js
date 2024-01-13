import { BrowserRouter, Routes, Route } from "react-router-dom";
import Arduinos from './pages/Arduinos';
import NewUpdate from './pages/NewUpdate';

export default function ArduinosRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Arduinos/>} />
        <Route path="/newupdate/:arduino_id" element={<NewUpdate/>} />
      </Routes>
    </BrowserRouter>
  );
}