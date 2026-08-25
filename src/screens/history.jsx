import { useState } from "react";

function History() {
  // Получаем все сохранённые отчёты
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || [],
  );

  // Удалить всё
  function RemoveAll() {
    localStorage.removeItem("data");

    setData([]);
  }

  // Удалить один отчёт
  function Remove(index) {
    // Создаём новый массив без выбранного отчёта
    const newData = data.filter((item, i) => i !== index);

    // Сохраняем новый массив
    localStorage.setItem("data", JSON.stringify(newData));

    // Показываем новый массив на странице
    setData(newData);
  }

  return (
    <div className="bg-light min-vh-100 py-4">
      <div className="container">
        {/* Заголовок */}

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold mb-0">История отчётов</h2>

          <div className="d-flex gap-2">
            <button onClick={RemoveAll} className="btn btn-danger">
              Очистить всё
            </button>

            <a href="/" className="btn btn-secondary">
              Назад
            </a>
          </div>
        </div>

        {/* Все отчёты */}

        {data.map((item, index) => (
          <div key={index} className="card border-0 shadow-sm mb-3">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="fw-bold mb-2">{item.namegroup}</h5>

                  <div className="text-muted mb-1">
                    Занятия: {item.namelesson}
                  </div>

                  <div className="text-muted mb-1">
                    Студенты: {item.student}
                  </div>

                  <small className="text-secondary">Дата: {item.date}</small>
                </div>

                <div className="d-flex gap-2">
                  <button
                    onClick={() => {
                      localStorage.setItem(
                        "openData",
                        JSON.stringify(data[index]),
                      );

                      window.location.href = "/attendance";
                    }}
                    className="btn btn-primary"
                  >
                    Открыть
                  </button>
                  <button
                    onClick={() => Remove(index)}
                    className="btn btn-danger"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
