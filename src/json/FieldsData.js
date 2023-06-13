export const INPUT_FIELDS = [
  { label: 'Job Title', placeHolder: 'ex. UI UX Designer', className: 'gap-1', required: true },
  { label: 'Company name', placeHolder: 'ex. Google', className: 'gap-1', required: true },
  { label: 'Industry', placeHolder: 'ex. Information Technology', className: 'gap-1', required: true }
];

export const STEP1_SIDE_FIELDS = [
  { label: 'Location', placeHolder: 'ex. Chennai', className: 'gap-1' },
  { label: 'Remote type', placeHolder: 'ex. In-office', className: 'gap-1' }
];

export const STEP2_SIDE_FIELDS1 = [
  { label: 'Experience', placeHolder: 'Minimum', className: 'gap-1' },
  { label: '', placeHolder: 'Maximum', className: 'gap-1' }
];

export const STEP2_SIDE_FIELDS2 = [
  { label: 'Salary', placeHolder: 'Minimum', className: 'gap-1' },
  { label: '', placeHolder: 'Maximum', className: 'gap-1' }
];

export const STEP2_RADIO_FIELDS = [
  { label: 'Quick apply', value: 'quick', className: 'gap-1' },
  { label: 'External apply', value: 'external', className: 'gap-1' }
];

export const JOB_INFO_DATA = [
  { desc: 'Part-Time (9.00 am - 5.00 pm IST)', className: 'text-font_dark' },
  { desc: 'Experience (1 - 2 years)', className: 'text-font_dark' },
  { desc: 'INR (₹) 30,000 - 50,000 / Month', className: 'text-font_dark' },
  { desc: '51-200 employees', className: 'text-font_dark' }
];

export const JOB_OPENINGS = [
  {
    imgUrl: './images/logo.png',
    title: 'UX UI Designer',
    companyName: 'Great Vibes - Information Technology',
    companyAddress: 'Chennai, Tamilnadu, India (In-office)',
    parameters: [
      { desc: 'Part-Time (9.00 am - 5.00 pm IST)', className: 'text-font_dark' },
      { desc: 'Experience (1 - 2 years)', className: 'text-font_dark' },
      { desc: 'INR (₹) 30,000 - 60,000 / Month', className: 'text-font_dark' },
      { desc: '51-200 employees', className: 'text-font_dark' }
    ],
    buttonLabel: 'Apply Now',
    buttonCSS: 'bg-primary text-font_white',
  },
  {
    imgUrl: './images/logo.png',
    title: 'Developer',
    companyName: 'Great Vibes - Information Technology',
    companyAddress: 'Chennai, Tamilnadu, India (In-office)',
    parameters: [
      { desc: 'Part-Time (9.00 am - 5.00 pm IST)', className: 'text-font_dark' },
      { desc: 'Experience (1 - 2 years)', className: 'text-font_dark' },
      { desc: 'INR (₹) 50,000 - 70,000 / Month', className: 'text-font_dark' },
      { desc: '51-200 employees', className: 'text-font_dark' }
    ],
    buttonLabel: 'External Apply',
    buttonCSS: 'bg-card_bg text-primary outline outline-1 outline-primary',
  },
  {
    imgUrl: './images/logo.png',
    title: 'Interaction Designer',
    companyName: 'Great Vibes - Information Technology',
    companyAddress: 'Chennai, Tamilnadu, India (In-office)',
    parameters: [
      { desc: 'Part-Time (9.00 am - 5.00 pm IST)', className: 'text-font_dark' },
      { desc: 'Experience (1 - 2 years)', className: 'text-font_dark' },
      { desc: 'INR (₹) 30,000 - 50,000 / Month', className: 'text-font_dark' },
      { desc: '51-200 employees', className: 'text-font_dark' }
    ],
    buttonLabel: 'External Apply',
    buttonCSS: 'bg-card_bg text-primary outline outline-1 outline-primary',
  },
  {
    imgUrl: './images/logo.png',
    title: 'SEO Analyst',
    companyName: 'Great Vibes - Information Technology',
    companyAddress: 'Chennai, Tamilnadu, India (In-office)',
    parameters: [
      { desc: 'Part-Time (9.00 am - 5.00 pm IST)', className: 'text-font_dark' },
      { desc: 'Experience (1 - 2 years)', className: 'text-font_dark' },
      { desc: 'INR (₹) 30,000 - 50,000 / Month', className: 'text-font_dark' },
      { desc: '51-200 employees', className: 'text-font_dark' }
    ],
    buttonLabel: 'External Apply',
    buttonCSS: 'bg-primary text-font_white',
  }
];
