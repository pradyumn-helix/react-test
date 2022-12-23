import './App.css';

function App() {
  const categories = [
    { id: 1, name: "Services" },
    { id: 2, name: "Engineering" },
    { id: 3, name: "Services" },
    { id: 4, name: "Training" },
    { id: 5, name: "Support" },
    { id: 6, name: "Research and Development" },
    { id: 7, name: "Training" },
    { id: 8, name: "Human Resources" },
    { id: 9, name: "Services" },
    { id: 10, name: "Legal" },
    { id: 11, name: "Sales" },
    { id: 12, name: "Legal" },
    { id: 13, name: "Accounting" },
    { id: 14, name: "Business Development" },
    { id: 15, name: "Accounting" },
    { id: 16, name: "Services" },
    { id: 17, name: "Training" },
    { id: 18, name: "Research and Development" },
    { id: 19, name: "Human Resources" },
    { id: 20, name: "Legal" },
    { id: 21, name: "Research and Development" },
    { id: 22, name: "Human Resources" },
    { id: 23, name: "Services" },
    { id: 24, name: "Research and Development" },
    { id: 25, name: "Research and Development" },
    { id: 26, name: "Accounting" },
    { id: 27, name: "Product Management" },
    { id: 28, name: "Human Resources" },
    { id: 29, name: "Legal" },
    { id: 30, name: "Legal" }
  ];
  return (
    <div>
      <h1>HEADING</h1>
      <div className="horizontal my_scroll_div">
        {
          categories.map(categorie => {
            return (<div key={categorie.id}>{categorie.name}</div>)
          })
        }
      </div>
      {
        categories.map(categorie => {
          return (<div style={{height: '130px'}}>
            <h1 key={categorie.id}>{categorie.name}</h1>
          </div>)
        })
      }
    </div>
  );
}

export default App;
