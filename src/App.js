import { useState } from "react";
import { Helmet } from "react-helmet";

function App() {
  const [isShow, setIsShow] = useState(false)
  setTimeout(() => {
    setIsShow(true)
  }, 15000);
  return (
    <div align='center' className="App">
      app is runing
      {isShow && <div>omaad</div>}
      {isShow && <Helmet>
        <title>App Title</title>
        <meta property="og:title" content="The Rock" />
        <meta property="og:type" content="video.movie" />
        <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
        <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
    <meta property="revised" content={new Date()} />
        <meta property="og:description"
          content="Sean Connery found fame and fortune as the
           suave, sophisticated British agent, James Bond." />
    <meta property=""
      </Helmet>}
    </div>
  );
}

export default App;
