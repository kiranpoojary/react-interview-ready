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
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Practice from "./Practice/Practice";
import DebounceThrottle from "./SystemDesign/DebounceThrottle";
import Progressbar from "./TopQuestions/Progressbar";
import AutoComplete from "./TopQuestions/AutoComplete";
import OTPComponent from "./TopQuestions/OTPComponent";
import Pagination from "./TopQuestions/Pagination";
import OptionSelector from "./TopQuestions/OptionSelector";

const sections = [
  {
    id: "REACT_HOOKS",
    defaultTopic: "reducer",
    sectionName: "React Hooks",
    topics: [
      { topicId: "usereducer", topicName: "useReducer", desc: "" },
      { topicId: "useref", topicName: "useRef", desc: "" },
      { topicId: "usecontext", topicName: "useContext", desc: "" },
      { topicId: "usememo", topicName: "useMemo", desc: "" },
      { topicId: "useform", topicName: "useForm", desc: "" },
      { topicId: "usecallback", topicName: "useCallback", desc: "" },
      { topicId: "uselayout", topicName: "useLayoutEffect", desc: "" },
      { topicId: "state-props", topicName: "State & Props", desc: "" },
      { topicId: "customHook", topicName: "Custom Hook", desc: "" },
    ],
  },
  {
    id: "HTML_CSS",
    defaultTopic: "css-mediaq",
    sectionName: "HTML & CSS",
    topics: [
      { topicId: "css-mediaq", topicName: "CSS Media Query" },
      { topicId: "htmlform", topicName: "HTML Form" },
      { topicId: "css-position", topicName: "CSS Position" },
    ],
  },
  {
    id: "REACT_QS",
    defaultTopic: "file-manager",
    sectionName: "Most Asked react Implementaions",
    topics: [
      { topicId: "file-manager", topicName: "File Manager" },
      { topicId: "progressbar", topicName: "Progressbar" },
      { topicId: "autocomplete", topicName: "AutoComplete" },
      { topicId: "otp", topicName: "OTP Component" },
      { topicId: "pagination", topicName: "Pagination Component" },
      { topicId: "optionselector", topicName: "Option Selector" },
    ],
  },
  {
    id: "REACT_ROUTING",
    defaultTopic: "",
    sectionName: "React Routing",
    topics: [],
  },
  {
    id: "FE_SYS_DESIGN",
    defaultTopic: "debounce-throttle",
    sectionName: "Frontend Sys Design",
    topics: [
      { topicId: "debounce-throttle", topicName: "Debouncing and Throttling" },
    ],
  },
  {
    id: "PRACTICE",
    defaultTopic: "",
    sectionName: "Practice",
    topics: [],
  },
];

export default function App() {
  const [topic, setTopic] = useState("usereducer");
  const [section, setSection] = useState("PRACTICE"); //REACT_HOOKS
  const loc = useLocation();

  useEffect(() => {
    setSection(loc?.state?.landOn || "REACT_HOOKS");
  }, [loc]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          marginBottom: "4rem",
        }}
      >
        {sections?.map((sec, i) => (
          <div key={i} style={{ marginRight: "2rem" }}>
            <button
              style={{ backgroundColor: sec?.id == section && "cyan" }}
              onClick={() => {
                setSection(sec?.id);
                setTopic(sec?.topics?.[0]?.topicId);
              }}
            >
              {sec?.sectionName}
            </button>
          </div>
        ))}
      </div>
      <hr />

      {section == "REACT_HOOKS" && (
        <>
          <div style={{ marginBottom: "5rem" }}>
            {sections?.[0]?.topics?.map((tp, i) => (
              <button
                key={`topic-${i}`}
                style={{ backgroundColor: tp?.topicId == topic && "cyan" }}
                onClick={() => {
                  setTopic(tp?.topicId);
                }}
              >
                {tp?.topicName}
              </button>
            ))}
          </div>
          {topic == "usereducer" && <CounterReducer />}
          {topic == "useref" && <UseRef />}
          {topic == "usecontext" && <Parent />}
          {topic == "usememo" && <Memoize />}
          {topic == "useform" && <MyForm />}
          {topic == "usecallback" && <UseCallback />}
          {topic == "uselayout" && <UseLayoutEff />}
          {topic == "state-props" && <StatePropsParent />}
          {topic == "customHook" && <MyCounterComponent />}
          {/* {topic == "imperative" && <CounterReducer />} */}
          {/* {topic == "debug" && <CounterReducer />}  */}
        </>
      )}

      {section == "HTML_CSS" && (
        <>
          <div style={{ marginBottom: "5rem" }}>
            {sections?.[1]?.topics?.map((tp, i) => (
              <button
                key={i}
                style={{ backgroundColor: tp?.topicId == topic && "cyan" }}
                onClick={() => {
                  setTopic(tp?.topicId);
                }}
              >
                {tp?.topicName}
              </button>
            ))}
          </div>
          {topic == "css-mediaq" && <MediaQuery />}
          {topic == "css-position" && <Positions />}
          {topic == "htmlform" && <Registration />}
        </>
      )}

      {section == "REACT_ROUTING" && (
        <div>
          <hr />
          <h1> try this routes(router implementation in index.js file)</h1>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Link to="/login"> /login</Link>
            <Link to="/admin/category"> /admin/category</Link>
            <Link to="/admin/category/add-category">
              /admin/category/add-category
            </Link>
            <Link to="/admin/category/add-sub-category">
              {" "}
              /admin/category/add-sub-category
            </Link>
            <Link to="/admin/products"> /admin/products</Link>
            <Link to="/admin/random-path"> /admin/random-path</Link>
          </div>
        </div>
      )}

      {section == "FE_SYS_DESIGN" && (
        <div>
          {
            <>
              <div style={{ marginBottom: "5rem" }}>
                {sections?.[4]?.topics?.map((tp, i) => (
                  <button
                    key={i}
                    style={{ backgroundColor: tp?.topicId == topic && "cyan" }}
                    onClick={() => {
                      setTopic(tp?.topicId);
                    }}
                  >
                    {tp?.topicName}
                  </button>
                ))}
              </div>
              {topic == "debounce-throttle" && <DebounceThrottle />}
            </>
          }
        </div>
      )}

      {section == "REACT_QS" && (
        <div
          style={{
            marginBottom: "2rem",
          }}
        >
          <div style={{ marginBottom: "5rem" }}>
            {sections?.[2]?.topics?.map((tp, i) => (
              <button
                key={i}
                style={{
                  marginLeft: "1rem",
                  backgroundColor: tp?.topicId == topic && "cyan",
                }}
                onClick={() => {
                  setTopic(tp?.topicId);
                }}
              >
                {tp?.topicName}
              </button>
            ))}
          </div>
          {topic == "file-manager" && <FileManager />}
          {topic == "progressbar" && <Progressbar progress={2} />}
          {topic == "progressbar" && <Progressbar progress={4} />}
          {topic == "progressbar" && <Progressbar progress={67} />}
          {topic == "autocomplete" && <AutoComplete />}
          {topic == "otp" && (
            <OTPComponent
              maxbox={6}
              onAllFilled={(otp) => {
                console.log({ otp });
              }}
            />
          )}
          {topic == "pagination" && <Pagination />}
          {topic == "optionselector" && <OptionSelector />}
        </div>
      )}
      {section == "PRACTICE" && (
        <div style={{ marginBottom: "2rem" }}>
          <Practice />
        </div>
      )}
    </>
  );
}
