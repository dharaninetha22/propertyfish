import { useState } from "react";

import {
  Box,
  Typography,
  Button,
  Checkbox,
  Tabs,
  Tab,
  Radio,
  Drawer,
  IconButton,
} from "@mui/material";

import ReplayIcon from "@mui/icons-material/Replay";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import VillaOutlinedIcon from "@mui/icons-material/VillaOutlined";
import CloseIcon from "@mui/icons-material/Close";
import TuneIcon from "@mui/icons-material/Tune";

const bhkTypes = [
  "1 RK",
  "1 BHK",
  "2 BHK",
  "3 BHK",
  "4 BHK",
  "4+ BHK",
];

const availabilityOptions = [
  "Immediate",
  "Within 15 days",
  "Within 30 days",
  "After 30 days",
];

const furnishingOptions = [
  "Full",
  "Semi",
  "None",
];

const tenantOptions = [
  {
    label: "Bachelor",
    icon: <PersonOutlineOutlinedIcon />,
  },

  {
    label: "Family",
    icon: <GroupsOutlinedIcon />,
  },

  {
    label: "Company",
    icon: <GroupsOutlinedIcon />,
  },
];

const propertyTypes = [
  {
    label: "Apartment",
    icon: <ApartmentOutlinedIcon />,
  },

  {
    label:
      "Independent House/Villa",
    icon: <VillaOutlinedIcon />,
  },

  {
    label:
      "Gated Community Villa",
    icon: <VillaOutlinedIcon />,
  },
];

