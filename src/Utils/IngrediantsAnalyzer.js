import { watchlist } from "./WatchList";

export function analyzeIngredients(input) {
  const ingredients = input.toLowerCase().split(/[,;\n]+/).map(i => i.trim());
  const flagged = ingredients.filter(ing =>
    watchlist.some(b => ing.includes(b))
  );

  return {
    safe: flagged.length === 0,
    flagged
  };
}
