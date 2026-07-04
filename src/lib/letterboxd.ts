export type LetterboxdFilm = {
  title: string;
  year: string;
  rating: number;
  poster: string | null;
  href: string;
};

const USERNAME = "anany3007";
const MIN_RATING = 4;
const MAX_FILMS = 6;

function extract(tag: string, block: string): string | null {
  const match = block.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  return match ? match[1].trim() : null;
}

export async function getTopRatedFilms(): Promise<LetterboxdFilm[]> {
  try {
    const res = await fetch(`https://letterboxd.com/${USERNAME}/rss/`, {
      headers: { "User-Agent": "Mozilla/5.0" },
      cache: "no-store",
    });
    if (!res.ok) return [];
    const xml = await res.text();

    const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
    const films: LetterboxdFilm[] = [];

    for (const item of items) {
      const rating = parseFloat(extract("letterboxd:memberRating", item) ?? "0");
      if (rating < MIN_RATING) continue;

      const title = extract("letterboxd:filmTitle", item);
      const year = extract("letterboxd:filmYear", item);
      const link = extract("link", item);
      const description = extract("description", item) ?? "";
      const posterMatch = description.match(/<img src="([^"]+)"/);

      if (!title || !year || !link) continue;

      films.push({
        title,
        year,
        rating,
        poster: posterMatch ? posterMatch[1] : null,
        href: link,
      });

      if (films.length >= MAX_FILMS) break;
    }

    // Feed is already newest-first, so this is your most recently
    // logged 4+ rated films — updates automatically as you rate more.
    return films;
  } catch {
    return [];
  }
}
