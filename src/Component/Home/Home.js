import "./Home.css";
import target from "./media/icons/target.png";
import subtitle from "./media/icons/subtitle.png";
import servers from "./media/icons/servers.png";
import download from "./media/icons/download.png";
import wishlist from "./media/icons/wishlist.png";
import video from "./media/icons/video.png";

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

      <div className="containerHH" style={{ color: "white", backgroundColor: "#121318" }}>
        <div className="heading" >
          <span>
            Why should you choose <span className="highlight">Cinema World</span> app for free movies and TV shows?
          </span>
        </div>
        <div className="features-list">
          <div className="item">
            <img src={target} alt="target"/>
            <div className="title">Free without registration</div>
            <p className="con-p">
              Cinema World is totally free, you can even stream without an account.
              There are no hidden fees.
            </p>
          </div>

          <div className="item">
          <img src={subtitle} alt="subtitle"/>
            <div className="title">Multi-subtitles</div>
            <p className="con-p">
              Watching foreign movies and shows is never easier. Simply choose
              your desired language and explore new cultures.
            </p>
          </div>

          <div className="item">
          <img src={servers} alt="servers"/>
            <div className="title">Multiple server options</div>
            <p className="con-p">
              For your smoothest watching experience, we provide not only a
              Torrent server but also other choices well-selected from other
              sites/services.
            </p>
          </div>

          <div className="item">
          <img src={download} alt="download"/>
            <div className="title">
              Download your favorites to watch offline
            </div>
            <p className="con-p">
              Save your movies and shows to watch anytime, anywhere, with or
              without the Internet.
            </p>
          </div>

          <div className="item">
          <img src={wishlist} alt="wishlist"/>
            <div className="title">Custom favorite list</div>
            <p className="con-p">
              Keep track of movies and shows you love! You might want to rewatch
              or share it with people you care about later.
            </p>
          </div>

          <div className="item">
          <img src={video} alt="video"/>
            <div className="title">Latest daily updates</div>
            <p className="con-p">
              Come to Cinema World whenever a new movie or episode is released.
              We are among the fastest to help you quench your thirst.
            </p>
          </div>
        </div>
      </div>

      {/* <div id="footer">
                <div class="HH">
                    <div class="footer-logo">
                        <div class="block desc mt-3 mb-4" style={{color:"white"}}><span className="highlight">Cinema World</span> - Watch free movies & TV shows online in HD on any device</div>
                        <div id="copyright" class="text-center" style={{color:"white"}}>Copyright &copy;
                            <script>document.write(new Date().getFullYear())</script> All rights reserved to Cinema World</div>
                    </div>
                </div>
            </div> */}
    </>
  );
}

export default Home;