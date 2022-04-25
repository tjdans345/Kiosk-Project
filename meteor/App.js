import Items from "./Items.js";

//App.js
function App() {
  const items = new Items();

  items.test();
  items.setState({ a: 3 });
  items.test();
}
export default App;
