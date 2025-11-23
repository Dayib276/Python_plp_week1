import { useEffect, useState } from "react";
import API from "../services/api";

export default function Lessons() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    API.get("/lessons").then((res) => setLessons(res.data));
  }, []);

  return (
    <div className="page">
      <h1>Lessons</h1>

      <div className="grid">
        {lessons.map((lesson) => (
          <div className="card" key={lesson._id}>
            <h2>{lesson.title}</h2>
            <p>{lesson.content}</p>
            <span className="badge">{lesson.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
