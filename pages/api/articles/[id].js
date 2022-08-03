import { articles } from "../../../data";

export default function handler({ query: { id } }, res) {
  //   res.status(200).json(articles);
  const filtered = articles.filter((article) => article.id === id);

  filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `Article ${id} not found` });
}
