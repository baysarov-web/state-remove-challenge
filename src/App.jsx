import React, { useState } from "react";
import { fakeDatabase } from "./fakeDatabase";

function App() {
  const [challenges, setChallenges] = useState(fakeDatabase.challenges);
  const handleRemove = (id) => {
    setChallenges(
      challenges.filter(item => {
        if (id !== item.id) {
          return item
        }
      })
    )
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="bg-light text-center p-2 display-6 mb-2">
            Сложные чалленги
          </div>
          <div>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <th>№</th>
                  <th>Название</th>
                  <th>Легко</th>
                  <th>Действие</th>
                </tr>
              </tbody>
              <tbody>
                {challenges.map((challenge, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{challenge.name}</td>
                      <td>{challenge.isEasy ? "да" : "нет"}</td>
                      <td>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => handleRemove(challenge.id)}
                        >
                          удалить
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
