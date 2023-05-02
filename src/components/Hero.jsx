import HeroImage from "../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__info">
        <h1>
          Welcome to my{" "}
          <span className="hero__name">
            <a
              href="https://en.wikipedia.org/wiki/Rick_and_Morty"
              target="_blank"
            >
              Rick and Morty
            </a>
          </span>{" "}
          app!
        </h1>
        <h2>
          Feel free to look around and <br />
          learn more about the show.
        </h2>
        <p>Season 7 is coming!</p>
        <p>
          <a
            className="hero__link"
            href="https://www.inverse.com/entertainment/rick-morty-season-6-episode-7-release-date-time-plot-cast-trailer-for-adult-swims-sci-fi-show"
            target="_blank"
          >
            Latest News
          </a>
        </p>
      </div>
      <img className="hero__image" src={HeroImage} alt="" />
    </section>
  );
};

export default Hero;
