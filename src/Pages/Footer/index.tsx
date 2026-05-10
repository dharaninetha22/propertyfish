import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";

import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import { whitelogo } from "../../assets";

const importantLinks = [
  "Mobile Apps",
  "Our Services",
  "Post Free Property",
  "Blog",
  "Customer Service",
  "Sitemap",
];

const partners = [
  "About Us",
  "Contact Us",
  "Careers With Us",
  "Terms & Conditions",
  "Request Info",
  "Feedback",
  "Report A Problem",
  "Testimonials",
];

const socialIcons = [
  {
    icon: <FacebookOutlinedIcon />,
    link: "https://facebook.com",
  },

  {
    icon: <InstagramIcon />,
    link: "https://instagram.com",
  },

  {
    icon: <TwitterIcon />,
    link: "https://twitter.com",
  },

  {
    icon: <LinkedInIcon />,
    link: "https://linkedin.com",
  },

  {
    icon: <PinterestIcon />,
    link: "https://pinterest.com",
  },
];

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",

        background: "#2E2474",

        px: {
          xs: 3,
          md: 10,
        },

        py: {
          xs: 5,
          md: 3,
        },
      }}
    >
      {/* MAIN GRID */}
      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "1.4fr 1fr 1fr 1fr",
          },

          gap: {
            xs: 5,
            md: 8,
          },
        }}
      >
        {/* LEFT */}
        <Box>
          {/* LOGO */}
          <Box 
        sx={{
    display: "flex",
    alignItems: "center",
    justifyContent:"space-between",
    gap: 1,
  }}>
          <Box
            component="img"
            src={whitelogo}
            alt="logo"
            sx={{
              width: 200,
              height: 70,
            }}
          />

         
        </Box>

          {/* DESC */}
          <Typography
            variant="body2"
            sx={{
              color: "#d5d3ec",

              lineHeight: 1.8,

              maxWidth: "420px",

              mb: 6,
            }}
          >
            There are many variations of
            passages Lorem Ipsum available,
            but the majority have suffered
            alterations
          </Typography>

          {/* CONNECT */}
          <Typography
            variant="body2"
            sx={{
              color: "#fff",

              fontWeight: 600,
                letterSpacing:"1.1px",
              mb: 3,
            }}
          >
            CONNECT WITH US
          </Typography>

          {/* SOCIAL */}
        {/* SOCIAL */}
<Box
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 2,
    flexWrap: "wrap",
  }}
>
  {socialIcons.map((item, index) => (
    <Box
      key={index}
      component="a"
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        width: "50px",

        height: "50px",

        border:
          "1px solid rgba(255,255,255,0.35)",

        borderRadius: "14px",

        display: "flex",

        alignItems: "center",

        justifyContent: "center",

        cursor: "pointer",

        transition: "0.3s",

        textDecoration: "none",

        "& svg": {
          color: "#fff",

          fontSize: "26px",
        },

        "&:hover": {
          background:
            "rgba(255,255,255,0.08)",

          transform: "translateY(-4px)",

          border:
            "1px solid rgba(255,255,255,0.7)",
        },
      }}
    >
      {item.icon}
    </Box>
  ))}
