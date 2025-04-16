export const loadWatchlist = () => {
  const saved = localStorage.getItem("watchlist");
  return saved ? JSON.parse(saved) : [];
};

export const saveWatchlist = (watchlist) => {
  localStorage.setItem("watchlist", JSON.stringify(watchlist));
};
