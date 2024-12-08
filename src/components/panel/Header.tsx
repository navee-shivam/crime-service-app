const Header = () => {
  return (
    <header
      style={{
        background: "linear-gradient(to right, #d4fc79, #96e6a1)",
        padding: "20px",
        textAlign: "center",
        color: "white",
        borderBottom: "3px solid #f0f0f0",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", margin: 0 }}>
        Crimes Against Women in India
      </h1>
      <p style={{ fontSize: "1rem", marginTop: "5px", color: "#f5f5f5" }}>
        Data from 2001 to 2021
      </p>
    </header>
  );
};

export default Header;
