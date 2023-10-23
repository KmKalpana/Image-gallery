import React from "react";
import { Container } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import Card from "./Card";

const PhotoGrid = ({ photos, onItemClick }) => {
  return (
    <Container fixed style={{ marginTop: 30, minHeight: "100vh" }}>
      <Masonry columns={{ xs: 1, sm: 3 }} spacing={{ xs: 3, sm: 3 }}>
        {photos.map((photo) => (
          <div key={photo.id} style={{ margin: "10px" }}>
            <Card photo={photo} onItemClick={onItemClick} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default PhotoGrid;
