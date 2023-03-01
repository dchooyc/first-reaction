import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent/MyComponent';
import Table from './MyComponent/Table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Hello world!!!!</div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <MyComponent name="Alice" age={25} />
          <MyComponent name="Bob" age={2123} />
          <MyComponent name="Charlie" age={1111} />
          <Table data={[
            {name: "Able", age: 11},
            {name: "Belinda", age: 92},
            {name: "Chimpanzee", age: 15}
          ]}/>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
