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
          <p>ncviwulnu niebqfpbco boqc c salc n</p>
        </article>
        <article class="posts">
          <h1>Heading</h1>
          <p>ncviwulnu niebqfpbco boqc c salc n</p>
        </article>
        <article class="posts">
          <h1>Heading</h1>
          <p>ncviwulnu niebqfpbco boqc c salc n</p>
        </article>
        <article class="posts">
          <h1>Heading</h1>
          <p>ncviwulnu niebqfpbco boqc c salc n</p>
        </article>
      </div>
    </main>
    <aside class="trending">
      <div><h4>story 1</h4></div>
      <div><h4>story 2</h4></div>
      <div><h4>story 3</h4></div>
      <div><h4>story 4</h4></div>
      <div><h4>story 5</h4></div>
    </aside>
  </div>
`;
