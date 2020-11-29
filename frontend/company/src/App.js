import CreateCompany from './components/createCompany/createCompany';

import companySchema from './components/createCompany/companySchema';

import './App.css';

function App() {
  return (
    <div className="App">
      <CreateCompany schema={companySchema} />
    </div>
  );
}

export default App;
