const Background = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute top-20 left-20 w-32 h-32 border border-teal-400/20 rotate-45 animate-pulse" />
      <div
        className="absolute top-40 right-32 w-16 h-16 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full animate-bounce"
        style={{ animationDuration: "3s" }}
      />
      <div
        className="absolute bottom-32 left-40 w-24 h-24 border-2 border-purple-400/20 rounded-full animate-spin"
        style={{ animationDuration: "20s" }}
      />
    </div>
  );
};

export default Background;
