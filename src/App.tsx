import "./components/styles/FormStyles.css";
import MyForm from "./components/MyForm";
import MyMultiSelectForm from "./components/MyMultiSelectForm";

function App() {
  return (
    <div className="main-container">
      <div className="my-form">
        <MyForm />
      </div>
      <div className="my-multiselect">
        <MyMultiSelectForm />
      </div>
    </div>
  );
}

export default App;
