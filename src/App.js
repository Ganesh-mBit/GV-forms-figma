import './App.css';
import TextField from './components/TextField';
import Topbar from './components/Topbar';

function App() {
  return (
    <div className='flex gap-1'>
      <Topbar leftLabel="Create Job" rightLabel="Step 1" />
      <TextField label="Job Title" placeHolder="ex.UI UX Designer" className="gap-1" />
      <TextField label="Job Title" placeHolder="ex.UI UX Designer" className="gap-1" />
    </div>
  );
}

export default App;
