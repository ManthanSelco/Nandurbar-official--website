export type Person = {
  name: string;
  role: string;
  org?: string;
};

export const CHIEF_GUEST: Person = {
  name: "Dr. Mittali Sethi (IAS)",
  role: "Chief Guest — Hon. District Collector, Nandurbar",
  org: "Keynote: driving climate-resilient rural livelihoods",
};

export const HOSTS: Person[] = [
  { name: "Mr. Prashant Bhide", role: "Introduction & context setting", org: "SELCO Foundation" },
  { name: "Mr. Rajendra Dahatonde", role: "Overview of KVK activities", org: "KVK, Nandurbar" },
];

export const CHAMPIONS: Person[] = [
  { name: "Ms. Bibi Fathima", role: "Millets · Recipient of the Equator Award" },
  { name: "Mr. Ravi Sajjanar", role: "Director", org: "Hungunda Farmer Producer Company" },
  { name: "Mr. Mithilesh Desai", role: "Jackfruit King FPO" },
  { name: "UTMT Honey", role: "Honey value chain" },
  { name: "Sahyadri FPC", role: "Nashik" },
];

export const PANEL: Person[] = [
  { name: "Mr. Raveendra More", role: "Assistant General Manager", org: "NABARD" },
  { name: "Mr. Nandkumar Paithankar", role: "Lead District Manager (LDM)", org: "State Bank of India" },
  { name: "Ms. Rucha Limaye", role: "Moderator", org: "SELCO Foundation" },
];

export const CONTACT = {
  email: "info@selcofoundation.org",
  phones: [
    { label: "Event queries — Mr. Prashant Bhide", number: "+91 95459 04661" },
    { label: "SELCO Foundation", number: "+91 80 26493145" },
    { label: "SELCO Foundation", number: "+91 99000 25660" },
  ],
  website: "https://selcofoundation.org",
  offices: [
    {
      city: "Bengaluru",
      address:
        "690, 15th Cross Rd, Jeewan Griha Colony, 2nd Phase, J. P. Nagar, Bengaluru, Karnataka 560078",
    },
    {
      city: "Guwahati",
      address:
        "PNGB Rd, Nambari Railway Officers Colony, Gotanagar, Maligaon, Guwahati, Assam 781011",
    },
    {
      city: "Bhubaneshwar",
      address: "Plot No: A, 50, Nilakantha Nagar, Nayapalli, Bhubaneswar, Odisha 751012",
    },
  ],
};

export const MEDIA = [
  {
    outlet: "New York Times",
    title: "Electrifying India, With the Sun and Small Loans",
    date: "3 January 2016",
    url: "https://www.nytimes.com/2016/01/03/business/energy-environment/electrifying-india-with-the-sun-and-small-loans.html",
  },
  {
    outlet: "Mint Lounge",
    title: "In rural Karnataka, businesses powered by solar energy clean up",
    date: "16 September 2021",
    url: "https://lifestyle.livemint.com/news/talking-point/how-decentralised-energy-solutions-are-powering-rural-units-111631804076437.html",
  },
  {
    outlet: "Forbes",
    title: "Jugaad: The Art Of Converting Adversity Into Opportunity",
    date: "23 March 2014",
    url: "https://www.forbes.com/sites/ashoka/2014/03/23/jugaad-the-art-of-converting-adversity-into-opportunity/",
  },
  {
    outlet: "BBC",
    title: "Powering our way out of poverty",
    date: "13 May 2009",
    url: "http://news.bbc.co.uk/2/hi/science/nature/8046112.stm",
  },
];
