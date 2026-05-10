import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "swiper/css";
import "swiper/css/pagination";
import Link from "@mui/material/Link";


interface PropertyProps {
  property: {
    title: string;
    price: string;
    location: string;
    bathroom: string;
    parking: string;
    description: string;
    highlights: string[];
    images: string[];
  };
}

const PropertyCard = ({ property }: PropertyProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#fff",
        borderRadius: "30px",
        p: {
          xs: 2,
          md: 3,
        },
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        gap: 3,
        boxSizing: "border-box",
      }}
    >
      {/* LEFT IMAGE SECTION */}
      {/* LEFT IMAGE SECTION */}
<Box
  sx={{
    width: {
      xs: "100%",
      md: "280px",
    },

    minWidth: {
      md: "300px",
    },

    position: "relative",

    "& .swiper": {
      borderRadius: "28px",
      overflow: "hidden",
    },

    "& .swiper-pagination": {
      bottom: "14px !important",
    },

    "& .swiper-pagination-bullet": {
      width: "8px",
      height: "8px",
      background: "#fff",
      opacity: 0.5,
    },

    "& .swiper-pagination-bullet-active":
      {
        opacity: 1,
        background: "#fff",
      },
  }}
>
  <Swiper
    modules={[Pagination, Autoplay]}
    pagination={{ clickable: true }}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    loop={true}
  >
    {property.images.map(
      (img, index) => (
        <SwiperSlide key={index}>
          <Box
            component="img"
            src={img}
            alt="property"
            sx={{
              width: "100%",

              height: {
                xs: "240px",
                md: "280px",
              },

              objectFit: "cover",

              borderRadius: "28px",

              display: "block",
            }}
          />
        </SwiperSlide>
      )
    )}
  </Swiper>

  {/* PROFILE IMAGE */}
  <Box
    component="img"
    src="https://randomuser.me/api/portraits/men/32.jpg"
    sx={{
      width: {
        xs: "56px",
        md: "64px",
      },

      height: {
        xs: "56px",
        md: "64px",
      },

      borderRadius: "50%",

      border: "3px solid #fff",

      position: "absolute",

      left: "18px",

      bottom: "18px",

      zIndex: 99,

      objectFit: "cover",
    }}
  />
