// react component com tailwind
export function MyComponent() {
    return (
      <div className="italic font-light text-lg text-gray-500">
        {" "}
        Hello world from React!
      </div>
    );
  }
  
  // compondo com componentes
  import MyComponent from "./MyComponent";
  function App() {
    return <MyComponent />;
  }
  
  export default App;