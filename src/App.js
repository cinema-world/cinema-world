import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className='hero'>

        <div class="top-sl-content">
          <div class="ts-heading"><h1><span class="highlight">Cinema World</span> - Free App for movies & TV shows online in HD on any device</h1></div>
          <div class="ts-body">Are you looking for an app to watch movies with friends and family? Cinema World is the best app for free movies and TV shows. All for free and all legally.</div>
          <div class="ts-button mb-3">
          </div>
        </div>

        <div class="heading">What is <strong class="highlight">Cinema World</strong>?</div>
        <div class="text">
          <p class="ts-p"><strong class="highlight">Cinema World is a free app for movies and TV shows</strong>, where you can
            watch for free, unlimited. None of
            your information is required as you do not need an account to watch thousands of movies and TV
            shows on our site.</p>

          <p class="ts-p">Cinema World provides a limitless source of entertainment, including content from major platforms
            such as Youtube, Twitch, and even Live TV Channels. Should you not find something to your taste,
            make a request, we are always eager to scour the Internet for your satisfaction.</p>
        </div>
      </div>


      <div class="container">
        <div class="heading"><span>Why should you choose Cinema World app for free movies and TV shows?</span></div>
        <div class="features-list">

          <div class="item">
            <div class="title">Free without registration</div>
            <p class="con-p">On Stream is totally free, you can even stream without an account. There are no hidden fees.</p>
          </div>

          <div class="item">
            <div class="title">Multi-subtitles</div>
            <p class="con-p">Watching foreign movies and shows is never easier. Simply choose your desired language and explore new cultures.</p>
          </div>

          <div class="item">
            <div class="title">Multiple server options</div>
            <p class="con-p">For your smoothest watching experience, we provide not only a Torrent server but also other choices well-selected from other sites/services.</p>
          </div>

          <div class="item">
            <div class="title">Download your favorites to watch offline</div>
            <p class="con-p">Save your movies and shows to watch anytime, anywhere, with or without the Internet.</p>
          </div>

          <div class="item">
            <div class="title">Custom favorite list</div>
            <p class="con-p">Keep track of movies and shows you love! You might want to rewatch or share it with people you care about later.</p>
          </div>

          <div class="item">
            <div class="title">Latest daily updates</div>
            <p class="con-p">Come to Cinema World whenever a new movie or episode is released. We are among the fastest to help you quench your thirst.</p>
          </div>

        </div>
      </div>


      <div id="footer">
      <div class="container">
        <div class="footer-logo">
        <div class="block desc mt-3 mb-4">Cinema World - Watch free movies & TV shows online in HD on any device</div>
        <div id="copyright" class="text-center">Copyright &copy;
        <script>document.write(new Date().getFullYear())</script> All rights reserved to Cinema World</div>
      </div>
      </div>
      </div>
    </>


  );
}

export default App;
