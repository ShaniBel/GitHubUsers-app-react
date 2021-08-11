import "./Card.css";

export default function Card(props) {
  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="https://wallpapercave.com/wp/wp3082334.jpg" alt="Placeholder" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src={props.src} alt="Placeholder" id="user_pic" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{props.Username}</p>
            <p class="subtitle is-6">@{props.Username}</p>
          </div>
        </div>

        <div class="content">
          Hello! my name is {props.Username}. I am a programmer :) <a>@bulmaio</a>.<a href="#">#css</a>{" "}
          <a href="#">#responsive</a>
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  );
}
