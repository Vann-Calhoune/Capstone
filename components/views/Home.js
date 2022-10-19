import html from "html-literal";
import celtic from "../../assets/Images/celtic.jpeg";
import galuka from "../../assets/Images/galuka.jpeg";
import jh13 from "../../assets/Images/jh13.webp";
import kdbk from "../../assets/Images/kdbk.webp";
import lbjkaj from "../../assets/Images/lbjkaj.jpeg";
import paolo from "../../assets/Images/paolo.jpeg";
import poole from "../../assets/Images/poole.jpeg";
import snub from "../../assets/Images/snub.png";
import vic from "../../assets/Images/vicwemby.jpeg";
import wbig3 from "../../assets/Images/Wbig3.jpeg";
import westbrook from "../../assets/Images/westbrook.webp";
import gobert from "../../assets/Images/gobert.jpeg";
import chet from "../../assets/Images/chet.jpeg";
import jamo from "../../assets/Images/jaMorant.webp";
import draft from "../../assets/Images/draft.webp";
import kings from "../../assets/Images/kings.jpg";
import pistons from "../../assets/Images/pistons.jpeg";

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
          <p>Is Jordan Poole the future of the...</p>
        </article>
        <article class="posts">
          <img class="postImage" src="${lbjkaj}" />
          <h2>New #1</h2>
          <time datetime="09-24-2022">September 24, 2022</time>
          <br />
          <p>Lebron James is on pace to...</p>
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
          <p>With Lebron entering his 20th year...</p>
        </article>
        <article class="posts">
          <img class="postImage" src="${gobert}" />
          <h2>Incompatible</h2>
          <time datetime="09-24-2022">September 24, 2022</time>
          <br />
          <p>With only 75 spots available, it's...</p>
        </article>
        <article class="posts">
          <img class="postImage" src="${snub}" />
          <h2>Snub of the Century</h2>
          <time datetime="09-24-2022">September 24, 2022</time>
          <br />
          <p>With only 75 spots available, it's easy to see...</p>
        </article>
        <article class="posts">
          <img class="postImage" src="${chet}" />
          <h2>Over Before it Started</h2>
          <time datetime="09-24-2022">September 24, 2022</time>
          <br />
          <p>With only 75 spots available, it's easy to see...</p>
        </article>
        <article class="posts">
          <img class="postImage" src="${jamo}" />
          <h2>Ready for Takeoff</h2>
          <time datetime="09-24-2022">September 24, 2022</time>
          <br />
          <p>With only 75 spots available, it's easy to see...</p>
        </article>
        <article id="post1" class="posts">
          <img class="postImage" src="${draft}" />
          <h2>2022 Draft Grades</h2>
          <time datetime="09-24-2022">September 24, 2022</time>
          <br />
          <p>
            Standing at 7'5 with the ability to play both ends of the floor at a
            high level...
          </p>
        </article>
        <article id="post1" class="posts">
          <img class="postImage" src="${kings}" />
          <h2>16 Year Drought</h2>
          <time datetime="09-24-2022">September 24, 2022</time>
          <br />
          <p>
            Standing at 7'5 with the ability to play both ends of the floor at a
            high level...
          </p>
        </article>
        <article class="posts">
          <img class="postImage poole" src="${pistons}" />
          <h2>Pistons Geared for Success</h2>
          <time datetime="09-24-2022">September 24, 2022</time>
          <br />
          <p>Is Jordan Poole the future of...</p>
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
