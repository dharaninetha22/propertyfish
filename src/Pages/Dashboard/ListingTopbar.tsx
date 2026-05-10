import { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";



const ListingTopbar = () => {
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

        justifyContent: "space-between",

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

            lineHeight: 1.6,
          }}
        >
          Home/New Delhi/ Flats for sales
          in Dwarka Mor,New Delhi
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mt: {
              xs: 1.5,
              md: 2,
            },

            fontWeight: 800,

            fontSize: {
              xs: "14px",
              md: "14px",
            },

            lineHeight: 1.3,
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
            mt: {
              xs: 1,
              md: 2,
            },

            color: "#444",

            fontSize: {
              xs: "13px",
              md: "14px",
            },

            lineHeight: 1.6,
          }}
        >
          Flats for Sale in Dwarka Mor,
          New Delhi
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

            fontSize: {
              xs: "12px",
              md: "14px",
            },
          }}
        >
          Last Updated: Aug 9, 2023
        </Typography>

        <Box
          sx={{
            display: "flex",

            alignItems: {
              xs: "flex-start",
              md: "center",
            },

            flexDirection: {
              xs: "column",
              sm: "row",
            },

            gap: 2,

            width: "100%",
          }}
        >
          {/* SORT TEXT */}
          <Typography
            variant="body2"
            sx={{
              fontWeight: 700,

              color: "#222",

              minWidth: "fit-content",
            }}
          >
            Sort by :
          </Typography>

          {/* SELECT */}
          <Select
            value={sortBy}
            onChange={(e) =>
              setSortBy(
                e.target.value as string
              )
            }
            displayEmpty
            sx={{
              width: {
                xs: "100%",
                sm: "220px",
                md: "160px",
              },

              height: "42px",

              borderRadius: "10px",

              background: "#fff",

              "& .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#ddd",
                },

              "& .MuiSelect-select": {
                display: "flex",

                alignItems: "center",

                justifyContent:
                  "center",

                textAlign: "center",

                fontSize: "14px",

                fontWeight: 500,

                color: "#444",

                height: "42px",

                padding:
                  "0px 32px 0px 12px !important",
              },
            }}
          >
            <MenuItem value="Relevance">
              <Typography
                variant="body2"
                sx={{
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Relevance
              </Typography>
            </MenuItem>

            <MenuItem value="Low to High">
              <Typography
                variant="body2"
                sx={{
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Low to High
              </Typography>
            </MenuItem>

            <MenuItem value="High to Low">
              <Typography
                variant="body2"
                sx={{
                  width: "100%",
                  textAlign: "center",
                }}
              >
                High to Low
              </Typography>
            </MenuItem>
          </Select>
        </Box>
      </Box>
    </Box>
  );
};

export default ListingTopbar;