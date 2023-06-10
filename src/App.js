import './App.css';
import Dialog from './components/Dialog';
import Form from './components/Form';
import TextField from "./components/TextField";
import Topbar from "./components/Topbar";
import TwoTextFieldSide from "./components/TwoTextFieldSide";
import Button from "./components/Button";
import RadioField from './components/RadioField';

export const TextFieldLabelCSS = 'text-sm text-[#212121]';
export const TextFieldInputCSS = 'text-sm placeholder-[#7A7A7A] px-3 py-2 h-[36px]';

function App() {
  const inputFields = [
    { label: 'Job Title', placeHolder: 'ex. UI UX Designer', className: 'gap-1' },
    { label: 'Company name', placeHolder: 'ex. Google', className: 'gap-1' },
    { label: 'Industry', placeHolder: 'ex. Information Technology', className: 'gap-1' }
  ];

  const setp1SideFields = [
    { label: 'Location', placeHolder: 'ex. Chennai', className: 'gap-1' },
    { label: 'Remote type', placeHolder: 'ex. In-office', className: 'gap-1' }
  ];

  const setp2SideFields1 = [
    { label: 'Experience', placeHolder: 'Minimum', className: 'gap-1' },
    { label: '', placeHolder: 'Maximum', className: 'gap-1' }
  ];

  const setp2SideFields2 = [
    { label: 'Salary', placeHolder: 'Minimum', className: 'gap-1' },
    { label: '', placeHolder: 'Maximum', className: 'gap-1' }
  ];

  const setp2RadioFields = [
    { label: 'Quick apply', className: 'gap-1' },
    { label: 'External apply', className: 'gap-1' }
  ];

  return (
    <div className='p-8 flex flex-wrap gap-8'>
      <Dialog className="w-[577px] h-[564px] bg-[#FFFFFF] outline p-8 rounded-md gap-24">
        <Form className="gap-6">
          <Topbar className="items-center" leftLabel="Create a job" leftLabelCSS="text-lg" rightLabel="Step 1" />
          {inputFields?.map((item, id) => (
            <TextField labelCSS="text-sm text-[#212121]" inputCSS="h-[36px] text-sm placeholder-[#7A7A7A] px-3 py-2" key={id} label={item.label} placeHolder={item.placeHolder} className={item.className} />
          ))}
          <TwoTextFieldSide fields={setp1SideFields} className="gap-6" />
        </Form>
        <div className='flex justify-end'>
          <Button className="text-[#FFFFFF] bg-[#1597E4] py-2 px-4">Next</Button>
        </div>
      </Dialog>
      <Dialog className="w-[577px] h-[564px] bg-[#FFFFFF] outline p-8 rounded-md gap-24">
        <Form className="gap-6">
          <Topbar className="items-center" leftLabel="Create a job" leftLabelCSS="text-lg" rightLabel="Step 2" />
          <TwoTextFieldSide fields={setp2SideFields1} className="gap-6" />
          <TwoTextFieldSide fields={setp2SideFields2} className="gap-6" />
          <TextField labelCSS="text-sm text-[#212121]" inputCSS="h-[36px] text-sm placeholder-[#7A7A7A] px-3 py-2" label="Total employee" placeHolder="ex. 100" className="gap-1" />
          <RadioField label="Apply type" labelCSS="text-sm text-[#212121]" className="gap-1" />
        </Form>
        <div className='flex justify-end'>
          <Button className="text-[#FFFFFF] bg-[#1597E4] py-2 px-4">Save</Button>
        </div>
      </Dialog>
    </div>
  );
}

export default App;
