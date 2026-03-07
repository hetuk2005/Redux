import { Route, Routes } from "react-router-dom";

import { MusicRecord } from "./MusicRecord";
import { Login } from "./Login";
import { EditMusicRecords } from "./EditMusicRecords";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MusicRecord />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/edit_music" element={<EditMusicRecords />}></Route>
      <Route path="*" element={<h1>Page Not Found...</h1>}></Route>
    </Routes>
  );
};