const FilterSidebar = () => {
  const [tab, setTab] =
    useState(0);

  const [
    mobileFilterOpen,
    setMobileFilterOpen,
  ] = useState(false);

  const [
    selectedBhk,
    setSelectedBhk,
  ] = useState<string[]>([]);

  const [
    selectedAvailability,
    setSelectedAvailability,
  ] = useState("");

  const [
    selectedFurnishing,
    setSelectedFurnishing,
  ] = useState<string[]>([]);

  const [
    selectedTenants,
    setSelectedTenants,
  ] = useState<string[]>([]);

  const [
    selectedPropertyTypes,
    setSelectedPropertyTypes,
  ] = useState<string[]>([]);

  /* TOGGLE */
  const toggleSelection = (
    value: string,
    state: string[],
    setState: any
  ) => {
    if (state.includes(value)) {
      setState(
        state.filter(
          (item) => item !== value
        )
      );
    } else {
      setState([
        ...state,
        value,
      ]);
    }
  };

  /* RESET */
  const handleReset = () => {
    setSelectedBhk([]);

    setSelectedAvailability("");

    setSelectedFurnishing([]);

    setSelectedTenants([]);

    setSelectedPropertyTypes([]);
  };

  /* FILTER CONTENT */
  const FilterContent = () => (
    <>
      {/* TOP TABS */}
      <Tabs
        value={tab}
        onChange={(_, newValue) =>
          setTab(newValue)
        }
        variant="fullWidth"
        sx={{
          background: "#fff",

          minHeight: "55px",

          "& .MuiTabs-flexContainer":
            {
              height: "65px",
            },

          "& .MuiTabs-indicator": {
            background:
              "linear-gradient(90deg,#ff9800,#ff5a00)",

            height: "3px",

            borderRadius: "10px",
          },

          "& .MuiTab-root": {
            textTransform:
              "none",

            fontSize: "14px",

            fontWeight: 600,

            color: "#222",

            transition: "0.3s",

            minHeight: "65px",
          },

          "& .Mui-selected": {
            background:
              "linear-gradient(180deg,#f5ddc5,#fff)",

            color:
              "#111 !important",
          },
        }}
      >
        <Tab label="Filters" />

        <Tab label="More Filters" />
      </Tabs>

      {/* CONTENT */}
      <Box
        sx={{
          p: {
            xs: 2,
            md: 2.5,
          },
        }}
      >
        {/* RESET */}
        <Box
          onClick={handleReset}
          sx={{
            display: "flex",

            justifyContent:
              "flex-end",

            alignItems:
              "center",

            gap: 1,

            color: "#999",

            mb: 2,

            cursor: "pointer",

            transition: "0.3s",

            "&:hover": {
              color: "#ff9800",
            },
          }}
        >
          <ReplayIcon
            sx={{
              fontSize: "18px",
            }}
          />

          <Typography variant="body2">
            Reset
          </Typography>
        </Box>

        {/* FILTER TAB */}
        {tab === 0 && (
          <>
            {/* BHK */}
            <Typography
              variant="body2"
              sx={{
                fontWeight: 700,

                color: "#222",

                mb: 1,

                fontSize:
                  "15px !important",
              }}
            >
              BHK Type
            </Typography>

            <Box
              sx={{
                display: "flex",

                flexWrap: "wrap",

                gap: 1.5,

                mb: 2,
              }}
            >
              {bhkTypes.map(
                (item) => (
                  <Box
                    key={item}
                    onClick={() =>
                      toggleSelection(
                        item,
                        selectedBhk,
                        setSelectedBhk
                      )
                    }
                    sx={{
                      px: 2,
                      py: 1,

                      borderRadius:
                        "8px",

                      background:
                        selectedBhk.includes(
                          item
                        )
                          ? "linear-gradient(90deg,#ff9800,#ff5a00)"
                          : "#f8f8f8",

                      color:
                        selectedBhk.includes(
                          item
                        )
                          ? "#fff"
                          : "#403b77",

                      cursor:
                        "pointer",

                      transition:
                        "0.3s",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 700,

                        fontSize:
                          "12px !important",

                        color:
                          selectedBhk.includes(
                            item
                          )
                            ? "#fff"
                            : "#625e8c",
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                )
              )}
            </Box>

            {/* AVAILABILITY */}
            <Typography
              variant="body2"
              sx={{
                fontWeight: 700,

                color: "#222",

                mb: 1,

                fontSize:
                  "15px !important",
              }}
            >
              Availability
            </Typography>

            <Box
              sx={{
                display: "grid",

                gridTemplateColumns:
                  {
                    xs: "1fr",
                    sm: "1fr 1fr",
                  },

                gap: 1,

                mb: 2,
              }}
            >
              {availabilityOptions.map(
                (item) => (
                  <Box
                    key={item}
                    onClick={() =>
                      setSelectedAvailability(
                        item
                      )
                    }
                    sx={{
                      display:
                        "flex",

                      alignItems:
                        "center",

                      cursor:
                        "pointer",
                    }}
                  >
                    <Radio
                      checked={
                        selectedAvailability ===
                        item
                      }
                      sx={{
                        p: 0.5,

                        color:
                          "#bdbdbd",

                        "&.Mui-checked":
                          {
                            color:
                              "#ff9800",
                          },
                      }}
                    />

                    <Typography
                      variant="body2"
                      sx={{
                        color: "#777",

                        fontSize:
                          "13px !important",
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                )
              )}
            </Box>

            {/* FURNISHING */}
            <Typography
              variant="body2"
              sx={{
                fontWeight: 700,

                color: "#222",

                mb: 1,

                fontSize:
                  "15px !important",
              }}
            >
              Furnishing
            </Typography>

            <Box
              sx={{
                display: "flex",

                flexWrap: "wrap",

                gap: 2,

                mb: 2,
              }}
            >
              {furnishingOptions.map(
                (item) => (
                  <Box
                    key={item}
                    onClick={() =>
                      toggleSelection(
                        item,
                        selectedFurnishing,
                        setSelectedFurnishing
                      )
                    }
                    sx={{
                      display:
                        "flex",

                      alignItems:
                        "center",

                      cursor:
                        "pointer",

                      px: 1,

                      py: 0.5,

                      borderRadius:
                        "8px",

                      background:
                        selectedFurnishing.includes(
                          item
                        )
                          ? "#fff3e0"
                          : "transparent",
                    }}
                  >
                    <Checkbox
                      checked={selectedFurnishing.includes(
                        item
                      )}
                      sx={{
                        p: 1,

                        color:
                          "#bdbdbd",

                        "&.Mui-checked":
                          {
                            color:
                              "#ff9800",
                          },
                      }}
                    />

                    <Typography
                      variant="body2"
                      sx={{
                        color: "#777",

                        fontSize:
                          "13px !important",
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                )
              )}
            </Box>

            {/* TENANTS */}
            <Typography
              variant="body2"
              sx={{
                fontWeight: 700,

                color: "#222",

                mb: 2,

                fontSize:
                  "15px !important",
              }}
            >
              Preferred Tenants
            </Typography>

            <Box
              sx={{
                display: "flex",

                flexWrap: "wrap",

                gap: 1.5,

                mb: 3,
              }}
            >
              {tenantOptions.map(
                (item) => (
                  <Box
                    key={item.label}
                    onClick={() =>
                      toggleSelection(
                        item.label,
                        selectedTenants,
                        setSelectedTenants
                      )
                    }
                    sx={{
                      display:
                        "flex",

                      alignItems:
                        "center",

                      gap: 1,

                      px: 1.5,
                      py: 1,

                      borderRadius:
                        "8px",

                      background:
                        selectedTenants.includes(
                          item.label
                        )
                          ? "linear-gradient(90deg,#ff9800,#ff5a00)"
                          : "#f8f8f8",

                      cursor:
                        "pointer",

                      "& svg": {
                        fontSize:
                          "18px",

                        color:
                          selectedTenants.includes(
                            item.label
                          )
                            ? "#fff"
                            : "#403b77",
                      },
                    }}
                  >
                    {item.icon}

                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 500,

                        fontSize:
                          "13px !important",

                        color:
                          selectedTenants.includes(
                            item.label
                          )
                            ? "#fff"
                            : "#403b77",
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                )
              )}
            </Box>

            {/* PROPERTY TYPE */}
            <Typography
              variant="body2"
              sx={{
                fontWeight: 700,

                color: "#222",

                mb: 2,

                fontSize:
                  "15px !important",
              }}
            >
              Property Type
            </Typography>

            <Box
              sx={{
                display: "flex",

                flexWrap: "wrap",

                gap: 1.5,

                mb: 2,
              }}
            >
              {propertyTypes.map(
                (item) => (
                  <Box
                    key={item.label}
                    onClick={() =>
                      toggleSelection(
                        item.label,
                        selectedPropertyTypes,
                        setSelectedPropertyTypes
                      )
                    }
                    sx={{
                      display:
                        "flex",

                      alignItems:
                        "center",

                      gap: 1,

                      px: 1.5,
                      py: 1,

                      borderRadius:
                        "8px",

                      background:
                        selectedPropertyTypes.includes(
                          item.label
                        )
                          ? "linear-gradient(90deg,#ff9800,#ff5a00)"
                          : "#f8f8f8",

                      cursor:
                        "pointer",

                      "& svg": {
                        fontSize:
                          "18px",

                        color:
                          selectedPropertyTypes.includes(
                            item.label
                          )
                            ? "#fff"
                            : "#403b77",
                      },
                    }}
                  >
                    {item.icon}

                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 500,

                        fontSize:
                          "13px !important",

                        color:
                          selectedPropertyTypes.includes(
                            item.label
                          )
                            ? "#fff"
                            : "#403b77",
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
          </>
        )}

        {/* MORE FILTERS */}
        {tab === 1 && (
          <Box>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 700,

                mb: 2,

                fontSize:
                  "15px !important",
              }}
            >
              More Filter Options
            </Typography>

            <Box
              sx={{
                display: "flex",

                flexDirection:
                  "column",

                gap: 1,
              }}
            >
              {[
                "Pet Friendly",
                "Swimming Pool",
                "Gym",
                "Power Backup",
                "Lift",
                "Parking",
              ].map((item) => (
                <Box
                  key={item}
                  sx={{
                    display: "flex",

                    alignItems:
                      "center",
                  }}
                >
                  <Checkbox
                    sx={{
                      p: 1,

                      color:
                        "#bdbdbd",

                      "&.Mui-checked":
                        {
                          color:
                            "#ff9800",
                        },
                    }}
                  />

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#777",

                      fontSize:
                        "13px !important",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}

        {/* APPLY BUTTON */}
        <Button
          fullWidth
          sx={{
            mt: 3,

            width: "100%",

            height: "50px",

            borderRadius: "10px",

            textTransform: "none",

            background:
              "linear-gradient(90deg,#ff5a00,#ff3d00)",

            color: "#fff",

            boxShadow: "none",

            "&:hover": {
              background:
                "linear-gradient(90deg,#ff5a00,#ff3d00)",

              boxShadow: "none",
            },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: 700,

              color: "#fff",
            }}
          >
            Apply Filters
          </Typography>
        </Button>
      </Box>
    </>
  );

  return (
    <>
      {/* MOBILE BUTTON */}
      <Box
        sx={{
          display: {
            xs: "flex",
            md: "none",
          },

          mb: 2,
           px: 1.8,
        }}
      >
        <Button
          fullWidth
          startIcon={<TuneIcon />}
          onClick={() =>
            setMobileFilterOpen(true)
          }
          sx={{
            height: "50px",
            width: "100%",
           

            borderRadius: "14px",

            textTransform: "none",

            background:
              "linear-gradient(90deg,#ff9800,#ff5a00)",

            color: "#fff",

            fontWeight: 700,

            boxShadow: "none",

            "&:hover": {
              background:
                "linear-gradient(90deg,#ff9800,#ff5a00)",

              boxShadow: "none",
            },
          }}
        >
          Advanced Filters
        </Button>
      </Box>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="bottom"
        open={mobileFilterOpen}
        onClose={() =>
          setMobileFilterOpen(false)
        }
        slotProps={{
          paper: {
            sx: {
              borderTopLeftRadius:
                "24px",

              borderTopRightRadius:
                "24px",

              height: "92vh",

              overflow: "hidden",
            },
          },
        }}
      >
        {/* HEADER */}
        <Box
          sx={{
            display: "flex",

            alignItems: "center",

            justifyContent:
              "space-between",

            px: 2,

            py: 2,

            borderBottom:
              "1px solid #ececec",

            background: "#fff",

            position: "sticky",

            top: 0,

            zIndex: 20,
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",

              fontWeight: 700,
            }}
          >
            Advanced Filters
          </Typography>

          <IconButton
            onClick={() =>
              setMobileFilterOpen(false)
            }
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            flex: 1,

            overflowY: "auto",

            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <FilterContent />
        </Box>
      </Drawer>

      {/* DESKTOP SIDEBAR */}
      <Box
        sx={{
          width: "100%",

          maxWidth: {
            xs: "100%",
            md: "400px",
          },

          background: "#fff",

          borderRadius: "12px",

          overflow: "hidden",

          boxShadow:
            "0px 4px 18px rgba(0,0,0,0.04)",

          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <FilterContent />
      </Box>
    </>
  );
};

export default FilterSidebar;