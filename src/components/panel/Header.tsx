const Header = () => {
  return (
    <header
      style={{
        background: "linear-gradient(to right, #04832B, #4AB96C, #80DFE2)",
        padding: "20px",
        textAlign: "center",
        color: "#ffffff",
        borderBottom: "3px solid #3E5060",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          margin: 0,
          fontWeight: "bold",
          letterSpacing: "1px",
          lineHeight: "1.2",
        }}
      >
        Crimes Against Women in India
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          marginTop: "10px",
          color: "#d3d3d3",
        }}
      >
        Comprehensive Analysis (2001 - 2021)
      </p>
    </header>
  );
};

export default Header;