</Box>

      {/* RIGHT CONTENT */}
      <Box
        sx={{
          flex: 1,

          display: "flex",

          flexDirection: "column",

          justifyContent: "space-between",

          minWidth: 0,
        }}
      >
        {/* TOP */}
        <Box>
          {/* PRICE + ICONS */}
          <Box
            sx={{
              display: "flex",

              justifyContent: "space-between",

              alignItems: "flex-start",

              mb: 1,
            }}
          >
            {/* PRICE */}
            <Box>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 700,

                  display: "flex",

                  alignItems: "center",

                  gap: 1,

                  flexWrap: "wrap",

                  color: "#111",

                  fontSize: "20px",
                }}
              >
                {property.price}

                <Link
                  href="#"
                  underline="always"
                  sx={{
                    color: "#ff5a00",

                    fontSize: "14px",

                    fontWeight: 400,
                  }}
                >
                  agreement details
                </Link>
              </Typography>

              {/* TITLE */}
              <Typography
                variant="body2"
                sx={{
                  fontSize: "14px",

                  fontWeight: 700,

                  color: "#111",

                  mt: 1.5,
                }}
              >
                {property.title}
              </Typography>
            </Box>

            {/* ICONS */}
            <Box
              sx={{
                display: "flex",

                alignItems: "center",

                gap: 2,
              }}
            >
              <FavoriteBorderOutlinedIcon
                sx={{
                  fontSize: "24px",
                  color: "#222",
                  cursor: "pointer",
                }}
              />

              <ShareOutlinedIcon
                sx={{
                  fontSize: "22px",
                  color: "#222",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>

          {/* LOCATION BOX */}
          {/* LOCATION BOX */}
<Box
  sx={{
    mt: 2,

    background: "#f8f8f8",

    borderRadius: "14px",

    display: "flex",

    overflow: "hidden",

    position: "relative",
  }}
>
  {/* LOCATION */}
  <Box
    sx={{
      flex: 1,

      display: "flex",

      alignItems: "center",

      gap: 1.5,

      px: {
        xs: 1.5,
        md: 2,
      },

      py: 2,

      borderRight:
        "1px solid #e7e7e7",
    }}
  >
    <LocationOnOutlinedIcon
      sx={{
        color: "#999",

        fontSize: {
          xs: "20px",
          md: "24px",
        },
      }}
    />

    <Box>
      <Typography
        // variant="body2"
        sx={{
          color: "#999",

          fontSize: "13px !important",

          textTransform: "uppercase",

          mb: 0.5,
        }}
      >
        Location
      </Typography>

      <Typography
        variant="body2"
        sx={{
          fontSize: {
            xs: "13px",
            md: "12px",
          },

          fontWeight: 700,

          color: "#222",
        }}
      >
        {property.location}
      </Typography>
    </Box>
  </Box>

  {/* BATHROOM */}
  <Box
    sx={{
      flex: 1,

      display: "flex",

      alignItems: "center",

      gap: 1.5,

      px: {
        xs: 1.5,
        md: 2,
      },

      py: 2,

      borderRight:
        "1px solid #e7e7e7",
        fontSize: "13px !important",
    }}
  >
    <BathtubOutlinedIcon
      sx={{
        color: "#999",

        fontSize: {
          xs: "20px",
          md: "22px",
        },
      }}
    />

    <Box>
      <Typography
        variant="body2"
        sx={{
          color: "#999",

        fontSize: "13px !important",

          textTransform: "uppercase",

          mb: 0.5,
        }}
      >
        Bathroom
      </Typography>

      <Typography
        variant="body2"
        sx={{
          fontSize: {
            xs: "13px",
            md: "12px",
          },

          fontWeight: 700,

          color: "#222",
        }}
      >
        {property.bathroom}
      </Typography>
    </Box>
  </Box>

  {/* PARKING */}
  <Box
    sx={{
      flex: 1,

      display: "flex",

      alignItems: "center",

      gap: 1.5,

      px: {
        xs: 1.5,
        md: 2,
      },

      py: 2,
    }}
  >
    <DirectionsCarOutlinedIcon
      sx={{
        color: "#999",

        fontSize: {
          xs: "20px",
          md: "22px",
        },
      }}
    />

    <Box>
      <Typography
        variant="body2"
        sx={{
          color: "#999",

          fontSize: "13px !important",

          textTransform: "uppercase",

          mb: 0.5,
        }}
      >
        Parking
      </Typography>

      <Typography
        // variant="body2"
        sx={{
          fontSize: {
            xs: "13px",
            md: "12px",
          },

          fontWeight: 700,

          color: "#222",
        }}
      >
        {property.parking}
      </Typography>
    </Box>
  </Box>

  {/* TOGGLE ICON */}
  <Box
    sx={{
      width: {
        xs: "38px",
        md: "42px",
      },

      minWidth: {
        xs: "38px",
        md: "42px",
      },

      background: "#efefef",

      display: "flex",

      alignItems: "center",

      justifyContent: "center",

      borderLeft:
        "1px solid #e7e7e7",

      cursor: "pointer",
    }}
  >
    <KeyboardArrowDownIcon
      sx={{
        color: "#888",

        fontSize: "20px",
      }}
    />
  </Box>
</Box>

          {/* HIGHLIGHTS */}
        <Box
  sx={{
    mt: 2,
  }}
>
  <Typography
    variant="body2"
    sx={{
      fontSize: "14px",

      color: "#777",

      mb: 1.5,
    }}
  >
    Special Highlights
  </Typography>

  <Box
    sx={{
      display: "flex",

      flexWrap: "wrap",

      gap: 3,
    }}
  >
    {property.highlights.map(
      (item: string, index: number) => (
        <Box
          key={index}
          sx={{
            display: "flex",

            alignItems: "center",

            gap: 0.8,
          }}
        >
          {/* CHECK ICON */}
          <CheckCircleIcon
            sx={{
              color: "#ff9800",

              fontSize: "16px",
            }}
          />

          {/* TEXT */}
          <Typography
            variant="body2"
            sx={{
              color: "#555",

              fontSize: "13px",
            }}
          >
            {item}
          </Typography>
        </Box>
      )
    )}
  </Box>
</Box>

          {/* DESCRIPTION */}
          <Typography
            variant="body2"
            sx={{
              mt: 2,

              color: "#888",

              lineHeight: 1.7,

              fontSize: "13px",
            }}
          >
            {property.description}

            <span
              style={{
                color: "#111",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              More
            </span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyCard;