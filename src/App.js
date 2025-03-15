import { useState } from "react";
import { MediaQuery } from "./CSS/MediaQuery";
import { Positions } from "./CSS/Positions/Positions";
import { MyCounterComponent } from "./CustomHook/MyCounterComponent";
import { Registration } from "./HtmlForm/Registration";
import "./styles.css";
import FileManager from "./TopQuestions/FileManager";
import UseCallback from "./UseCallback/UseCallback";
import { Parent } from "./UseContext/Parent";
import MyForm from "./UseForm/MyForm";
import UseLayoutEff from "./UseLayoutEffect/UseLayoutEff";
import { Memoize } from "./UseMemo/Memoize";
import { CounterReducer } from "./UseReducer/CounterReducer";
import { UseRef } from "./UseRef/UseRef";
import { StatePropsParent } from "./UseStateProps/StatePropsParent";

export default function App() {
  const [topic, setTopic] = useState("reducer");

  return (
    <>
      {topic == "reducer" && <CounterReducer />}
      {topic == "ref" && <UseRef />}
      {topic == "context" && <Parent />}
      {topic == "memo" && <Memoize />}
      {topic == "form" && <MyForm />}
      {topic == "callback" && <UseCallback />}
      {topic == "layout" && <UseLayoutEff />}
      {topic == "customHook" && <MyCounterComponent />}
      {/* {topic == "imperative" && <CounterReducer />} */}
      {/* {topic == "debug" && <CounterReducer />}  */}
      {topic == "htmlform" && <Registration />}
      {topic == "css-mediaq" && <MediaQuery />}
      {topic == "state-props" && <StatePropsParent />}
      {topic == "css-position" && <Positions />}
      {topic == "file-manager" && <FileManager />}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          setTopic("reducer");
        }}
      >
        useReducer
      </button>
      <button
        onClick={() => {
          setTopic("ref");
        }}
      >
        useRef
      </button>
      <button
        onClick={() => {
          setTopic("context");
        }}
      >
        useContext
      </button>
      <button
        onClick={() => {
          setTopic("memo");
        }}
      >
        useMemo
      </button>
      <button
        onClick={() => {
          setTopic("form");
        }}
      >
        useForm
      </button>
      <button
        onClick={() => {
          setTopic("callback");
        }}
      >
        useCallback
      </button>
      <button
        onClick={() => {
          setTopic("layout");
        }}
      >
        useLayout
      </button>

      <button
        onClick={() => {
          setTopic("imperative");
        }}
      >
        useImperativeHandle
      </button>
      <button
        onClick={() => {
          setTopic("debug");
        }}
      >
        useDebugValue
      </button>
      <button
        onClick={() => {
          setTopic("state-props");
        }}
      >
        State Props
      </button>

      <button
        onClick={() => {
          setTopic("customHook");
        }}
      >
        custom Hook
      </button>

      <div style={{ marginTop: "2rem" }}>
        <button
          onClick={() => {
            setTopic("htmlform");
          }}
        >
          HTML Form
        </button>
        <button
          onClick={() => {
            setTopic("css-mediaq");
          }}
        >
          CSS Media Query
        </button>
        <button
          onClick={() => {
            setTopic("css-position");
          }}
        >
          CSS Position
        </button>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <h2>Product Based Company Qs</h2>
        <button
          onClick={() => {
            setTopic("file-manager");
          }}
        >
          File Manager
        </button>
        <br />
        <br />
      </div>
      <div>
        <hr />
        <h1> try this routes(router implementation in index.js file)</h1>
        <ul>/login</ul>
        <ul>/signup</ul>
        <ul>/admin/category</ul>
        <ul>/admin/category/add-category</ul>
        <ul>/admin/category/add-sub-category</ul>
        <ul>/admin/products</ul>
      </div>
    </>
  );
}
