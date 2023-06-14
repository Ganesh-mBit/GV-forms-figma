import './App.css';
import Dialog from './components/Dialog';
import Form from './components/Form';
import TextField from "./components/TextField";
import Topbar from "./components/Topbar";
import TwoTextFieldSide from "./components/TwoTextFieldSide";
import Button from "./components/Button";
import RadioField from './components/RadioField';
import { INPUT_FIELDS, JOB_OPENINGS, STEP1_SIDE_FIELDS, STEP2_RADIO_FIELDS, STEP2_SIDE_FIELDS1, STEP2_SIDE_FIELDS2 } from './json/FieldsData';
import JobCard from './components/JobCard';

export const TextFieldLabelCSS = 'text-sm text-font_dark';
export const TextFieldInputCSS = 'text-sm placeholder-secondary px-3 py-2 h-[36px]';

function App() {
  return (
    <div className='p-8 flex flex-col gap-8'>
      <div className='flex flex-wrap gap-8'>

        {/* Form Step 1 */}
        <Dialog className="w-[577px] h-[564px] bg-card_bg outline outline-1 outline-card_border p-8 rounded-md gap-24">
          <Form className="gap-6">
            <Topbar className="items-center" leftLabel="Create a job" leftLabelCSS="text-lg text-font_dark" rightLabelCSS="text-font_dark" rightLabel="Step 1" />
            {INPUT_FIELDS?.map((item, id) => (
              <TextField labelCSS="text-sm text-font_dark" inputCSS="h-[36px] text-sm placeholder-secondary px-3 py-2" key={id} label={item.label} placeHolder={item.placeHolder} required={item.required} className={item.className} />
            ))}
            <TwoTextFieldSide fields={STEP1_SIDE_FIELDS} className="gap-6" />
          </Form>
          <div className='flex justify-end'>
            <Button className="w-[68px] text-font_white bg-primary font-medium outline outline-1 py-2 px-4">Next</Button>
          </div>
        </Dialog>

        {/* Form Step 2 */}
        <Dialog className="w-[577px] h-[564px] bg-card_bg outline outline-1 outline-card_border p-8 rounded-md gap-24">
          <Form className="gap-6">
            <Topbar className="items-center" leftLabel="Create a job" leftLabelCSS="text-lg" rightLabel="Step 2" />
            <TwoTextFieldSide fields={STEP2_SIDE_FIELDS1} className="gap-6" />
            <TwoTextFieldSide fields={STEP2_SIDE_FIELDS2} className="gap-6" />
            <TextField labelCSS="text-sm text-font_dark" inputCSS="h-[36px] text-sm placeholder-secondary px-3 py-2" label="Total employee" placeHolder="ex. 100" className="gap-1" />
            <RadioField label="Apply type" labelCSS="text-sm text-font_dark" className="gap-1" fields={STEP2_RADIO_FIELDS} />
          </Form>
          <div className='flex justify-end'>
            <Button className="w-[72px] text-font_white bg-primary font-medium outline outline-1 py-2 px-4">Save</Button>
          </div>
        </Dialog>
      </div>
      <div className='flex flex-wrap gap-8'>
        {JOB_OPENINGS.map((item, id) => (
          <JobCard key={id} item={item} className="w-[830px] min-h-[320px] outline outline-1 outline-[#DADEDF] gap-2 p-4 rounded-md" />
        ))}
      </div>
    </div>
  );
}

export default App;
