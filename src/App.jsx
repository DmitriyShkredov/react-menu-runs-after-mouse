import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [itemId, setItemId] = useState(0);

  useEffect(() => {
    const runner = document.querySelector(".runner");
    const items = [...document.querySelectorAll(".menu-button")];
    const header = document.querySelector(".header");

    const runnerMove = (item) => {
      runner.style.left = item.offsetLeft + "px";
      runner.style.width = item.scrollWidth + "px";
    };

    const mouseMove = ({ target }) => {
      if (target.classList.contains("menu-button")) runnerMove(target);
      else runnerMove(items[itemId]);
    };

    runnerMove(items[itemId]);
    header.addEventListener("mousemove", mouseMove);
    return () => header.removeEventListener("mousemove", mouseMove);
  }, [itemId]);
  return (
    <>
      <header className="header">
        <nav className="menu">
          <span className="runner"></span>
          <ul className="menu-list">
            <li className="menu-item">
              <button className="menu-button" onClick={() => setItemId(0)}>
                Home
              </button>
            </li>
            <li className="menu-item">
              <button className="menu-button" onClick={() => setItemId(1)}>
                About
              </button>
            </li>
            <li className="menu-item">
              <button className="menu-button" onClick={() => setItemId(2)}>
                Products
              </button>
            </li>
            <li className="menu-item">
              <button className="menu-button" onClick={() => setItemId(3)}>
                FAQ
              </button>
            </li>
            <li className="menu-item">
              <button className="menu-button" onClick={() => setItemId(4)}>
                Address
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <h2>Some Article 1</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vero
          ratione voluptas quo provident aperiam fugit, mollitia illo adipisci
          voluptatum ut, cum deleniti iste reprehenderit. Voluptate, beatae
          harum possimus quibusdam accusamus, fuga iure odit aspernatur cum
          omnis blanditiis quia exercitationem, suscipit nisi quidem ea
          quisquam. Hic cumque nobis quae fuga placeat cupiditate, culpa vero
          quos possimus exercitationem rerum beatae similique delectus, ipsa
          eligendi sit sunt quaerat ducimus deserunt esse impedit maiores nisi
          voluptate! Culpa, tenetur nihil totam rerum voluptatem officia
          adipisci harum alias enim incidunt maxime quam nam esse vitae eos
          possimus optio! Suscipit perspiciatis rem quibusdam quis aut atque
          delectus omnis minima officia autem ullam distinctio quasi minus
          officiis, ipsum at! Quisquam nisi provident omnis amet repudiandae
          quis repellendus molestias facere, consectetur id porro earum dolorem
          accusamus! Veritatis error unde ut expedita excepturi voluptatibus
          accusamus nemo non, suscipit odit dolorum placeat voluptates deserunt!
          Molestias soluta dicta pariatur id dignissimos? Saepe assumenda labore
          maxime neque, eos temporibus ea repellendus? Sunt quae obcaecati
          aliquam error sed quia ea voluptatem! Iure, quam amet, sunt distinctio
          sequi voluptates recusandae laboriosam sapiente saepe nobis illo nisi
          est. Quis pariatur rerum repellendus earum odit sapiente accusantium
          reprehenderit perferendis commodi iste soluta sunt voluptatem
          voluptatum saepe facere impedit inventore, ratione consectetur culpa
          velit ut atque incidunt nisi. Quam repellat aliquid ipsum nesciunt,
          cum quos perferendis autem sequi numquam maxime necessitatibus nobis
          iste soluta eum suscipit tempore veritatis molestias ratione? Eaque
          consequatur reprehenderit rerum? Quasi commodi repudiandae ab minus et
          nulla amet corrupti odit porro voluptates excepturi impedit placeat
          libero doloribus reiciendis beatae in ipsa architecto eveniet dolorum
          similique magni, voluptate at! Placeat ut ipsam neque nesciunt amet
          est eligendi libero molestias harum aut adipisci vitae explicabo earum
          animi, voluptates a commodi, illo error fugiat deleniti alias eaque
          voluptate laborum quod! Doloremque reprehenderit laudantium iure? Eum
          eligendi labore et nulla mollitia at quo sed, nobis fugit optio
          asperiores velit molestiae reprehenderit assumenda numquam temporibus
          magni reiciendis aspernatur ipsa est vel blanditiis inventore earum
          enim? Atque, iste rerum sit corporis exercitationem, et ad dolor
          officia ab commodi ducimus accusantium nostrum odit debitis. Ratione
          voluptatum architecto quasi at doloremque alias blanditiis voluptate,
          beatae nostrum dignissimos omnis necessitatibus, voluptas fugit sit
          eos. Provident incidunt nam, accusamus illum doloribus est et optio
          laborum in nostrum earum odit repellat illo eum cupiditate, ratione
          porro eveniet temporibus fugiat repellendus non hic corrupti debitis
          eius! Aperiam ullam minima sunt quibusdam atque possimus numquam
          facilis laudantium repudiandae est, voluptatem ut expedita, similique
          provident dolorem. In, at voluptatum. Ipsum debitis eum corporis? At
          quos minus illum quas eum commodi eligendi architecto id labore
          deleniti maxime modi repellendus nesciunt laboriosam consequatur
          eaque, nobis ea! Quasi, temporibus, quidem tempora saepe officia omnis
          corrupti maiores laborum cupiditate, suscipit tenetur molestias dolore
          fuga iste odio explicabo animi nihil dignissimos aliquam reprehenderit
          architecto repudiandae nisi dolorem! Obcaecati eaque deleniti dolores
          delectus illum, quisquam qui exercitationem labore perferendis eius
          sequi id suscipit possimus quas neque beatae, sapiente necessitatibus
          ullam dolorem error. Quae eius dolorem, dolore hic deserunt atque
          doloremque repellat asperiores iste rerum exercitationem. Beatae
          dolorum consectetur nam aperiam eaque ipsam. Placeat facilis officia
          adipisci numquam qui, hic aperiam necessitatibus non provident amet
          accusantium ex, consequatur vel exercitationem totam impedit eveniet
          mollitia assumenda facere suscipit temporibus ea eum veritatis beatae.
          Distinctio, tempore? Modi odio blanditiis iure maxime est impedit
          quasi reprehenderit expedita. Exercitationem voluptatum nam neque
          recusandae totam quod, cumque ullam incidunt quos eos corporis
          architecto saepe beatae officiis, similique reiciendis dolorum, qui
          magnam. Saepe in eos ipsa numquam aliquid cum quia neque deserunt
          fugiat ea a, deleniti quo, perspiciatis accusantium, aspernatur magni
          nostrum dignissimos eum rerum eveniet vel. Consequuntur molestiae
          deleniti laboriosam minima placeat distinctio suscipit explicabo rerum
          tempora sequi eius, eos delectus corporis facilis dolores! Ipsum eos
          tenetur animi, minus cupiditate ab dolorem repellendus et, aliquid
          praesentium provident suscipit saepe reprehenderit, incidunt error
          sed. Eum enim natus mollitia illo sequi voluptates ullam nihil saepe
          quod quidem dolorum est, deserunt ad fuga iure? Quam voluptatum
          ducimus officiis quae unde commodi rerum dignissimos fuga, aliquam
          voluptates id molestias eius dolore modi, dicta nesciunt facilis quia
          in? Aliquam fugit explicabo vel ullam expedita aperiam saepe qui nemo
          earum quos eos rerum laudantium veniam, ad unde quia nihil corporis,
          iste voluptatibus distinctio natus quis nam. Iure incidunt similique
          cumque. Sequi tempora debitis sunt blanditiis, dolor, id odit suscipit
          repudiandae porro cupiditate neque dignissimos architecto corrupti
          labore asperiores error minima rem? Temporibus, quis. Error quam
          accusantium asperiores corrupti dolorem dolores corporis eaque dicta
          laboriosam tenetur sint culpa ad cupiditate, alias aperiam iusto, quas
          facere est inventore cumque deleniti ducimus temporibus. Provident,
          quis incidunt. Maxime beatae nisi quisquam aperiam quo tempore ullam
          dolorum, doloremque dolores eius et modi, nobis id ad. Eaque
          doloremque in molestias? Mollitia facilis, non dolores, eligendi,
          officiis ea nulla repudiandae deserunt velit quis recusandae cumque
          illo ullam molestiae! Labore tenetur numquam vero!
        </p>
      </section>
    </>
  );
}

export default App;
