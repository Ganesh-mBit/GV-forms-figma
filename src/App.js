import './App.css';
import Dialog from './components/Dialog';
import Form from './components/Form';
import TextField from "./components/TextField";
import Topbar from "./components/Topbar";
import TwoTextFieldSide from "./components/TwoTextFieldSide";
import Button from "./components/Button";
import RadioField from './components/RadioField';
import { INPUT_FIELDS, STEP1_SIDE_FIELDS, STEP2_RADIO_FIELDS, STEP2_SIDE_FIELDS1, STEP2_SIDE_FIELDS2 } from './json/FieldsData';
import Card from './components/Card';

export const TextFieldLabelCSS = 'text-sm text-[#212121]';
export const TextFieldInputCSS = 'text-sm placeholder-[#7A7A7A] px-3 py-2 h-[36px]';

function App() {
  return (
    <div className='p-8 flex flex-wrap gap-8'>
      <Dialog className="w-[577px] h-[564px] bg-[#FFFFFF] outline outline-1 outline-[#E6E6E6] p-8 rounded-md gap-24">
        <Form className="gap-6">
          <Topbar className="items-center" leftLabel="Create a job" leftLabelCSS="text-lg" rightLabel="Step 1" />
          {INPUT_FIELDS?.map((item, id) => (
            <TextField labelCSS="text-sm text-[#212121]" inputCSS="h-[36px] text-sm placeholder-[#7A7A7A] px-3 py-2" key={id} label={item.label} placeHolder={item.placeHolder} className={item.className} />
          ))}
          <TwoTextFieldSide fields={STEP1_SIDE_FIELDS} className="gap-6" />
        </Form>
        <div className='flex justify-end'>
          <Button className="text-[#FFFFFF] bg-[#1597E4] py-2 px-4">Next</Button>
        </div>
      </Dialog>
      <Dialog className="w-[577px] h-[564px] bg-[#FFFFFF] outline outline-1 outline-[#E6E6E6] p-8 rounded-md gap-24">
        <Form className="gap-6">
          <Topbar className="items-center" leftLabel="Create a job" leftLabelCSS="text-lg" rightLabel="Step 2" />
          <TwoTextFieldSide fields={STEP2_SIDE_FIELDS1} className="gap-6" />
          <TwoTextFieldSide fields={STEP2_SIDE_FIELDS2} className="gap-6" />
          <TextField labelCSS="text-sm text-[#212121]" inputCSS="h-[36px] text-sm placeholder-[#7A7A7A] px-3 py-2" label="Total employee" placeHolder="ex. 100" className="gap-1" />
          <RadioField label="Apply type" labelCSS="text-sm text-[#212121]" className="gap-1" fields={STEP2_RADIO_FIELDS} />
        </Form>
        <div className='flex justify-end'>
          <Button className="text-[#FFFFFF] bg-[#1597E4] py-2 px-4">Save</Button>
        </div>
      </Dialog>
      <Card className="flex-col gap-6" />
    </div>
  );
}

export default App;
