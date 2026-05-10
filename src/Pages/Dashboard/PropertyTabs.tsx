import { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRef } from "react";

import {
  Box,
  Typography,
} from "@mui/material";

const tabs = [
  "Flat For Sale",
  "Flat For Rent",
  "Commercial Space",
  "Residence Space",
  "PG/Co-Living",
];

 const cityData: any = {
    "Flat For Sale": [
      {
        title: "Flats For Sale In Bangalore",
        items: [
          "Flats For Sale In Bangalore",
          "Flats For Sale In Koramangala",
          "Flats For Sale In Marathahalli",
          "Flats For Sale In HSR Layout",
          "Flats For Sale In Whitefield",
          "Flats For Sale In Indira Nagar",
          "Flats For Sale In Bellandur",
          "Flats For Sale In Chandra Layout",
          "Flats For Sale In J. P. Nagar",
          "Flats For Sale In BTM Layout",
          "Flats For Sale In Jayanagar",
        ],
      },

      {
        title: "Flats For Sale In Chennai",
        items: [
          "Flats For Sale In Bangalore",
          "Flats For Sale In Koramangala",
          "Flats For Sale In Marathahalli",
          "Flats For Sale In HSR Layout",
          "Flats For Sale In Whitefield",
          "Flats For Sale In Indira Nagar",
          "Flats For Sale In Bellandur",
          "Flats For Sale In Chandra Layout",
          "Flats For Sale In J. P. Nagar",
          "Flats For Sale In BTM Layout",
          "Flats For Sale In Jayanagar",
        ],
      },

      {
        title: "Flats For Sale In Hyderabad",
        items: [
          "Flats For Sale In Bangalore",
          "Flats For Sale In Koramangala",
          "Flats For Sale In Marathahalli",
          "Flats For Sale In HSR Layout",
          "Flats For Sale In Whitefield",
          "Flats For Sale In Indira Nagar",
          "Flats For Sale In Bellandur",
          "Flats For Sale In Chandra Layout",
          "Flats For Sale In J. P. Nagar",
          "Flats For Sale In BTM Layout",
          "Flats For Sale In Jayanagar",
        ],
      },

      {
        title: "Flats For Sale In Delhi",
        items: [
          "Flats For Sale In Bangalore",
          "Flats For Sale In Koramangala",
          "Flats For Sale In Marathahalli",
          "Flats For Sale In HSR Layout",
          "Flats For Sale In Whitefield",
          "Flats For Sale In Indira Nagar",
          "Flats For Sale In Bellandur",
          "Flats For Sale In Chandra Layout",
          "Flats For Sale In J. P. Nagar",
          "Flats For Sale In BTM Layout",
          "Flats For Sale In Jayanagar",
        ],
      },
    ],

    "Flat For Rent": [
      {
        title: "Flats For Rent In Bangalore",
        items: [
          "1 BHK Flats In Bangalore",
          "2 BHK Flats In Bangalore",
          "3 BHK Flats In Bangalore",
          "Luxury Flats In Bangalore",
          "Affordable Flats In Bangalore",
          "Family Flats In Bangalore",
          "Studio Flats In Bangalore",
          "Rental Flats In Whitefield",
          "Rental Flats In HSR Layout",
          "Rental Flats In Indira Nagar",
          "Rental Flats In BTM",
        ],
      },

      {
        title: "Flats For Rent In Chennai",
        items: [
          "1 BHK Flats In Chennai",
          "2 BHK Flats In Chennai",
          "3 BHK Flats In Chennai",
          "Luxury Flats In Chennai",
          "Affordable Flats In Chennai",
          "Family Flats In Chennai",
          "Studio Flats In Chennai",
          "Rental Flats In OMR",
          "Rental Flats In Anna Nagar",
          "Rental Flats In T Nagar",
          "Rental Flats In Velachery",
        ],
      },

      {
        title: "Flats For Rent In Hyderabad",
        items: [
          "1 BHK Flats In Hyderabad",
          "2 BHK Flats In Hyderabad",
          "3 BHK Flats In Hyderabad",
          "Luxury Flats In Hyderabad",
          "Affordable Flats In Hyderabad",
          "Family Flats In Hyderabad",
          "Studio Flats In Hyderabad",
          "Rental Flats In Gachibowli",
          "Rental Flats In Madhapur",
          "Rental Flats In Kukatpally",
          "Rental Flats In Jubilee Hills",
        ],
      },

      {
        title: "Flats For Rent In Delhi",
        items: [
          "1 BHK Flats In Delhi",
          "2 BHK Flats In Delhi",
          "3 BHK Flats In Delhi",
          "Luxury Flats In Delhi",
          "Affordable Flats In Delhi",
          "Family Flats In Delhi",
          "Studio Flats In Delhi",
          "Rental Flats In Saket",
          "Rental Flats In Rohini",
          "Rental Flats In Dwarka",
          "Rental Flats In Lajpat Nagar",
        ],
      },
    ],

    "Commercial Space": [
      {
        title: "Commercial Space In Bangalore",
        items: [
          "Office Space In Bangalore",
          "Coworking Space In Bangalore",
          "Retail Shops In Bangalore",
          "Commercial Buildings",
          "Showrooms",
          "Business Parks",
          "Warehouses",
          "IT Parks",
          "Commercial Land",
          "Industrial Space",
          "Corporate Offices",
        ],
      },

      {
        title: "Commercial Space In Chennai",
        items: [
          "Office Space In Chennai",
          "Coworking Space In Chennai",
          "Retail Shops In Chennai",
          "Commercial Buildings",
          "Showrooms",
          "Business Parks",
          "Warehouses",
          "IT Parks",
          "Commercial Land",
          "Industrial Space",
          "Corporate Offices",
        ],
      },

      {
        title: "Commercial Space In Hyderabad",
        items: [
          "Office Space In Hyderabad",
          "Coworking Space In Hyderabad",
          "Retail Shops In Hyderabad",
          "Commercial Buildings",
          "Showrooms",
          "Business Parks",
          "Warehouses",
          "IT Parks",
          "Commercial Land",
          "Industrial Space",
          "Corporate Offices",
        ],
      },

      {
        title: "Commercial Space In Delhi",
        items: [
          "Office Space In Delhi",
          "Coworking Space In Delhi",
          "Retail Shops In Delhi",
          "Commercial Buildings",
          "Showrooms",
          "Business Parks",
          "Warehouses",
          "IT Parks",
          "Commercial Land",
          "Industrial Space",
          "Corporate Offices",
        ],
      },
    ],

    "Residence Space": [
      {
        title: "Residence Space In Bangalore",
        items: [
          "Luxury Villas",
          "Independent Houses",
          "Farm Houses",
          "Premium Apartments",
          "Duplex Homes",
          "Gated Communities",
          "Modern Homes",
          "Family Homes",
          "Residential Plots",
          "Town Houses",
          "Holiday Homes",
        ],
      },

      {
        title: "Residence Space In Chennai",
        items: [
          "Luxury Villas",
          "Independent Houses",
          "Farm Houses",
          "Premium Apartments",
          "Duplex Homes",
          "Gated Communities",
          "Modern Homes",
          "Family Homes",
          "Residential Plots",
          "Town Houses",
          "Holiday Homes",
        ],
      },

      {
        title: "Residence Space In Hyderabad",
        items: [
          "Luxury Villas",
          "Independent Houses",
          "Farm Houses",
          "Premium Apartments",
          "Duplex Homes",
          "Gated Communities",
          "Modern Homes",
          "Family Homes",
          "Residential Plots",
          "Town Houses",
          "Holiday Homes",
        ],
      },

      {
        title: "Residence Space In Delhi",
        items: [
          "Luxury Villas",
          "Independent Houses",
          "Farm Houses",
          "Premium Apartments",
          "Duplex Homes",
          "Gated Communities",
          "Modern Homes",
          "Family Homes",
          "Residential Plots",
          "Town Houses",
          "Holiday Homes",
        ],
      },
    ],

    "PG/Co-Living": [
      {
        title: "PG/Co-Living In Bangalore",
        items: [
          "Boys PG",
          "Girls PG",
          "Co-Living Spaces",
          "Luxury PG",
          "Affordable PG",
          "Student PG",
          "Working Professional PG",
          "Single Sharing",
          "Double Sharing",
          "Triple Sharing",
          "Furnished PG",
        ],
      },

      {
        title: "PG/Co-Living In Chennai",
        items: [
          "Boys PG",
          "Girls PG",
          "Co-Living Spaces",
          "Luxury PG",
          "Affordable PG",
          "Student PG",
          "Working Professional PG",
          "Single Sharing",
          "Double Sharing",
          "Triple Sharing",
          "Furnished PG",
        ],
      },

      {
        title: "PG/Co-Living In Hyderabad",
        items: [
          "Boys PG",
          "Girls PG",
          "Co-Living Spaces",
          "Luxury PG",
          "Affordable PG",
          "Student PG",
          "Working Professional PG",
          "Single Sharing",
          "Double Sharing",
          "Triple Sharing",
          "Furnished PG",
        ],
      },

      {
        title: "PG/Co-Living In Delhi",
        items: [
          "Boys PG",
          "Girls PG",
          "Co-Living Spaces",
          "Luxury PG",
          "Affordable PG",
          "Student PG",
          "Working Professional PG",
          "Single Sharing",
          "Double Sharing",
          "Triple Sharing",
          "Furnished PG",
        ],
      },
    ],
  };

