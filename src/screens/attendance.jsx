import { useState } from "react";

function Attendance() {
  // Получаем выбранную группу
  const data = JSON.parse(localStorage.getItem("openData"));

  // Получаем учеников
  const students = data.student.split("\n");

  // Кто присутствует
  const [present, setPresent] = useState([]);

  // Нажали на ученика
  function ClickStudent(index) {
    const newPresent = [...present];

    if (newPresent.includes(index)) {
      newPresent.splice(newPresent.indexOf(index), 1);
    } else {
      newPresent.push(index);
    }

    setPresent(newPresent);
  }

  return (
    <div className="bg-light min-vh-100 py-4">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold mb-0">История отчётов</h2>

          <div className="d-flex gap-2">
            <a href="/history" className="btn btn-secondary">
              Назад
            </a>
          </div>
        </div>
        {/* Название */}

        <div className="card shadow-sm mb-3">
          <div className="card-body">
            <h2>{data.namelesson}</h2>

            <p>Группа: {data.namegroup}</p>

            <p>Дата: {data.date}</p>
          </div>
        </div>

        {/* Количество */}

        <div className="card shadow-sm mb-3">
          <div className="card-body">
            <h5>Всего студентов: {students.length}</h5>

            <h5 className="text-success">Присутствуют: {present.length}</h5>

            <h5 className="text-danger">
              Отсутствуют:
              {students.length - present.length}
            </h5>
          </div>
        </div>

        {/* Кнопка всех */}

        <button
          className="btn btn-success mb-3"
          onClick={() => {
            const all = [];

            students.map((student, index) => {
              all.push(index);
            });

            setPresent(all);
          }}
        >
          Отметить всех
        </button>

        {/* Ученики */}

        <div className="card">
          {students.map((student, index) => (
            <div
              key={index}
              onClick={() => ClickStudent(index)}
              className="p-3 border-bottom d-flex justify-content-between"
            >
              <strong>
                {index + 1}. {student}
              </strong>

              {present.includes(index) ? (
                <span className="text-success">Присутствует</span>
              ) : (
                <span className="text-danger">Отсутствует</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Attendance;
