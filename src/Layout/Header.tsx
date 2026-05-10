import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  IconButton,
  Box,
  Drawer,
  Collapse,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { logo } from "../assets";

const navItems = [
  {
    title: "For Buyers",
    items: [
      "Buy House",
      "Buy Apartment",
      "Buy Villa",
      "Buy Land",
    ],
  },

  {
    title: "For Tenants",
    items: [
      "Rent House",
      "Rent Apartment",
      "PG/Hostel",
    ],
  },

  {
    title: "For Owners",
    items: [
      "Post Property",
      "Owner Plans",
      "Owner Support",
    ],
  },

  {
    title: "For Dealers/Builders",
    items: [
      "Dealer Packages",
      "Builder Projects",
      "Promotions",
    ],
  },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] =
    useState<number | null>(null);

  const [mobileDrawer, setMobileDrawer] =
    useState(false);

  const [mobileDropdown, setMobileDropdown] =
    useState<number | null>(null);

  const handleDropdown = (index: number) => {
    setOpenDropdown(index);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "#fff",
          borderBottom: "1px solid #ececec",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",

            px: {
              xs: 2,
              md: 6,
            },

            height: "78px",
          }}
        >
          {/* LEFT */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="logo"
              sx={{
                width: {
                  xs: 170,
                  md: 200,
                },

                height: "auto",
              }}
            />
          </Box>

          {/* DESKTOP NAV */}
          <Box
            sx={{
              display: {
                xs: "none",
                lg: "flex",
              },

              alignItems: "center",

              gap: 1,
            }}
          >
            {navItems.map((nav, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                }}
                onMouseEnter={() =>
                  handleDropdown(index)
                }
                onMouseLeave={closeDropdown}
              >
                <Button
                  endIcon={
                    <KeyboardArrowDownIcon />
                  }
                  sx={{
                    color:
                      openDropdown === index
                        ? "#FF5A1F"
                        : "#2B2B2B",

                    textTransform: "none",

                    fontWeight: 500,

                    fontSize: "14px",

                    px: 2,

                    height: "70px",
                  }}
                >
                  {nav.title}
                </Button>

                {/* DROPDOWN */}
                <Box
                  sx={{
                    position: "absolute",

                    top: "100%",

                    left: 0,

                    minWidth: "240px",

                    background: "#fff",

                    borderRadius: "18px",

                    p: 1.5,

                    boxShadow:
                      "0px 20px 60px rgba(0,0,0,0.08)",

                    opacity:
                      openDropdown === index
                        ? 1
                        : 0,

                    visibility:
                      openDropdown === index
                        ? "visible"
                        : "hidden",

                    transform:
                      openDropdown === index
                        ? "translateY(0px)"
                        : "translateY(10px)",

                    transition: "0.3s",

                    zIndex: 999,
                  }}
                >
                  {nav.items.map(
                    (item, itemIndex) => (
                      <Box
                        key={itemIndex}
                        sx={{
                          px: 2,
                          py: 1.5,

                          borderRadius: "12px",

                          cursor: "pointer",

                          transition: "0.3s",

                          "&:hover": {
                            background:
                              "#f8f8f8",
                          },
                        }}
                      >
                        <Typography
                        variant="body2"
                          sx={{
                            // fontSize: "1px",

                            color: "#444",

                            fontWeight: 500,
                          }}
                        >
                          {item}
                        </Typography>
                      </Box>
                    )
                  )}
                </Box>
              </Box>
            ))}
          </Box>

          {/* RIGHT SIDE */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            {/* PROFILE */}
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },

                alignItems: "center",

                border:
                  "1px solid #EAEAEA",

                borderRadius: "14px",

                px: 1,
                py: 0.5,

                gap: 1,
              }}
            >
              <IconButton size="small">
                <KeyboardArrowDownIcon />
              </IconButton>

              <Avatar
                sx={{
                  width: 30,
                  height: 30,

                  background: "#2E2474",
                }}
              >
                A
              </Avatar>
            </Box>

            {/* BUTTON */}
            <Button
              variant="contained"
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },

                background: "#FF5A1F",

                borderRadius: "12px",

                textTransform: "none",

                px: 3,
                py: 1.2,

                fontWeight: 600,

                boxShadow: "none",

                "&:hover": {
                  background: "#E14B13",
                  boxShadow: "none",
                },
                
              }}
            >
              <Typography variant="body2" sx={{color: "#fff"}}>

              Post Property
              </Typography>

              <Box
                component="span"
                sx={{
                  ml: 1,

                  background: "#fff",

                  color: "#FF5A1F",

                  px: 1,

                  borderRadius: "6px",

                  fontSize: "11px",

                  fontWeight: 700,
                }}
              >
                FREE
              </Box>
            </Button>

            {/* MOBILE MENU */}
            <IconButton
              onClick={() =>
                setMobileDrawer(true)
              }
              sx={{
                display: {
                  xs: "flex",
                  lg: "none",
                },

                color: "#222",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileDrawer}
        onClose={() =>
          setMobileDrawer(false)
        }
      >
        <Box
          sx={{
            width: 320,

            height: "100%",

            background: "#fff",

            p: 3,
          }}
        >
          {/* TOP */}
          <Box
            sx={{
              display: "flex",
              justifyContent:
                "space-between",

              alignItems: "center",

              mb: 4,
            }}
          >
            <Typography
              sx={{
                fontSize: "22px",

                fontWeight: 700,
              }}
            >
              Menu
            </Typography>

            <IconButton
              onClick={() =>
                setMobileDrawer(false)
              }
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* MOBILE NAV */}
          {navItems.map((nav, index) => (
            <Box
              key={index}
              sx={{
                borderBottom:
                  "1px solid #f1f1f1",

                py: 1,
              }}
            >
              <Box
                onClick={() =>
                  setMobileDropdown(
                    mobileDropdown === index
                      ? null
                      : index
                  )
                }
                sx={{
                  display: "flex",

                  alignItems: "center",

                  justifyContent:
                    "space-between",

                  cursor: "pointer",

                  py: 1,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,

                    fontSize: "15px",
                  }}
                >
                  {nav.title}
                </Typography>

                {mobileDropdown === index ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </Box>

              <Collapse
                in={
                  mobileDropdown === index
                }
              >
                <Box
                  sx={{
                    pl: 2,
                    pt: 1,
                    pb: 1,

                    display: "flex",

                    flexDirection:
                      "column",

                    gap: 2,
                  }}
                >
                  {nav.items.map(
                    (item, itemIndex) => (
                      <Typography
                        key={itemIndex}
                        sx={{
                          color: "#666",

                          fontSize: "14px",

                          cursor: "pointer",
                        }}
                      >
                        {item}
                      </Typography>
                    )
                  )}
                </Box>
              </Collapse>
            </Box>
          ))}

          {/* MOBILE BUTTON */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 4,

              background: "#FF5A1F",

              height: "52px",

              borderRadius: "14px",

              textTransform: "none",

              fontWeight: 700,

              boxShadow: "none",

              "&:hover": {
                background: "#E14B13",
                boxShadow: "none",
              },
            }}
          >
            Post Property
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;