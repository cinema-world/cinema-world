import "./Home.css";

function Home() {
  return (
    <>
      <div className="hero">
        <div className="top-sl-content">
          <div className="ts-heading">
            <h1>
              <span className="highlight">Cinema World</span> - Free App for
              movies & TV shows online in HD on any device
            </h1>
          </div>
          <div className="ts-body">
            Are you looking for an app to watch movies with friends and family?
            Cinema World is the best app for free movies and TV shows. All for
            free and all legally.
          </div>
          <div className="ts-button mb-3"></div>
        </div>

        <div className="heading">
          What is <strong className="highlight">Cinema World</strong>?
        </div>
        <div className="text">
          <p className="ts-p">
            <strong className="highlight">
              Cinema World is a free app for movies and TV shows
            </strong>
            , where you can watch for free, unlimited. None of your information
            is required as you do not need an account to watch thousands of
            movies and TV shows on our site.
          </p>

          <p className="ts-p">
            Cinema World provides a limitless source of entertainment, including
            content from major platforms such as Youtube, Twitch, and even Live
            TV Channels. Should you not find something to your taste, make a
            request, we are always eager to scour the Internet for your
            satisfaction.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="heading">
          <span>
            Why should you choose Cinema World app for free movies and TV shows?
          </span>
        </div>
        <div className="features-list">
          <div className="item">
            <div className="title">Free without registration</div>
            <p className="con-p">
              On Stream is totally free, you can even stream without an account.
              There are no hidden fees.
            </p>
          </div>

          <div className="item">
            <div className="title">Multi-subtitles</div>
            <p className="con-p">
              Watching foreign movies and shows is never easier. Simply choose
              your desired language and explore new cultures.
            </p>
          </div>

          <div className="item">
            <div className="title">Multiple server options</div>
            <p className="con-p">
              For your smoothest watching experience, we provide not only a
              Torrent server but also other choices well-selected from other
              sites/services.
            </p>
          </div>

          <div className="item">
            <div className="title">
              Download your favorites to watch offline
            </div>
            <p className="con-p">
              Save your movies and shows to watch anytime, anywhere, with or
              without the Internet.
            </p>
          </div>

          <div className="item">
            <div className="title">Custom favorite list</div>
            <p className="con-p">
              Keep track of movies and shows you love! You might want to rewatch
              or share it with people you care about later.
            </p>
          </div>

          <div className="item">
            <div className="title">Latest daily updates</div>
            <p className="con-p">
              Come to Cinema World whenever a new movie or episode is released.
              We are among the fastest to help you quench your thirst.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
