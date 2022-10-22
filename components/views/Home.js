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
            <div class="postContent">
              <h2>Is Wembanyama Worth It?</h2>
              <br />
              <p>
                Standing at 7'5 with the ability to play both ends of the floor
                at a high level...
              </p>
            </div>
          </article></a
        >
        <article class="posts">
          <img class="postImage poole" src="${poole}" />
          <div class="postContent">
            <h2>Poole Party Over?</h2>
            <br />

            <p>Is Jordan Poole the future of the...</p>
          </div>
        </article>
        <article class="posts">
          <img class="postImage" src="${galuka}" />
          <div class="postContent">
            <h2>New Sheriff in Town</h2>
            <br />
            <p>With Lebron entering his 20th year...</p>
          </div>
        </article>
        <article class="posts">
          <img class="postImage" src="${lbjkaj}" />
          <div class="postContent">
            <h2>New #1</h2>
            <br />
            <p>Lebron James is on pace to surp...</p>
          </div>
        </article>
        <article class="posts">
          <img class="postImage" src="${wbig3}" />
          <div class="postContent">
            <h2>Eyes on 5</h2>
            <br />
            <p>The Warriors begin their hunt for...</p>
          </div>
        </article>

        <article class="posts">
          <img class="postImage" src="${gobert}" />
          <div class="postContent">
            <h2>Incompatible</h2>
            <br />
            <p>The jazz thought they had two franc...</p>
          </div>
        </article>
        <article class="posts">
          <img class="postImage" src="${snub}" />
          <div class="postContent">
            <h2>Snub of the Century</h2>
            <br />
            <p>With only 75 spots available, it's easy to see...</p>
          </div>
        </article>
        <article class="posts">
          <img class="postImage" src="${chet}" />
          <div class="postContent">
            <h2>Over Before it Started</h2>
            <br />
            <p>After being selected #2 overall in this past years draft...</p>
          </div>
        </article>
        <article id="post1" class="posts">
          <img class="postImage" src="${draft}" />
          <div class="postContent">
            <h2>2022 Draft Grades</h2>
            <br />
            <p>
              This draft class was a mixed bag. There were a few studs at the...
            </p>
          </div>
        </article>
        <article class="posts">
          <img class="postImage" src="${jamo}" />
          <div class="postContent">
            <h2>Ready for Takeoff</h2>
            <br />
            <p>After coming off a deep playoff run, the Memphis Grizzlies...</p>
          </div>
        </article>
        <article id="post1" class="posts">
          <img class="postImage" src="${kings}" />
          <div class="postContent">
            <h2>16 Year Drought</h2>
            <br />
            <p>
              The Sacramento Kings have not sniffed a post-season game in...
            </p>
          </div>
        </article>
        <article class="posts">
          <img class="postImage poole" src="${pistons}" />
          <div class="postContent">
            <h2>Pistons Geared for Success</h2>
            <br />
            <p>
              The Detroit Pistons revamped their roster and have look to be
              much..
            </p>
          </div>
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
