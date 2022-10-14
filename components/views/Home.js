import html from "html-literal";
import celtic from "../../assets/images/celtic.jpeg";
import galuka from "../../assets/images/galuka.jpeg";
import jh13 from "../../assets/images/jh13.webp";
import kdbk from "../../assets/images/kdbk.webp";
import lbjkaj from "../../assets/images/lbjkaj.jpeg";
import paolo from "../../assets/images/paolo.jpeg";
import poole from "../../assets/images/poole.jpeg";
import snub from "../../assets/images/snub.png";
import vic from "../../assets/images/vicwemby.jpeg";
import wbig3 from "../../assets/images/Wbig3.jpeg";
import westbrook from "../../assets/images/westbrook.webp";

export default state => html`
  <div class="blog">
    <main>
      <h1 id="blogHead">My Takes</h1>
      <div class="articles">
        <a id="showPost" href="/Post1"
          ><article id="post1" class="posts">
            <img class="postImage" src="${vic}" />
            <h2>Is Wembanyama Worth It?</h2>
            <time datetime="09-24-2022">September 24, 2022</time>
            <br />
            <p>
              Standing at 7'5 with the ability to play both ends of the floor at
              a high level...
            </p>
          </article></a
        >
        <article class="posts">
          <img class="postImage poole" src="${poole}" />
          <h2>Poole Party Over?</h2>
          <time datetime="09-24-2022">September 24, 2022</time>
          <br />
          <p>Is Jordan Poole the future of...</p>
        </article>
        <article class="posts">
          <img class="postImage" src="${lbjkaj}" />
          <h2>New #1</h2>
          <time datetime="09-24-2022">September 24, 2022</time>
          <br />
          <p>Lebron James is on pace to surpass...</p>
        </article>
        <article class="posts">
          <img class="postImage" src="${wbig3}" />
          <h2>Eyes on 5</h2>
          <time datetime="09-24-2022">September 24, 2022</time>
          <br />
          <p>The Warriors begin their hunt for...</p>
        </article>
        <article class="posts">
          <img class="postImage" src="${galuka}" />
          <h2>New Sheriff in Town</h2>
          <time datetime="09-24-2022">September 24, 2022</time>
          <br />
          <p>With Lebron entering his 20th year, the face...</p>
        </article>
        <article class="posts">
          <img class="postImage" src="${snub}" />
          <h2>Snub of the Century</h2>
          <time datetime="09-24-2022">September 24, 2022</time>
          <br />
          <p>With only 75 spots available, it's easy to see...</p>
        </article>
      </div>
    </main>
    <aside class="trending">
      <h2 class="breaking">Trending News</h2>
      <div>
        <h4>Number 1 pick</h4>
        <img class="newsPic" src="${paolo}" />
      </div>
      <div>
        <h4>Durant Staying Put</h4>
        <img class="newsPic" src="${kdbk}" />
      </div>
      <div>
        <h4>Westbrook stays... for now</h4>
        <img class="newsPic" src="${westbrook}" />
      </div>
      <div>
        <h4>Harden loses 100 pounds</h4>
        <img class="newsPic" src="${jh13}" />
      </div>
      <div>
        <h4>New look Celtics</h4>
        <img class="newsPic" src="${celtic}" />
      </div>
    </aside>
  </div>
`;
