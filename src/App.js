import './App.css';

function App({title,data = []}) {

  return (
    <div >
       <div>{title}</div>
       <slot/>
       <table>
        <tbody>
          {data.map((row,index) => (
            <tr key={index}>
              <td>{row}</td>
            </tr>
          ))}
         </tbody>
       </table>
    </div>
  );
}

export default App;
