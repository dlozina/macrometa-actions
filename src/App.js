import { useEffect, useState } from "react";
import  {getQueryWorkerData}  from "./services/getData";
import './App.css';

function App() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
        try {
            const _data = await getQueryWorkerData("allFunctions");
            if (Array.isArray(_data.result)) {
                setData(_data.result);
            } else {
                throw new Error('Returned Data is not an array');
            }
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };
    getData();
}, []);


  return (
    <div className="App">
      <h1>Macrometa Tech Stack</h1>
        {loading ? (
            <p>Loading...</p>
        ) : error ? (
            <p>Error: {error.message}</p>
        ) : (
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Code Name</th>
                    <th>Function</th>
                </tr>
                </thead>
                <tbody>
                {data.map((tableData, index) => (
                    <tr key={index}>
                        <td>{tableData.id}</td>
                        <td>{tableData.name}</td>
                        <td>{tableData.codeName}</td>
                        <td>{tableData.function}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        )}
      </div>
  );
}

export default App;
