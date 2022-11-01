import {
  DarkModeOutlined,
  LightModeOutlined,
  NotificationsOutlined,
  PersonOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        display="flex"
        backgroundColor={colors.primary[900]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        <IconButton type="button">
          <NotificationsOutlined />
        </IconButton>{" "}
        <IconButton type="button" sx={{ p: 1 }}>
          <SettingsOutlined />
        </IconButton>{" "}
        <IconButton type="button" sx={{ p: 1 }}>
          <PersonOutlined />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
