import logo from './logo.svg';
import './App.css';

function App() {
  const data = [
    { id: 1, name: 'Query Workers', codeName: 'Flying Octopus', function: 'API on the fly' },
    { id: 2, name: 'Stream Workers', codeName: 'Nuclear Octopus', function: 'Anything with data in motion' },
    { id: 3, name: 'Search View', codeName: 'Sherlock Octopus', function: 'Search and Analytics' },
  ];

  return (
    <div className="App">
      <h1>Macrometa Tech Stack</h1>
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
          {data.map((person, index) => (
            <tr key={index}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.codeName}</td>
              <td>{person.function}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