const PropertyTabs = () => {
  const [activeTab, setActiveTab] =
    useState("Flat For Sale");
    /* INSIDE COMPONENT */
const tabsRef = useRef<any>(null);

const scrollTabs = (direction: string) => {
  if (tabsRef.current) {
    tabsRef.current.scrollBy({
      left:
        direction === "left"
          ? -220
          : 220,
      behavior: "smooth",
    });
  }
};

  return (
    <Box
      sx={{
        width: "100%",

        background: "#fff",

        borderRadius: "10px",

        p: {
          xs: 2,
          md: 4,
        },
      }}
    >
      {/* TOP TABS */}
      {/* TOP TABS */}
<Box
  sx={{
    position: "relative",

    mb: 5,
  }}
>
  {/* LEFT ARROW */}
  <Box
    onClick={() =>
      scrollTabs("left")
    }
    sx={{
      display: {
        xs: "flex",
        md: "none",
      },

      position: "absolute",

      left: "-8px",

      top: "50%",

      transform: "translateY(-50%)",

      zIndex: 2,

      width: "34px",

      height: "34px",

      borderRadius: "50%",

      background: "#fff",

      alignItems: "center",

      justifyContent: "center",

      boxShadow:
        "0px 4px 14px rgba(0,0,0,0.12)",

      cursor: "pointer",
    }}
  >
    <ChevronLeftIcon
      sx={{
        fontSize: "20px",
        color:"orange"
      }}
    />
  </Box>

  {/* RIGHT ARROW */}
  <Box
    onClick={() =>
      scrollTabs("right")
    }
    sx={{
      display: {
        xs: "flex",
        md: "none",
      },

      position: "absolute",

      right: "-8px",

      top: "50%",

      transform: "translateY(-50%)",

      zIndex: 2,

      width: "34px",

      height: "34px",

      borderRadius: "50%",

      background: "#fff",

      alignItems: "center",

      justifyContent: "center",

      boxShadow:
        "0px 4px 14px rgba(0,0,0,0.12)",

      cursor: "pointer",
    }}
  >
    <ChevronRightIcon
      sx={{
        fontSize: "20px",
         color:"orange"
      }}
    />
  </Box>

  {/* TABS */}
  <Box
    ref={tabsRef}
    sx={{
      width: "100%",

      display: "flex",

      gap: "18px",

      overflowX: "auto",

      scrollBehavior: "smooth",

      "&::-webkit-scrollbar": {
        display: "none",
      },

      msOverflowStyle: "none",

      scrollbarWidth: "none",

      pb: 1,

      /* DESKTOP */
      "@media (min-width:900px)": {
        display: "grid",

        gridTemplateColumns:
          "repeat(5, 1fr)",

        overflow: "hidden",
      },
    }}
  >
    {tabs.map((tab) => (
      <Box
        key={tab}
        onClick={() =>
          setActiveTab(tab)
        }
        sx={{
          minWidth: {
            xs: "190px",
            md: "auto",
          },

          height: "50px",

          border:
            activeTab === tab
              ? "none"
              : "1px solid #d9d9d9",

          background:
            activeTab === tab
              ? "#ff9800"
              : "#fff",

          borderRadius: "12px",

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          cursor: "pointer",

          transition: "0.3s",

          flexShrink: 0,
        }}
      >
        <Typography
          sx={{
            color:
              activeTab === tab
                ? "#fff"
                : "#444",

            fontWeight: 500,

            fontSize:
              "15px !important",

            px: 2,

            whiteSpace: "nowrap",
          }}
        >
          {tab}
        </Typography>
      </Box>
    ))}
  </Box>
</Box>

      {/* CONTENT */}
      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            lg: "1fr 1fr 1fr 1fr",
          },

          columnGap: "80px",

          rowGap: "40px",
        }}
      >
        {cityData[activeTab]?.map(
          (
            section: any,
            index: number
          ) => (
            <Box key={index}>
              {/* TITLE */}
              <Typography
                variant="body2"
                sx={{
                  fontSize: "16px",

                  fontWeight: 700,

                  color: "#222",

                  mb: 3,
                }}
              >
                {section.title}
              </Typography>

              {/* LINKS */}
              <Box
                sx={{
                  display: "flex",

                  flexDirection: "column",

                  gap: 2,
                }}
              >
                {section.items.map(
                  (
                    item: string,
                    itemIndex: number
                  ) => (
                    <Typography
                      key={itemIndex}
                      variant="body2"
                      sx={{
                        color: "#555",

                        cursor: "pointer",

                        transition: "0.3s",

                        "&:hover": {
                          color: "#ff9800",
                        },
                      }}
                    >
                      {item}
                    </Typography>
                  )
                )}
              </Box>
            </Box>
          )
        )}
      </Box>
    </Box>
  );
};

export default PropertyTabs;