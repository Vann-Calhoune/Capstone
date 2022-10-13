import html from "html-literal";

export default state => html`
  <div class="blog">
    <main>
      <div class="articles">
        <a href="/Post1"
          ><article id="post1" class="posts">
            <img
              class="postImage"
              src="https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg5ODc0NDQzOTU3MzE0Nzg2/victor-wembanyama-2023-nba-draft-prospect.jpg"
            />
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
          <img
            class="postImage poole"
            src="https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg4ODc5MDc5MzgwODg3MDcy/usatsi_17994090_168388303_lowres.jpg"
          />
          <h2>Poole Party Over?</h2>
          <time datetime="09-24-2022">September 24, 2022</time>
          <br />
          <p>Is Jordan Poole the future of...</p>
        </article>
        <article class="posts">
          <img
            class="postImage"
            src="https://lakersdaily.com/wp-content/uploads/2021/09/kaj-lbj-e1577704039763.jpeg"
          />
          <h2>New #1</h2>
          <time datetime="09-24-2022">September 24, 2022</time>
          <br />
          <p>Lebron James is on pace to surpass...</p>
        </article>
        <article class="posts">
          <img
            class="postImage"
            src="https://www.nbcsports.com/sites/rsnunited/files/styles/metatags_opengraph/public/article/hero/Klay-Thompson-Steph-Curry-Draymond-Green-USA-10866471.jpg"
          />
          <h2>Eyes on 5</h2>
          <time datetime="09-24-2022">September 24, 2022</time>
          <br />
          <p>The Warriors begin their hunt for...</p>
        </article>
        <article class="posts">
          <img
            class="postImage"
            src="https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgyNTc5MDMzNDQ2Mjk1MjA4/311bc9e5-9a84-4619-b85b-df51b6c3ff4c.jpg"
          />
          <h2>New Sheriff in Town</h2>
          <time datetime="09-24-2022">September 24, 2022</time>
          <br />
          <p>With Lebron entering his 20th year, the face...</p>
        </article>
        <article class="posts">
          <img
            class="postImage"
            src="https://www.outkick.com/wp-content/uploads/photomix-image-30.png"
          />
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
        <img
          src="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-07/paolo-banchero-ftr.jpeg?itok=c1L7Fpvo"
        />
      </div>
      <div>
        <h4>Durant Staying Put</h4>
        <img
          src="https://static.foxnews.com/foxnews.com/content/uploads/2022/09/Kevin-Durant.jpg"
        />
      </div>
      <div>
        <h4>Westbrook stays... for now</h4>
        <img src="https://cdn.nba.com/manage/2022/09/westbrook-784x441.jpg" />
      </div>
      <div>
        <h4>Harden loses 100 pounds</h4>
        <img
          src="https://sportshub.cbsistatic.com/i/2021/01/16/65a2b1e4-908f-4df5-960b-01d04529373d/untitled-design-2021-01-16t183352-502.jpg"
        />
      </div>
      <div>
        <h4>New look Celtics</h4>
        <img
          src="https://nbaanalysis.net/wp-content/uploads/2022/07/Celtics-Pacers-Trade-Sends-Malcolm-Brogdon-To-Boston-678x381.jpeg"
        />
      </div>
    </aside>
  </div>
`;
