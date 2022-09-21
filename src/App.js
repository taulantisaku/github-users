//styles
import "./App.css";
import Users from "./Users";
import ErrorBoundary from "./ErrorBoundary";

export default function App() {
  return (
    <div className="App">
      <header>
        <ul>
          <li>home</li>
          <li>about</li>
        </ul>
      </header>
      <div style={{ display: "flex" }}>
        <aside style={{ background: "black" }}>sidebar</aside>
        <main>
          <ErrorBoundary>
            <Users />
          </ErrorBoundary>
        </main>
      </div>
    </div>
  );
}
