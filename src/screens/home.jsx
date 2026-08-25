import { useState } from "react";

function Home() {
  const [namegroup, setNameg] = useState("");
  const [namelesson, setNamel] = useState("");
  const [date, setDate] = useState("");
  const [student, setStudent] = useState("");

  function Save() {
    // Берём старые отчёты
    const oldData = JSON.parse(localStorage.getItem("data")) || [];

    // Создаём новый отчёт
    const newData = {
      namegroup: namegroup,
      namelesson: namelesson,
      date: date,
      student: student,
    };

    // Добавляем новый отчёт к старым
    oldData.push(newData);

    // Сохраняем всё обратно
    localStorage.setItem("data", JSON.stringify(oldData));

    alert("Сохранено");
  }

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-7">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4 p-md-5">
                <h2 className="fw-bold mb-2">Учёт посещаемости</h2>

                <a href="/history" className="btn btn-success mb-3">
                  История
                </a>

                <p className="text-secondary mb-4">
                  Введите данные группы и список студентов
                </p>

                {/* Название группы */}

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Название группы
                  </label>

                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Например: Test"
                    onChange={(e) => setNameg(e.target.value)}
                  />
                </div>

                {/* Название занятия */}

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Название занятия
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Например: Математика"
                    onChange={(e) => setNamel(e.target.value)}
                  />
                </div>

                {/* Дата */}

                <div className="mb-3">
                  <label className="form-label fw-semibold">Дата занятия</label>

                  <input
                    type="date"
                    className="form-control"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                {/* Студенты */}

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Список студентов
                  </label>

                  <textarea
                    className="form-control"
                    rows="6"
                    placeholder={
                      "Иванов Иван Иванович\n" +
                      "Петров Петр Петрович\n" +
                      "Сидорова Анна Сергеевна"
                    }
                    onChange={(e) => setStudent(e.target.value)}
                  ></textarea>

                  <small className="text-secondary">
                    Один студент на одной строке
                  </small>
                </div>

                {/* Кнопка */}

                <button
                  onClick={Save}
                  className="btn btn-primary btn-lg w-100 rounded-3"
                >
                  Создать список для отметки
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