</Box>
        </Box>

        {/* IMPORTANT LINKS */}
        <Box>
          <Typography
            variant="body2"
            sx={{
              color: "#fff",

              fontWeight: 700,
              

              mb: 2,

              letterSpacing: "1.1px",
            }}
          >
            IMPORTANT LINKS
          </Typography>

          <Box
            sx={{
              display: "flex",

              flexDirection: "column",

              gap: 1.5,
            }}
          >
            {importantLinks.map(
              (item, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{
                    color: "#aeadbc",

                    cursor: "pointer",

                    transition: "0.3s",

                    "&:hover": {
                      color: "#fff",
                    },
                  }}
                >
                  {item}
                </Typography>
              )
            )}
          </Box>
        </Box>

        {/* PARTNERS */}
        <Box>
          <Typography
            variant="body2"
            sx={{
              color: "#fff",

              fontWeight: 700,
                 letterSpacing: "1.1px",
              mb: 2,
            }}
          >
            OUR PARTNERS
          </Typography>

          <Box
            sx={{
              display: "flex",

              flexDirection: "column",

              gap: 1.5,
            }}
          >
            {partners.map(
              (item, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{
                    color: "#aeadbc",

                    cursor: "pointer",

                    transition: "0.3s",

                    "&:hover": {
                      color: "#fff",
                    },
                  }}
                >
                  {item}
                </Typography>
              )
            )}
          </Box>
        </Box>

        {/* CONTACT */}
        <Box>
          <Typography
            variant="body2"
            sx={{
              color: "#fff",

              fontWeight: 700,

              mb: 2,
               letterSpacing: "1.1px",
            }}
          >
            CONTACT US
          </Typography>

          {/* SUPPORT */}
          <Typography
            variant="body2"
            sx={{
              color: "#fff",

              fontWeight: 700,
              fontSize:"13px !important",
              mb: 1,
            }}
          >
            Contact Support:
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#aeadbc",

              mb: 2,
            }}
          >
            +91 964221134
          </Typography>

          {/* EMAIL */}
          <Typography
            
            sx={{
              color: "#fff",

              fontWeight: 700,
              fontSize:"13px !important",
              mb: 1,
            }}
          >
            Support Email:
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#aeadbc",

              mb: 2,
            }}
          >
            support@propertyfish.in
          </Typography>

          {/* APPS */}
          <Typography
            
            sx={{
              color: "#fff",

              fontWeight: 700,

              mb: 2,
              fontSize:"13px !important",
            }}
          >
            Download Apps:
          </Typography>

         {/* PLAY STORE */}
<Box
  component="a"
  href="https://play.google.com/"
  target="_blank"
  rel="noopener noreferrer"
  sx={{
    width: "180px",

    height: "50px",

    border:
      "1px solid rgba(255,255,255,0.5)",

    borderRadius: "40px",

    display: "flex",

    alignItems: "center",

    gap: 1,

    px: 3,

    mb: 2,

    cursor: "pointer",

    textDecoration: "none",

    transition: "0.3s",

    "&:hover": {
      background:
        "rgba(255,255,255,0.08)",

      transform: "translateY(-2px)",
    },
  }}
>
  <AndroidIcon
    sx={{
      color: "#fff",
      fontSize: "26px",
    }}
  />

  <Typography
    variant="body2"
    sx={{
      color: "#fff",
    }}
  >
    Google Play
  </Typography>
</Box>

{/* APP STORE */}
<Box
  component="a"
  href="https://www.apple.com/app-store/"
  target="_blank"
  rel="noopener noreferrer"
  sx={{
    width: "180px",

    height: "50px",

    border:
      "1px solid rgba(255,255,255,0.5)",

    borderRadius: "40px",

    display: "flex",

    alignItems: "center",

    gap: 1,

    px: 3,

    cursor: "pointer",

    textDecoration: "none",

    transition: "0.3s",

    "&:hover": {
      background:
        "rgba(255,255,255,0.08)",

      transform: "translateY(-2px)",
    },
  }}
>
  <AppleIcon
    sx={{
      color: "#fff",
      fontSize: "26px",
    }}
  />

  <Typography
    variant="body2"
    sx={{
      color: "#fff",
    }}
  >
    App Store
  </Typography>
</Box>
        </Box>
      </Box>
      {/* COPYRIGHT SECTION */}
<Box
  sx={{
    width: "100%",

    borderTop: "1px solid rgba(255,255,255,0.18)",

    mt: {
      xs: 5,
      md: 4,
    },

    pt: 3,

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    textAlign: "center",
  }}
>
<Typography
  variant="body2"
  sx={{
    color: "#d4d1ec",
    fontSize: {
      xs: "13px",
      md: "14px",
    },
    lineHeight: 1.8,
  }}
>
  Copyright © 2023. All rights reserved by{" "}

  <Box
    component="a"
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      color: "#fff",

      fontWeight: 700,

      textDecoration: "none",

      transition: "0.3s",

      "&:hover": {
        color: "#ff9800",
      },
    }}
  >
    Anya Infotech Private Limited
  </Box>
</Typography>
</Box>
    </Box>
  );
};

export default Footer;