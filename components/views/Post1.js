import html from "html-literal";
import vic from "../../assets/Images/vicwemby.jpeg";

export default state => html`
  <div id="completePage">
    <h1>Is Wembanyama Worth It?</h1>
    <img id="vicPic" src="${vic}" />
    <br />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
      deserunt nam accusamus, nisi totam assumenda! Repudiandae sunt ullam quasi
      velit, similique minima id cumque nemo quidem error earum repellendus ab,
      magnam dignissimos sit? Impedit soluta, dolor in eum iusto beatae
      inventore maiores modi doloribus porro. Natus accusamus ex ab ipsam
      laudantium. Numquam, culpa minus. In vero fugit nulla possimus? Fuga
      vitae, ipsam rerum debitis odit earum illum a? Veritatis ipsam ex nulla
      cumque laboriosam, officia, voluptatem autem officiis, nam soluta esse
      temporibus consectetur sit beatae ipsa repellendus cum. Provident porro
      corporis, ex quas iusto quibusdam repudiandae aliquid esse excepturi
      maxime.
    </p>
    <br />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quod quo
      nihil qui vitae, nesciunt sunt voluptate blanditiis, molestias maiores
      atque! Exercitationem corrupti accusamus sit facere numquam similique aut,
      aliquid, odio commodi rem id rerum asperiores consectetur repudiandae
      porro sint delectus quisquam non vero provident placeat nulla unde
      molestiae enim! Adipisci nisi veniam, doloribus dolore, quidem temporibus
      vitae saepe, unde sapiente rerum quam. Rerum quas placeat at
      necessitatibus quaerat cumque sit suscipit, numquam maiores alias natus
      distinctio ad recusandae nesciunt. Possimus fugit architecto consequatur,
      hic labore cum delectus quam rerum. Delectus hic soluta ratione
      consectetur illo harum cupiditate. Odit natus minima, ut illum nihil
      veritatis voluptatum. Culpa veniam magni ab quidem aliquam natus laborum
      vel fugit quasi quaerat blanditiis aperiam eaque a officia cum nemo,
      provident dolore architecto atque! Voluptas velit nulla natus ut. Eum,
      facere facilis ipsum laborum, nobis sed, consequatur assumenda hic eius
      nam aspernatur odio iure. Excepturi blanditiis quidem, vel quaerat soluta
      doloribus ipsum deserunt, maxime sapiente ducimus iure ea in aliquid!
      Dolores alias exercitationem laborum voluptates tempore vero amet quae
      quisquam magnam, fuga iste sunt fugiat in repellendus a voluptate odit
      officiis blanditiis doloremque excepturi! Voluptatibus quam enim vitae,
      eum ullam commodi explicabo assumenda fugiat rerum!
    </p>

    <br />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, obcaecati!
      Neque repudiandae reprehenderit veniam earum minus deleniti est doloremque
      aspernatur, quibusdam labore iusto rerum animi amet, nam corporis
      voluptas. Magni blanditiis omnis dolores consequuntur laudantium adipisci,
      at provident modi dicta quam itaque libero ipsa reprehenderit nemo nisi
      alias! Ad dolor vitae blanditiis beatae sequi molestias accusamus modi
      possimus pariatur nulla voluptates amet nisi sapiente in aliquid quaerat
      rem quis unde ab delectus, ullam facilis autem. Atque, molestias quae. Ab
      impedit eum veritatis ipsum hic sint mollitia tempore rerum excepturi
      aliquam deleniti natus consequuntur eius aspernatur dolorem facilis
      officia, quasi asperiores.Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Ipsa corporis ducimus facere architecto? Pariatur saepe
      tenetur, magni tempora soluta voluptate tempore quas quam magnam odio quod
      delectus enim suscipit a optio quidem quibusdam doloremque iure. Adipisci
      facere obcaecati molestiae aliquam assumenda ipsam qui ratione rem sunt
      provident, vero illo dolor cum veritatis maiores est nobis magnam atque
      sint fugit ab suscipit nam? Obcaecati aut quis optio, facilis vel officia
      explicabo dolorem dolorum soluta a officiis suscipit quam odio itaque
      repellat porro praesentium nihil doloremque tempore eveniet nulla quod
      dicta vitae doloribus! Voluptas omnis dignissimos magni dolorem
      distinctio, pariatur aliquid consequuntur.
    </p>
    <br />
    <form id="commentForm" method="POST" action="">
      <p>Leave a Comment!</p>
      <input id="name" type="text" required placeholder="Enter your name" />
      <textarea id="comment"></textarea>
      <input id="commentSubmit" type="submit" />
    </form>
    <br />
    <!-- </div> -->
    <ul id="commentArea">
      ${state.comments.map(comment => {
        return `<li><h3>${comment.name}</h3>
       ${comment.comment}</li>`;
      })}
    </ul>
  </div>
`;
