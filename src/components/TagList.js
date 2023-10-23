// @ts-nocheck
import React from "react";
import { Button, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useSearchQueryUpdate } from "./SearchQueryContext";
import styled from "@mui/system/styled";

const tagListContainer = {
  pt: 1,
  display: "grid",
  gridAutoFlow: "dense",
  gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
  gap: 3,
};

const ThemedButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "black" : "#D3D3D3",
  color: theme.palette.mode === "dark" ? "white" : "black",
}));

const TagList = ({ tags, onAfterTagClick }) => {
  const updateSearchQuery = useSearchQueryUpdate();
  const theme = useTheme();

  const updateSearchQueryWithTag = (tag) => {
    updateSearchQuery(tag);
    onAfterTagClick();
  };

  return (
    <Box sx={tagListContainer}>
      {tags.map((tag) => (
        <ThemedButton
          key={tag.title}
          size="small"
          disableElevation
          onClick={() => updateSearchQueryWithTag(tag.title)}
          theme={theme}
        >
          {tag.title}
        </ThemedButton>
      ))}
    </Box>
  );
};

export default TagList;
