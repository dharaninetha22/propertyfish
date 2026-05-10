import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const PropertyBanner = () => {
  return (
    <Box
      sx={{
        width: "100%",

        height: {
          xs: "auto",
          md: "250px",
        },

        position: "relative",

        overflow: "hidden",

        display: "flex",

        flexDirection: {
          xs: "column",
          md: "row",
        },

        backgroundImage:
          "linear-gradient(rgba(66,58,122,0.72), rgba(66,58,122,0.72)), url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85')",

        backgroundSize: "cover",

        backgroundPosition: "center",
      }}
    >
      {/* LEFT WHITE LINE */}
      <Box
        sx={{
          position: "absolute",

          left: "34px",

          top: "50%",

          transform: "translateY(-50%)",

          width: "2px",

          height: "75%",

          background: "#fff",

          opacity: 0.9,

          zIndex: 2,

          display: {
            xs: "none",
            md: "block",
          },
        }}
      />

      {/* CENTER DIVIDER */}
      <Box
        sx={{
          position: "absolute",

          zIndex: 2,

          background: "#fff",

          opacity: 0.9,

          left: "50%",

          top: "50%",

          transform:
            "translate(-50%, -50%)",

          /* MOBILE */
          width: {
            xs: "80%",
            md: "2px",
          },

          height: {
            xs: "1px",
            md: "75%",
          },
        }}
      />

      {/* LEFT CONTENT */}
      <Box
        sx={{
          flex: 1,

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          textAlign: "center",

          position: "relative",

          zIndex: 3,

          px: {
            xs: 3,
            md: 4,
          },

          py: {
            xs: 6,
            md: 0,
          },
        }}
      >
        <Box>
          <Typography
            variant="body1"
            sx={{
              color: "#fff",

              fontSize: {
                xs: "18px",
                md: "20px",
              },

              fontWeight: 700,

              letterSpacing: "1.1px",

              mb: 2,
            }}
          >
            Find Property
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#ececec",

              fontSize: {
                xs: "13px",
                md: "14px",
              },

              mb: 2,
            }}
          >
            Select from thousands of options
          </Typography>

          {/* BUTTON */}
          <Box
            sx={{
              width: {
                xs: "150px",
                md: "160px",
              },

              height: "46px",

              background:
                "linear-gradient(90deg,#ff5a00,#ff6d00)",

              borderRadius: "8px",

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              mx: "auto",

              cursor: "pointer",

              transition: "0.3s",

              "&:hover": {
                opacity: 0.9,
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#fff",

                fontSize: {
                  xs: "14px",
                  md: "16px",
                },

                fontWeight: 500,
              }}
            >
              Find Property
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* RIGHT CONTENT */}
      <Box
        sx={{
          flex: 1,

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          textAlign: "center",

          position: "relative",

          zIndex: 3,

          px: {
            xs: 3,
            md: 4,
          },

          py: {
            xs: 6,
            md: 0,
          },
        }}
      >
        <Box>
          <Typography
            variant="body1"
            sx={{
              color: "#fff",

              fontSize: {
                xs: "18px",
                md: "20px",
              },

              fontWeight: 700,

              mb: 2,
            }}
          >
            List Your Property
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#ececec",

              fontSize: {
                xs: "13px",
                md: "14px",
              },

              mb: 2,
            }}
          >
            For Free. Without any brokerage.
          </Typography>

          {/* BUTTON */}
          <Box
            sx={{
              width: {
                xs: "150px",
                md: "160px",
              },

              height: "46px",

              background:
                "linear-gradient(90deg,#ff5a00,#ff6d00)",

              borderRadius: "8px",

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              mx: "auto",

              cursor: "pointer",

              transition: "0.3s",

              "&:hover": {
                opacity: 0.9,
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#fff",

                fontSize: {
                  xs: "14px",
                  md: "16px",
                },

                fontWeight: 500,
              }}
            >
              Free Posting
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyBanner;