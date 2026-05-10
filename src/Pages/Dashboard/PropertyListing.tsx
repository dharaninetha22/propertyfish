import Box from "@mui/material/Box";

import FilterSidebar from "./FilterSidebar";
import PropertyCard from "./PropertyCard";
// import ListingTopbar from "./ListingTopbar";

import { Slider } from "../../assets";
import MapView from "./MapView";
import ListingTopbar from "./ListingTopbar";



const properties = [
  {
    id: 1,
    title: "2 BHK Independent Builder Floor",
    price: "₹20,000",
    location: "Sector 2, Noida",
    bathroom: "2",
    parking: "Available",
     images: [
      Slider.slider1,
      Slider.slider2,
      Slider.slider3,
    
    ],
    description:
      "3bhk excellent build builder’s flat Carpet area is 120 sq yards (1150 sq ft) 3 bed rooms with drawing...",
    highlights: [
      "24 Hour Concierge",
      "24x7 Security",
      "Close to Market",
      "Close to Mall",
    ],
  },

  {
    id: 2,
    title: "3 BHK Luxury Apartment",
    price: "₹35,000",
    location: "Sector 2, Noida",
    bathroom: "3",
    parking: "Available",
 images: [
      Slider.slider4,
      Slider.slider2,
      Slider.slider3,
    
    ],
    description:
      "Luxury apartment with premium amenities and modern architecture...",
    highlights: [
      "Club House",
      "Swimming Pool",
      "Gym",
      "Children Park",
    ],
  },
    {
    id: 3,
    title: "3 BHK Luxury Apartment",
    price: "₹35,000",
    location: "Sector 2, Noida",
    bathroom: "3",
    parking: "Available",
      images: [
      Slider.slider3,
      Slider.slider4,
      Slider.slider2,
    
    ],
    description:
      "Luxury apartment with premium amenities and modern architecture...",
    highlights: [
      "Club House",
      "Swimming Pool",
      "Gym",
      "Children Park",
    ],
  },
    {
    id:4 ,
    title: "3 BHK Luxury Apartment",
    price: "₹35,000",
    location: "Sector 2, Noida",
    bathroom: "3",
    parking: "Available",
      images: [
      Slider.slider4,
      Slider.slider2,
      Slider.slider3,
    
    ],
    description:
      "Luxury apartment with premium amenities and modern architecture...",
    highlights: [
      "Club House",
      "Swimming Pool",
      "Gym",
      "Children Park",
    ],
  },
];

const PropertyListing = ({
  viewMode,
}: {
  viewMode: "list" | "map";
}) => {
  return (
    <Box
      sx={{
        background: "#f5f5f5",
        minHeight: "100vh",
        px:{xs: 2, md: 4},
      }}
    >
      {/* MAIN CONTENT WRAPPER */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          p: {xs:"auto", md: 3},
          maxWidth: "1600px",
          margin: "0 auto",
           flexDirection: {
      xs: "column",
      md: "row",
    },
        }}
      >
        {/* LEFT FILTER - STICKY */}
        {/* LEFT SIDEBAR */}
{/* LEFT SIDEBAR */}
<Box
  sx={{
    width: {
      xs: "100%",
      md: "400px",
    },

    flexShrink: 0,

    /* MOBILE */
    position: {
      xs: "relative",
      md: "sticky",
    },

    top: {
      md: 0,
    },

    height: {
      xs: "auto",
      md: "100vh",
    },

    overflowY: {
      xs: "visible",
      md: "auto",
    },

    alignSelf: {
      md: "flex-start",
    },

    scrollbarWidth: "none",

    msOverflowStyle: "none",

    "&::-webkit-scrollbar": {
      display: "none",
    },
  }}
>
  <FilterSidebar />
</Box>

        {/* RIGHT CARDS */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 3,
            minWidth: 0,
          }}
        >
          <ListingTopbar  />

          {/* CONDITIONAL RENDERING */}
          {viewMode === "list" ? (
            <>
              {/* PROPERTY CARDS */}
              {properties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                />
              ))}
            </>
          ) : (
            <MapView />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyListing;