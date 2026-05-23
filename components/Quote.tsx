import { useEffect, useState } from "react";
import ScaleText from "react-scale-text";

interface Data {
  author: string;
  quote: string;
}

const quotes: Data[] = [
  // Dune
  {
    quote:
      "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration.",
    author: "Frank Herbert, Dune",
  },
  {
    quote:
      "The mystery of life isn't a problem to solve, but a reality to experience.",
    author: "Frank Herbert, Dune",
  },
  {
    quote:
      "Deep in the human unconscious is a pervasive need for a logical universe that makes sense. But the real universe is always one step beyond logic.",
    author: "Frank Herbert, Dune",
  },
  {
    quote:
      "Without change, something sleeps inside us and seldom awakens. The sleeper must awaken.",
    author: "Frank Herbert, Dune",
  },
  // First Law
  {
    quote: "Better to do a thing than live with the fear of it.",
    author: "Joe Abercrombie, The First Law",
  },
  // Stoic
  {
    quote: "We suffer more in imagination than in reality.",
    author: "Seneca",
  },
  {
    quote:
      "It is not that things are difficult that we do not dare; it is because we do not dare that they are difficult.",
    author: "Seneca",
  },
  {
    quote:
      "You have power over your mind, not outside events. Realize this, and you will find strength.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "Waste no more time arguing about what a good man should be. Be one.",
    author: "Marcus Aurelius",
  },
  {
    quote: "He who fears death will never do anything worthy of a living man.",
    author: "Seneca",
  },
  // Other
  {
    quote: "The most important step a man can take is the next one.",
    author: "Brandon Sanderson, The Way of Kings",
  },
  {
    quote: "The universe is not required to make sense to you.",
    author: "Adrian Tchaikovsky, Children of Time",
  },
  {
    quote: "The universe is a pretty big place. Whatever you do, it matters.",
    author: "James S.A. Corey, Leviathan Wakes",
  },
];

const Quote: React.FC = () => {
  const [data, setData] = useState<Data>({ author: "", quote: "" });

  useEffect(() => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setData(random);
  }, []);

  return (
    <div className="mainCtr">
      <div className="bodyCtr">
        <ScaleText minFontSize={5} maxFontSize={20}>
          <p className="text-lm-primary dark:text-dm-tertiary">
            {`"${data.quote}"`}
          </p>
        </ScaleText>
      </div>
      <p>
        <span className="author text-lm-primary dark:text-dm-tertiary">
          - {data.author}
        </span>
      </p>
    </div>
  );
};

export default Quote;
