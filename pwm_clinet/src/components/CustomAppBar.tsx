import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import "../App.css";
import Stack from "@mui/material/Stack";
import Logo from "../assets/Logo.png"; // Import the logo image
import { Input, InputAdornment, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { ProductArray } from "../App";

interface Props {
  initialData: ProductArray
  setCurrentData: React.Dispatch<React.SetStateAction<ProductArray>>
}

const CustomAppBar = ({setCurrentData, initialData}: Props) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event: any) => {
      const query = event.target.value.toLowerCase();
      setSearchQuery(query);
      if (query === '') {
        setCurrentData(initialData);
      } else {
        setCurrentData(initialData.filter((item: any) => item.name.toLowerCase().includes(query)));
      }
    };

  return (
    <AppBar
      sx={{
        backgroundColor: "#fff",
      }}
      elevation={0}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: "100%",
          padding: "0 16px",
        }}
      >
        <Toolbar disableGutters>
          <img
            src={Logo}
            alt="Logo"
            style={{
              marginRight: "auto",
              width: 208,
              height: 88,
              objectFit: "contain",
            }}
          />
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              width: 668,
              height: 48,
              borderRadius: 99,
              backgroundColor: "#e3e3e3",
              margin: "14px",
            }}
          >
            <InputAdornment position="start">
              <SearchIcon sx={{ width: 17.5, height: 17.5 }} />
            </InputAdornment>
            <Input
              value={searchQuery}
              disableUnderline
              fullWidth
              placeholder="search"
              onChange={handleSearchChange}
              sx={{ color: "#19191D" }}
            />
          </Paper>
          <Stack direction="row" sx={{ ml: "auto" }}>
            <Avatar alt="User Pic" src="/assets/Photo.png" sx={{ ml: 3.25 }} />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default CustomAppBar;
