import React from "react";
import styled from "styled-components";

import { FilterMusicRecords } from "../Components/FilterMusicRecords";
import { MusicAlbum } from "../Components/MusicAlbum";
import { useSelector } from "react-redux";

export const MusicRecord = () => {
  const isErrorFound = useSelector((store) => store.isError);

  if (isErrorFound.msg) {
    return (
      <div>
        <h1>{isErrorFound.remark.name} ❌</h1>
        <h1>{isErrorFound.remark.message} ❌</h1>
        <h1>
          Please Start The Server Using
          <mark>
            <code>npm run server</code>
          </mark>
        </h1>
      </div>
    );
  }

  return (
    <Wrapper>
      <WrapperFilterMusicRecords color="orange">
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
  border: ${(value) => `1px solid ${value.color}`};
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
