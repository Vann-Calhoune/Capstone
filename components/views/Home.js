import html from "html-literal";

export default state => html`
  <div class="blog">
    <main>
      <div class="articles">
        <article id="post1" class="posts">
          <img
            class="postImage"
            src="https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg5ODc0NDQzOTU3MzE0Nzg2/victor-wembanyama-2023-nba-draft-prospect.jpg"
          />
          <h1>Is Wembanyama Worth It?</h1>
          <time datetime="09-24-2022">September 24, 2022</time>
          <br />
          <p>
            Standing at 7'5 with the ability to play both ends of the floor at a
            high level...
          </p>
        </article>
        <article class="posts">
          <img
            class="postImage poole"
            src="https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg4ODc5MDc5MzgwODg3MDcy/usatsi_17994090_168388303_lowres.jpg"
          />
          <h1>Heading</h1>
          <time></time>
          <br />
          <p>ncviwulnu niebqfpbco boqc c salc n</p>
        </article>
        <article class="posts">
          <img
            class="postImage"
            src="https://lakersdaily.com/wp-content/uploads/2021/09/kaj-lbj-e1577704039763.jpeg"
          />
          <h1>Heading</h1>
          <time></time>
          <br />
          <p>ncviwulnu niebqfpbco boqc c salc n</p>
        </article>
        <article class="posts">
          <img
            class="postImage"
            src="https://www.nbcsports.com/sites/rsnunited/files/styles/metatags_opengraph/public/article/hero/Klay-Thompson-Steph-Curry-Draymond-Green-USA-10866471.jpg"
          />
          <h1>Heading</h1>
          <time></time>
          <br />
          <p>ncviwulnu niebqfpbco boqc c salc n</p>
        </article>
        <article class="posts">
          <img
            class="postImage"
            src="https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgyNTc5MDMzNDQ2Mjk1MjA4/311bc9e5-9a84-4619-b85b-df51b6c3ff4c.jpg"
          />
          <h1>Heading</h1>
          <time></time>
          <br />
          <p>ncviwulnu niebqfpbco boqc c salc n</p>
        </article>
        <article class="posts">
          <img
            class="postImage"
            src="https://www.outkick.com/wp-content/uploads/photomix-image-30.png"
          />
          <h1>Heading</h1>
          <time></time>
          <br />
          <p>ncviwulnu niebqfpbco boqc c salc n</p>
        </article>
      </div>
    </main>
    <aside class="trending">
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
