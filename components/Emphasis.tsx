export const Emphasis = ({ children }: { children: React.ReactText }) => {
  return (
    <em style={{ backgroundColor: "yellow", color: "black", fontSize: "40px" }}>
      {children}
    </em>
  );
};
