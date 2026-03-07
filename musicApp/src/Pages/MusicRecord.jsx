import React from "react";
import styled from "styled-components";

import { FilterMusicRecords } from "../Components/FilterMusicRecords";
import { MusicAlbum } from "../Components/MusicAlbum";

export const MusicRecord = () => {
  return (
    <Wrapper>
      <WrapperFilterMusicRecords>
        <FilterMusicRecords />
      </WrapperFilterMusicRecords>

      <WrapperMusicAlbumRecords>
        <MusicAlbum />
      </WrapperMusicAlbumRecords>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: center;
`;

const WrapperFilterMusicRecords = styled.div`
  border: 1px solid green;
  width: 30%;
  height: 100%;
`;

const WrapperMusicAlbumRecords = styled.div`
  border: 1px dashed black;
  width: 70%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
