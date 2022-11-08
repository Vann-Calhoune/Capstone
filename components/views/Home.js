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
        <a class="showPost" href="/Post1"
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
        <a class="showPost" href="/Post2"
          ><article class="posts">
            <img class="postImage" src="${lbjkaj}" />
            <div class="postContent">
              <h2>New #1</h2>
              <br />
              <p>
                Lebron James is on pace to surpass Kareem Abdul-Jabbar as the
                NB...
              </p>
            </div>
          </article></a
        >
        <a class="showPost" href="/Post3"
          ><article id="post1" class="posts">
            <img class="postImage" src="${draft}" />
            <div class="postContent">
              <h2>2022 Draft Grades</h2>
              <br />
              <p>
                This draft class was a mixed bag. There were a few studs at the
                top, solid players in the middle...
              </p>
            </div>
          </article></a
        >
        <a class="showPost" href="/Post4"
          ><article class="posts">
            <img class="postImage" src="${snub}" />
            <div class="postContent">
              <h2>Snub of the Century</h2>
              <br />
              <p>
                With only 75 spots available, it's easy to see why some of the
                best NBA...
              </p>
            </div>
          </article></a
        >
        <a class="showPost" href="/Post5"
          ><article class="posts">
            <img class="postImage" src="${chet}" />
            <div class="postContent">
              <h2>Over Before it Started</h2>
              <br />
              <p>After being selected #2 overall in this past years draft...</p>
            </div>
          </article></a
        >
        <a class="showPost" href="/Post6"
          ><article class="posts">
            <img class="postImage" src="${wbig3}" />
            <div class="postContent">
              <h2>Eyes on 5</h2>
              <br />
              <p>
                The Warriors begin their hunt for their fifth ring in 8 years.
                With their core...
              </p>
            </div>
          </article></a
        >
        <a class="showPost" href="/Post7"
          ><article class="posts">
            <img class="postImage" src="${gobert}" />
            <div class="postContent">
              <h2>Incompatible</h2>
              <br />
              <p>The jazz thought they had two franc...</p>
            </div>
          </article></a
        >
        <a class="showPost" href="/Post8"
          ><article id="post1" class="posts">
            <img class="postImage" src="${kings}" />
            <div class="postContent">
              <h2>16 Year Drought</h2>
              <br />
              <p>
                The Sacramento Kings have not sniffed a post-season game in...
              </p>
            </div>
          </article></a
        >
        <a class="showPost" href="/Post9"
          ><article class="posts">
            <img class="postImage" src="${jamo}" />
            <div class="postContent">
              <h2>Ready for Takeoff</h2>
              <br />
              <p>
                After coming off a deep playoff run, the Memphis Grizzlies...
              </p>
            </div>
          </article></a
        >
        <a class="showPost" href="/Post10">
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
          </article></a
        >
        <a class="showPost" href="/Post11"
          ><article class="posts">
            <img class="postImage poole" src="${poole}" />
            <div class="postContent">
              <h2>Poole Party Over?</h2>
              <br />
              <p>Is Jordan Poole the future of the...</p>
            </div>
          </article></a
        >
        <a class="showPost" href="/Post12"
          ><article class="posts">
            <img class="postImage" src="${galuka}" />
            <div class="postContent">
              <h2>New Sheriff in Town</h2>
              <br />
              <p>With Lebron entering his 20th year...</p>
            </div>
          </article></a
        >
      </div>
    </main>
    <aside class="trending">
      <h2 class="breaking">Trending News</h2>
      <a class="showPost" href="/News1"
        ><div>
          <h4>Number 1 pick</h4>
          <img class="newsPic" src="${paolo}" /></div
      ></a>
      <a class="showPost" href="/News2"
        ><div>
          <h4>Durant Staying Put</h4>
          <img class="newsPic" src="${kdbk}" /></div
      ></a>
      <a class="showPost" href="/News3"
        ><div>
          <h4>Westbrook stays... for now</h4>
          <img class="newsPic" src="${westbrook}" /></div
      ></a>
      <a class="showPost" href="/News4"
        ><div>
          <h4>Harden loses 100 pounds</h4>
          <img class="newsPic" src="${jh13}" /></div
      ></a>
      <a class="showPost" href="/News5"
        ><div>
          <h4>New look Celtics</h4>
          <img class="newsPic" src="${celtic}" /></div
      ></a>
    </aside>
  </div>
`;
