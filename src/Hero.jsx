import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Whatever photo booth neutra, lyft cold-pressed poutine gochujang
            letterpress ennui truffaut locavore keffiyeh. Farm-to-table tonx meh
            gorpcore synth, vaporware lyft celiac poke cred ennui cronut palo
            santo mlkshk jean shorts. Solarpunk vexillologist hoodie slow-carb,
            tousled paleo craft beer DIY pitchfork umami kogi DSA.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='woman and the browser' className='img' />
        </div>
      </div>
    </section>
  );
};
export default Hero;
