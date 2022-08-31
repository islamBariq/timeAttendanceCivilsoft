import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Drawer } from "@mui/material";
import classes from "./Navbar.module.css";
function Navbar() {
  const [auth, setAuth] = React.useState(true);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = () => {};
  const handleChange = () => {};
  const handleClose = () => {};
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={classes.navBg}>
          <Toolbar>
            <IconButton
              onClick={() => {
                setOpenDrawer(true);
              }}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CIVILSOFT
            </Typography>
            {auth && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      {/* side menu */}
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
      >
        <Box
          sx={{
            width: "100%",
            minWidth: 250,
            bgcolor: "background.paper",
            pt: 2,
            overflow: "hidden",
          }}
        >
          <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ flexGrow: 1, maxWidth: 250, overflow: "hidden" }}
          >
            <TreeItem nodeId="1" label="hello islam">
              <ListItem disablePadding={true} sx={{ px: 1 }}>
                <ListItemButton component="a" href="/link">
                  <ListItemText>Hello islam</ListItemText>
                </ListItemButton>
              </ListItem>
            </TreeItem>
          </TreeView>
          <List disablePadding={true}>
            <ListItem disablePadding={true}>
              <ListItemButton component="a" href="/link">
                <ListItemText>Hello world</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding={true}>
              <ListItemButton component="a" href="/link">
                <ListItemText>Hello world</ListItemText>
              </ListItemButton>
            </ListItem>{" "}
            <ListItem disablePadding={true}>
              <ListItemButton component="a" href="/link">
                <ListItemText>Hello world</ListItemText>
              </ListItemButton>
            </ListItem>{" "}
            <ListItem disablePadding={true}>
              <ListItemButton component="a" href="/link">
                <ListItemText>Hello world</ListItemText>
              </ListItemButton>
            </ListItem>{" "}
            <ListItem disablePadding={true}>
              <ListItemButton component="a" href="/link">
                <ListItemText>Hello world</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
