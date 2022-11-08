import html from "html-literal";
import galuka from "../../assets/Images/galuka.jpeg";

export default state => html`
  <div class="completePage">
    <div class="fullBlog">
      <h1 class="topPost">Is Wembanyama Worth It?</h1>
      <img class="postPic" src="${galuka}" />
      <br />
      <p>
        On a rainy fall afternoon in the Parisian suburb of Nanterre, François
        Salaün sat outside a cafe in a suit taking drags from a vape pen. He
        once taught at a high school around the corner, where, three years ago,
        he taught a student named Victor Wembanyama, who had to duck to get into
        classrooms and knew an unusual array of facts about the world. Salaün
        recalled asking the students in his French class to write a short story
        about the realization of a dream. Some shared their hopes of becoming
        famous basketball players, but not Wembanyama, though he was well on his
        way to that dream. In fact, Wembanyama didn’t really follow the prompt
        at all. Instead, he and a friend wrote a tale titled “Alice et Jules,”
        about a married couple whose lives were upended when Jules drove while
        drunk, crashed, fell into a coma and woke up having lost contact with
        Alice. In the end, they reunited. Wembanyama liked to do things his way,
        and Salaün didn’t mind so much. He remembered Wembanyama as smart,
        polite and gifted in French literature. He said he also had a calming
        influence on the class.
      </p>
      <br />
      <p>
        “I answered the question, like, out loud, while being on my phone,
        because I knew the answer,” Wembanyama said. “And I remember he was
        like, ‘Thank you, Victor, but what are you doing?’” Wembanyama started
        laughing as he finished telling the story. He had been a typical
        teenager on that day, at least for a moment. But at 7-foot-3, he has
        never really been typical, and perhaps he never will be. In eight
        months, he will almost certainly be the top pick in the N.B.A. draft as
        the most hyped teenager since LeBron James, who called him an “alien.”
        His play and potential have drawn comparisons to Kareem Abdul-Jabbar,
        Hakeem Olajuwon, Kevin Durant and Giannis Antetokounmpo. When Wembanyama
        plays basketball, he does sometimes look otherworldly.
      </p>

      <br />
      <p>
        His height and his wingspan of about eight feet often make it seem as
        though he’s in two places at once. He’s as smooth as a smaller player,
        but he barely has to leave the ground to block shots or grab rebounds.
        This month, dozens of scouts and N.B.A. team executives gathered in Las
        Vegas to watch his French professional team, Metropolitans 92, play two
        games against G League Ignite, the N.B.A.’s developmental team for top
        prospects. Wembanyama’s team lost the first game, but he scored 37
        points, including seven 3-pointers, and blocked five shots. Two days
        later, Metropolitans 92 won the rematch; Wembanyama had 36 points, 11
        rebounds, 4 assists and 4 blocks. “I’ve always felt like I was on a
        different level,” Wembanyama said. “I was living a different life than
        everyone else in school, for example, even in elementary school. I was
        just thinking differently than everyone. I’ve always tried to be
        original in everything I do, and it’s really something that stays in my
        soul: Be original. Be one of a kind. It’s like, I can’t explain it. I
        think I was born with it.” The people who knew Wembanyama growing up
        sometimes affectionately joked that he was on his own planet. He was
        playing for a youth basketball team in his hometown, Le Chesnay, west of
        Paris, when Michaël Allard, a coach from a club in Nanterre, saw him in
        what the coach called “a beautiful coincidence.” Allard thought the
        10-year-old Wembanyama was an assistant coach because of his height,
        though he soon took notice of more than that. “He’s competitive, he’s
        joyful and he wants to play all the time,” Allard said in French. The
        Nanterre club has both youth and professional teams. When Wembanyama was
        13, he won his first French championship. He’d always loved basketball,
        but that championship made him fall in love with winning. “I cried that
        day,” Wembanyama said. “That was my first big title, so I was so happy.”
        In middle school, Wembanyama began teaching himself English, knowing
        that to play in the N.B.A. he would need proficiency beyond the little
        he’d learned in school. He watched videos from American accounts on
        Instagram, along with English-language television shows. As he entered
        his teenage years, scouts and the news media began flocking to see him.
        “It was when he was 14 that I said to myself, ‘This one, he has to go to
        the N.B.A.,’” said Frédéric Donnadieu, speaking in French. Donnadieu was
        Wembanyama’s first coach at Nanterre and is now the president of the
        club. Wembanyama’s parents, Felix Wembanyama and Elodie de Fautereau,
        tried to keep his life as normal as possible. They made sure he kept up
        with his schoolwork. If he got bad grades, the coaches made him sit at
        the wooden scorer’s table in the gym and do his homework instead of
        practicing with his friends. “That annoyed him more than anything else,”
        said Amine El Hajraoui, a coach at Nanterre.
      </p>
    </div>
    <br />
    <form id="commentForm" method="POST" action="">
      <p>Leave a Comment!</p>
      <input id="name" type="text" required placeholder="Enter your name" />
      <textarea id="comment"></textarea>
      <input id="commentSubmit" type="submit" />
    </form>
    <br />
    <ul class="commentArea">
      ${state.comments.map(comment => {
        return `<li><h3>${comment.name}</h3>
       ${comment.comment}</li>`;
      })}
    </ul>
  </div>
`;
