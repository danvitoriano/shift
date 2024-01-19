// react prop-types
import PropTypes from "prop-types";
export function MyComponent({ value }) {
  return <div className="italic font-light text-lg text-gray-500">{value}</div>;
}

MyComponent.propTypes = {
  value: PropTypes.string.isRequired,
};


// reutilizando componentes
import MyComponent from "./MyComponent";
function App() {
  return (
    <div className="grid gap-2 p-6">
      <MyComponent value="Hello world!" />
      <MyComponent value="Olá mundo!" />
    </div>
  );
}
export default App;
