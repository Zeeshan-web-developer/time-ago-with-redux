import { useSelector } from "react-redux";
import "./App.css";
import { format } from "timeago.js";
import moment from "moment";
export default function ShowData() {
  const todos = useSelector((state) => state.todos);

  return (
    <div style={{ marginLeft: "50px" }}>
      {todos.map((item, i) => (
        <li key={i} className="message">
          {item.name}
          <span style={{ marginLeft: "35px" }}>
            {moment(item.time).fromNow()}
          </span>
          <span style={{ marginLeft: "35px" }}>
            {moment(item.time).calendar()}
          </span>
        </li>
      ))}
    </div>
  );
}
