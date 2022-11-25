import HeroImage from '../assets/images/hero.jpg';

const Hero = () => {
  return(
    <div>
      <div>
        <div>
          <h2>Welcome to my Rick and Morty webpage!</h2>
          <h2>Feel free to look around and learn more about the show.</h2>
          <p>Season 7 is coming! <a href="https://www.inverse.com/entertainment/rick-morty-season-6-episode-7-release-date-time-plot-cast-trailer-for-adult-swims-sci-fi-show">Latest News</a></p>
        </div>
        <img src={HeroImage} alt="" />
      </div>
    </div>
  ) ;
};

export default Hero;
