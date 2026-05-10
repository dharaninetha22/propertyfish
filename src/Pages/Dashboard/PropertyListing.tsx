import { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

interface ListingTopbarProps {
  viewMode: "list" | "map";

  setViewMode: (
    mode: "list" | "map"
  ) => void;
}

const ListingTopbar = ({
  viewMode,
  setViewMode,
}: ListingTopbarProps) => {
  const [sortBy, setSortBy] =
    useState("Relevance");

  return (
    <Box
      sx={{
        background: "#fff",

        borderRadius: "16px",

        p: {
          xs: 2,
          md: 3,
        },

        display: "flex",

        justifyContent:
          "space-between",

        alignItems: {
          xs: "flex-start",
          md: "center",
        },

        flexDirection: {
          xs: "column",
          md: "row",
        },

        gap: {
          xs: 3,
          md: 0,
        },
      }}
    >
      {/* LEFT */}
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#666",

            fontSize: {
              xs: "12px",
              md: "14px",
            },
          }}
        >
          Home/New Delhi/ Flats for
          sale in Dwarka Mor, New
          Delhi
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mt: 2,

            fontWeight: 800,

            fontSize: {
              xs: "24px",
              md: "28px",
            },
          }}
        >
          Showing 1 - 30{" "}

          <span
            style={{
              color: "#666",

              fontWeight: 400,

              fontSize: "14px",
            }}
          >
            of 1581
          </span>
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mt: 1,

            color: "#444",

            fontSize: {
              xs: "13px",
              md: "14px",
            },
          }}
        >
          Flats for Sale in Dwarka
          Mor, New Delhi
        </Typography>
      </Box>

      {/* RIGHT */}
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "auto",
          },
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#666",

            textAlign: {
              xs: "left",
              md: "right",
            },

            mb: 2,
          }}
        >
          Last Updated: Aug 9, 2023
        </Typography>

        <Box
          sx={{
            display: "flex",

            alignItems: {
              xs: "stretch",
              md: "center",
            },

            flexDirection: {
              xs: "column",
              sm: "row",
            },

            gap: 2,
          }}
        >
          {/* SORT */}
          <Box
            sx={{
              display: "flex",

              alignItems: "center",

              gap: 1.5,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontWeight: 700,

                color: "#222",
              }}
            >
              Sort by :
            </Typography>

            <Select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value as string
                )
              }
              sx={{
                width: {
                  xs: "100%",
                  sm: "180px",
                },

                height: "42px",

                borderRadius:
                  "10px",

                background: "#fff",

                "& .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor:
                      "#ddd",
                  },

                "& .MuiSelect-select":
                  {
                    display: "flex",

                    alignItems:
                      "center",

                    justifyContent:
                      "center",

                    fontSize:
                      "14px",

                    fontWeight:
                      500,
                  },
              }}
            >
              <MenuItem value="Relevance">
                Relevance
              </MenuItem>

              <MenuItem value="Low to High">
                Low to High
              </MenuItem>

              <MenuItem value="High to Low">
                High to Low
              </MenuItem>
            </Select>
          </Box>

          {/* LIST MAP TOGGLE */}
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "180px",
              },

              height: "48px",

              background:
                "#f5f5f5",

              borderRadius:
                "14px",

              p: "4px",

              display: "flex",
            }}
          >
            {/* LIST */}
            <Box
              onClick={() =>
                setViewMode("list")
              }
              sx={{
                flex: 1,

                borderRadius:
                  "10px",

                background:
                  viewMode ===
                  "list"
                    ? "#ff9800"
                    : "transparent",

                display: "flex",

                alignItems:
                  "center",

                justifyContent:
                  "center",

                gap: 1,

                cursor:
                  "pointer",

                transition:
                  "0.3s",
              }}
            >
              <FormatListBulletedIcon
                sx={{
                  fontSize:
                    "18px",

                  color:
                    viewMode ===
                    "list"
                      ? "#fff"
                      : "#666",
                }}
              />

              <Typography
                variant="body2"
                sx={{
                  fontWeight: 600,

                  color:
                    viewMode ===
                    "list"
                      ? "#fff"
                      : "#666",
                }}
              >
                List
              </Typography>
            </Box>

            {/* MAP */}
            <Box
              onClick={() =>
                setViewMode("map")
              }
              sx={{
                flex: 1,

                borderRadius:
                  "10px",

                background:
                  viewMode ===
                  "map"
                    ? "#ff9800"
                    : "transparent",

                display: "flex",

                alignItems:
                  "center",

                justifyContent:
                  "center",

                gap: 1,

                cursor:
                  "pointer",

                transition:
                  "0.3s",
              }}
            >
              <MapOutlinedIcon
                sx={{
                  fontSize:
                    "18px",

                  color:
                    viewMode ===
                    "map"
                      ? "#fff"
                      : "#666",
                }}
              />

              <Typography
                variant="body2"
                sx={{
                  fontWeight: 600,

                  color:
                    viewMode ===
                    "map"
                      ? "#fff"
                      : "#666",
                }}
              >
                Map
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ListingTopbar;