import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const EditMusicRecords = () => {
  const { id } = useParams();
  const musicAlbums = useSelector((store) => store.app.musicRecords);
  const [editMusic, setEditMusic] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    let findAlbum = musicAlbums.find((album) => album.id === id);

    if (findAlbum) {
      setEditMusic(findAlbum.name);
    }
  }, [id, musicAlbums]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Edit Music Name</label>
        <input
          type="text"
          value={editMusic}
          onChange={(e) => setEditMusic(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
