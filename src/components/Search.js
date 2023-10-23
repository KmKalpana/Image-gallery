// @ts-nocheck
import { useRef } from "react"
import { Box,InputBase, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { alpha, styled } from "@mui/system"
import { useSearchQuery, useSearchQueryUpdate } from "./SearchQueryContext"
import SearchIcon from "@mui/icons-material/Search"

const SearchBar = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius * 3,
    backgroundColor: theme.palette.mode === "dark" ?
        theme.palette.grey[50] : theme.palette.grey[200],
    transition: "600ms all",
    border: `1px solid ${alpha(theme.palette.common.black, 0.1)}`,
    "& :hover": {
    },
    width: "100%",
    marginLeft: 0,
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    color: theme.palette.grey[500],
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: theme.palette.common.black,
    "& .MuiInputBase-input": {
        padding: theme.spacing(1.3, 1, 1.3, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    },
    "& .MuiInputBase-input::placeholder": {
        color: theme.palette.grey[900]
    }
}))

const Lists = styled(List)(({ theme }) => ({
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    overflow: "hidden",
    backgroundColor: theme.palette.common.white,
    borderRadius: 5,
    height: 0,
    padding: 0,
    color: theme.palette.common.black
}))

const Search = ({ dense = false }) => {

    const updateSearchQuery = useSearchQueryUpdate()
    const searchQuery = useSearchQuery()
    const searchBoxRef = useRef()

    const update = (e) => {
        const query = e.target.value
        updateSearchQuery(query)
    }

    return (
        <Box>
            <SearchBar>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    style={{ padding: dense ? "5px 10px" : 0 }}
                    onChange={update}
                    fullWidth
                    placeholder="Search images here..."
                />
            </SearchBar>
            <Lists
                ref={searchBoxRef}>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary={searchQuery} />
                    </ListItemButton>
                </ListItem>
            </Lists>
        </Box>
    )
}

export default Search
