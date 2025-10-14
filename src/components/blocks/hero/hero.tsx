export default function Hero() {
  return(
    <section className="hero">
      <div className="hero-wrap">
        <div className="video-wrap">
          <video width="100%" autoPlay loop muted playsInline>
            <source src="/video/hero-video/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}