import Box from "@mui/material/Box";

const MapView = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "600px",
        background: "#fff",
        borderRadius: "30px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Embedded Google Map - Replace with your API key and coordinates */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.123456789012!2d77.3910!3d28.5355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1623072000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Property Map"
      ></iframe>

      {/* Optional: Add property markers or overlays here */}
      {/* For now, just the map */}
    </Box>
  );
};

export default MapView;