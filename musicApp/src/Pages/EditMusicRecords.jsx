/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {updateMusic} from "../Redux/App/actionTypes"

export const EditMusicRecords = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log(id);
  const navigate = useNavigate();
  const musicAlbums = useSelector((store) => store.app.musicRecords);
  const [editMusic, setEditMusic] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateData = {
      id,
      name:editMusic,
    }

    dispatch(updateMusic(updateData));
    navigate("/")
  };

  useEffect(() => {
    let findAlbum = musicAlbums.find((album) => album.id === id);
    
    // console.log(findAlbum);

    if (findAlbum) {
      setEditMusic(findAlbum.name);
    }
  }, [id, musicAlbums]);
  
  return (
    <form onSubmit={handleSubmit}>
      <label style={{ textAlign: "center" }}>
        <h1>Edit Music Name</h1>
      </label>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <input
          type="text"
          value={editMusic}
          onChange={(e) => setEditMusic(e.target.value)}
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};;
