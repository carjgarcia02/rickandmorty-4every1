import HeroImage from "../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${HeroImage})`,
      }}
    >
      <div className="hero__info">
        <h1>Welcome to my Rick and Morty app!</h1>
        <h2>
          Feel free to look around and <br />
          learn more about the show.
        </h2>
        <a
          className="hero__link"
          href="https://www.inverse.com/entertainment/rick-morty-season-6-episode-7-release-date-time-plot-cast-trailer-for-adult-swims-sci-fi-show"
          target="_blank"
        >
          Read the Latest News
        </a>
      </div>
    </section>
  );
};

export default Hero;
