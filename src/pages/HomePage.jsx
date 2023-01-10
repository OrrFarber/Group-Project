import './Home.css'

export default function HomePage() {
  return (
    <div className="HomePage">
      <div className="top">
        <button>Login</button>
        <button>Sign up</button>
      </div>
      <div>
        <a href='https://www.youtube.com/watch?v=Osd4DLpMNp4'></a>
      </div>
      <div className="bottom">
        <h4>Get help</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Join us</h4>
      </div>
    </div>
  );
}
