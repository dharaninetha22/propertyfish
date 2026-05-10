import { useState } from "react";

import {
  Box,
  Select,
  MenuItem,
  InputBase,
  Typography,
  Container,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const PropertyFilter = ({ viewMode, setViewMode }: { viewMode: 'list' | 'map'; setViewMode: (mode: 'list' | 'map') => void }) => {
  const [propertyType, setPropertyType] =
    useState("Buy");

  const [search, setSearch] = useState("");

  const [locations, setLocations] =
    useState(["Ghaziabad"]);

  const handleKeyDown = (e: any) => {
    if (
      e.key === "Enter" &&
      search.trim() !== ""
    ) {
      setLocations([
        ...locations,
        search,
      ]);

      setSearch("");
    }
  };

  const removeLocation = (
    item: string
  ) => {
    setLocations(
      locations.filter(
        (loc) => loc !== item
      )
    );
  };

  return (
    <Box
      sx={{
        width: "100%",

        background: "#f5f5f5",

        py: 2,

        px: {
          xs: 1,
          md: 4,
        },
      }}
    >
      <Container maxWidth="xl">
        {/* MAIN ROW */}
        <Box
          sx={{
            width: "100%",

            display: "flex",

            justifyContent:
              "space-between",

            alignItems: {
              xs: "stretch",
              lg: "center",
            },

            flexDirection: {
              xs: "column",
              lg: "row",
            },

            gap: {
              xs: 2,
              md: 3,
            },
          }}
        >
          {/* LEFT SIDE */}
          <Box
            sx={{
              display: "flex",

              alignItems: {
                xs: "stretch",
                sm: "center",
              },

              flexDirection: {
                xs: "column",
                sm: "row",
              },

              gap: 2,

              width: "100%",
            }}
          >
            {/* BUY / RENT */}
            <Select
              value={propertyType}
              onChange={(e) =>
                setPropertyType(
                  e.target.value as string
                )
              }
              IconComponent={
                KeyboardArrowDownIcon
              }
              sx={{
                width: {
                  xs: "100%",
                  sm: "150px",
                },

                height: "50px",

                background: "#fff",

                borderRadius: "14px",

                "& .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#ddd",
                  },

                "& .MuiSelect-select": {
                  color: "#787878",

                  fontSize: {
                    xs: "15px",
                    md: "18px",
                  },

                  fontWeight: 500,

                  display: "flex",

                  alignItems: "center",
                },

                "& .MuiSvgIcon-root": {
                  color: "#787878",
                },
              }}
            >
              <MenuItem value="Buy">
                <Typography
                  variant="body2"
                  sx={{
                    color: "#787878",
                  }}
                >
                  Buy
                </Typography>
              </MenuItem>

              <MenuItem value="Rent">
                <Typography
                  variant="body2"
                  sx={{
                    color: "#787878",
                  }}
                >
                  Rent
                </Typography>
              </MenuItem>
            </Select>

            {/* SEARCH BAR */}
          {/* SEARCH BAR */}
<Box
  sx={{
    width: {
      xs: "100%",
      lg: "650px",
    },

    minHeight: {
      xs: "50px",
      sm: "50px",
    },

    background: "#fff",

    border: "1px solid #ddd",

    borderRadius: "14px",

    display: "flex",

    alignItems: "center",

    justifyContent: "space-between",

    gap: 1,

    // px: 1,
  }}
>
  {/* INPUT AREA */}
  <Box
    sx={{
      display: "flex",

      alignItems: "center",

      gap: 1,

      flex: 1,

      overflowX: "auto",
       px: 1.5,

      "&::-webkit-scrollbar": {
        display: "none",
      },
    }}
  >
    {/* MOBILE SEARCH ICON */}
    <SearchIcon
      sx={{
        display: {
          xs: "block",
          sm: "none",
        },

        color: "#999",

        fontSize: "20px",

        flexShrink: 0,

        ml: 1,
      }}
    />

    {/* TAGS */}
    {locations.map((item) => (
      <Box
        key={item}
        sx={{
          background: "#ff9800",

          color: "#fff",

          px: 1.5,
          py: 0.7,

          borderRadius: "8px",

          display: "flex",

          alignItems: "center",

          gap: 1,

          flexShrink: 0,

          fontSize: "14px",

          fontWeight: 500,
        }}
      >
        {item}

        <CloseIcon
          onClick={() =>
            removeLocation(item)
          }
          sx={{
            fontSize: "14px",

            cursor: "pointer",
          }}
        />
      </Box>
    ))}

    {/* INPUT */}
    <InputBase
      placeholder="Add location"
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      onKeyDown={handleKeyDown}
      sx={{
        flex: 1,

        minWidth: "120px",

        "& input": {
          fontSize: "14px",

          color: "#555",
        },

        "& input::placeholder": {
          fontSize: "14px",

          color: "#999",

          opacity: 1,
        },
      }}
    />
  </Box>

  {/* DESKTOP SEARCH BUTTON */}
  <Box
    sx={{
      display: {
        xs: "none",
        sm: "flex",
      },

      width: "180px",

      minWidth: "180px",

      height: "46px",

      background: "#ff5a00",

      borderRadius: "10px",

      alignItems: "center",

      justifyContent: "center",

      gap: 1,

      cursor: "pointer",

      transition: "0.3s",

      "&:hover": {
        background: "#eb5200",
      },
    }}
  >
    <SearchIcon
      sx={{
        color: "#fff",

        fontSize: "18px",
      }}
    />

    <Typography
      variant="body2"
      sx={{
        color: "#fff",

        fontSize: "16px",

        fontWeight: 400,
      }}
    >
      Search
    </Typography>
  </Box>
</Box>
          </Box>

          {/* RIGHT SIDE */}
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "175px",
              },

              height: "48px",

              background: "#fff",

              borderRadius: "14px",

              p: "4px",

              display: "flex",

              alignItems: "center",

              boxShadow:
                "0px 4px 14px rgba(0,0,0,0.08)",

              alignSelf: {
                xs: "flex-end",
                lg: "center",
              },
            }}
          >
            {/* LIST */}
            <Box
              onClick={() =>
                setViewMode("list")
              }
              sx={{
                flex: 1,

                height: "100%",

                borderRadius: "10px",

                background:
                  viewMode ===
                  "list"
                    ? "#ff9800"
                    : "transparent",

                display: "flex",

                alignItems: "center",

                justifyContent:
                  "center",

                gap: 0.8,

                cursor: "pointer",

                transition: "0.3s",
              }}
            >
              <FormatListBulletedIcon
                sx={{
                  fontSize: "19px",

                  color:
                    viewMode ===
                    "list"
                      ? "#fff"
                      : "#787878",
                }}
              />

              <Typography
                variant="body2"
                sx={{
                  fontSize: "15px",

                  fontWeight: 500,

                  color:
                    viewMode ===
                    "list"
                      ? "#fff"
                      : "#787878",
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

                height: "100%",

                borderRadius: "10px",

                background:
                  viewMode ===
                  "map"
                    ? "#ff9800"
                    : "transparent",

                display: "flex",

                alignItems: "center",

                justifyContent:
                  "center",

                gap: 0.8,

                cursor: "pointer",

                transition: "0.3s",
              }}
            >
              <MapOutlinedIcon
                sx={{
                  fontSize: "19px",

                  color:
                    viewMode ===
                    "map"
                      ? "#fff"
                      : "#787878",
                }}
              />

              <Typography
                variant="body2"
                sx={{
                  fontSize: "15px",

                  fontWeight: 500,

                  color:
                    viewMode ===
                    "map"
                      ? "#fff"
                      : "#787878",
                }}
              >
                Map
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PropertyFilter;