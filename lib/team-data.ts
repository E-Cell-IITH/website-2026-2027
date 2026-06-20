// lib/team-data.ts
// All image paths use .webp format
// Photos in /public/team/

export interface Member {
  name: string;
  img: string;
  email?: string;
  linkedin?: string;
  role?: string;
}

export interface DomainHead {
  label: string;
  members: Member[];
}

export interface Department {
  name: string;
  desc: string;
  members: Member[];
}

export const OC_HEAD: Member = {
  name: "Adhyayan Chowdhary",
  role: "Overall Head",
  img: "/team/Adhyayan Chowdhary.webp",
  linkedin: "https://www.linkedin.com/in/adhyayan-chowdhary/",
};

export const OC_VICE: Member = {
  name: "Shivram S",
  role: "Vice Overall Coordinator",
  img: "/team/Shivram S.webp",
  linkedin: "https://www.linkedin.com/in/shivram--s/",
};

export const DOMAIN_HEADS: DomainHead[] = [
  {
    label: "CORPORATE RELATIONS & FINANCE",
    members: [
      {
        name: "Ashani Sawant",
        img: "/team/Ashani Sawant.webp",
        linkedin: "https://www.linkedin.com/in/ashani-sawant-b83856322",
      },
      {
        name: "Aditya Singh Tomar",
        img: "/team/Aditya Singh Tomar.webp",
        linkedin: "https://www.linkedin.com/in/aditya-singh-tomar-79b97831b",
      },
    ],
  },
  {
    label: "IDEATION",
    members: [
      {
        name: "Bhavana Kasula",
        img: "/team/BhavanaK.webp",
        linkedin: "https://www.linkedin.com/in/bhavana-kasula-a5917831b",
      },
      {
        name: "Navya Popuri",
        img: "/team/Navya Popuri.webp",
        linkedin: "https://www.linkedin.com/in/navya-popuri",
      },
    ],
  },
  {
    label: "MULTIMEDIA & DESIGN",
    members: [
      {
        name: "Neel Patel",
        img: "/team/Neel.webp",
        linkedin: "https://www.linkedin.com/in/neelpatel202006",
      },
    ],
  },
  {
    label: "OPERATIONS",
    members: [
      {
        name: "Srihith Kurelli",
        img: "/team/Srihith.webp",
        linkedin: "https://www.linkedin.com/in/srihith-sai-kurelli-28ba93321",
      },
      {
        name: "Srijith Kurelli",
        img: "/team/Srijith Kurelli.webp",
        linkedin: "https://www.linkedin.com/in/srijith-sai-kurelli-a56a96321",
      },
    ],
  },
  {
    label: "PR & NETWORKING",
    members: [
      {
        name: "Spoorthi Yellamanchali",
        img: "/team/Spoorthi Yellamanchali.webp",
        linkedin: "https://www.linkedin.com/in/spoorthi-yellamanchali-182574321",
      },
      {
        name: "Abhinav Girish",
        img: "/team/Abhinav Girish.webp",
        linkedin: "https://www.linkedin.com/in/abhinav-girish-130aa52b7",
      },
    ],
  },
  {
    label: "STARTUP PARTNERSHIPS & OUTREACH",
    members: [
      {
        name: "Ankit Jyani",
        img: "/team/Ankit.webp",
        linkedin: "https://www.linkedin.com/in/ankitjyani",
      },
    ],
  },
  {
    label: "WEB",
    members: [
      {
        name: "Kashyap Nukala",
        img: "/team/Kashyap Nukala.webp",
        linkedin: "https://www.linkedin.com/in/kashyap-nukala-297750321",
      },
    ],
  },
];

export const DEPARTMENTS: Department[] = [
  {
    name: "Corporate Relations & Finance",
    desc: "Managing partnerships and financial strategies that fuel E-Cell's mission. This team secures corporate collaborations, handles financial planning, and ensures sustainable growth.",
    members: [
      { name: "Rudra Akojwar", img: "/team/Rudra Akojwar.webp", linkedin: "https://www.linkedin.com/in/rudra-akojwar-b19b66380" },
      { name: "Saksham Tambe", img: "/team/Saksham Tambe.webp", linkedin: "https://www.linkedin.com/in/saksham-tambe-1b80622a6" },
      { name: "Mahi Sureka", img: "/team/Mahi Sureka.webp", linkedin: "https://www.linkedin.com/in/mahi-sureka-2b5119381" },
      { name: "Manish Kumar", img: "/team/Manish Kumar.webp", linkedin: "https://www.linkedin.com/in/manish-kumar-a1528936b" },
      { name: "Yatharth", img: "/team/Yatharth.webp", linkedin: "https://www.linkedin.com/in/yatharth-singh-557596215" },
      { name: "Arohi Gangwar", img: "/team/Arohi Gangwar.webp", linkedin: "https://www.linkedin.com/in/arohi-gangwar-0b1348384" },
      { name: "Kavin B", img: "/team/Kavin B.webp", linkedin: "https://www.linkedin.com/in/kavin-b-83b73b361" },
      { name: "Misha Sureka", img: "/team/Misha Sureka.webp", linkedin: "https://www.linkedin.com/in/misha-sureka-2b5119381" },
      { name: "Tisjot Singh Kohli", img: "/team/Tisjot Singh Kohli.webp", linkedin: "https://www.linkedin.com/in/tisjot-kohli-a7050538a" },
      { name: "Parth Kunde", img: "/team/Parth Kunde.webp", linkedin: "https://www.linkedin.com/in/parth-kunde-12a8b836a" },
      { name: "Sarah J", img: "/team/Sarah J.webp", linkedin: "https://www.linkedin.com/in/sarah-john-brittto-03b422336" },
      { name: "Ayushi Zingade", img: "/team/Ayushi Zingade.webp", linkedin: "https://www.linkedin.com/in/ayushi-krishna-zingade-72292b380" },
    ],
  },
  {
    name: "Ideation",
    desc: "The creative powerhouse generating innovative concepts and solutions. This team brainstorms new initiatives, develops strategic ideas, and transforms vision into actionable plans.",
    members: [
      { name: "Aaryav Jha", img: "/team/Aaryav Jha.webp", linkedin: "https://www.linkedin.com/in/aaryav-jha-585551380" },
      { name: "Tarun V", img: "/team/Tarun V.webp", linkedin: "https://www.linkedin.com/in/tarun-v-3432ab36a" },
      { name: "Tilak Asodariya", img: "/team/Tilak Asodariya.webp", linkedin: "https://www.linkedin.com/in/tilak-asodariya-2b7668383" },
      { name: "Raqi", img: "/team/Raqi.webp", linkedin: "https://www.linkedin.com/in/raqi-mohammed-a05104383" },
      { name: "Pritika D", img: "/team/Pritika D.webp", linkedin: "https://www.linkedin.com/in/pritika-d-133042397" },
      { name: "Vinod Kumar B", img: "/team/Vinod Kumar B.webp", linkedin: "https://www.linkedin.com/in/vinod-kumar-44786b256" },
      { name: "P. Kruthika", img: "/team/P. Kruthika.webp", linkedin: "https://www.linkedin.com/in/kruthika-p-a43801389" },
      { name: "Yogita V", img: "/team/Yogita V.webp", linkedin: "https://www.linkedin.com/in/yogita-v-87470939a" },
      { name: "Sreevarsha Chillarige", img: "/team/Sreevarsha Chillarige.webp", linkedin: "https://www.linkedin.com/in/sreevarsha-chillarige-930990381" },
      { name: "Shaswath S", img: "/team/Shaswath S.webp", linkedin: "https://www.linkedin.com/in/shaswath-s-1a1662376" },
      { name: "Anantha Bhargav", img: "/team/Anantha Bhargav.webp", linkedin: "https://www.linkedin.com/in/anantha-bhargav-b95b12390" },
    ],
  },
  {
    name: "Multimedia & Design",
    desc: "Amplifying E-Cell's voice across all platforms. Creating engaging content that ensures our message reaches aspiring entrepreneurs everywhere.",
    members: [
      { name: "Swapnadeep Roy", img: "/team/Swapnadeep Roy.webp", linkedin: "https://www.linkedin.com/in/swapnadeep-roy-6b5867379" },
      { name: "R. Abhileshwaran", img: "/team/R.Abhileshwaran.webp", linkedin: "https://www.linkedin.com/in/abhileshwaran-r-3432ab36a" },
      { name: "Srimedha Aswatham", img: "/team/Srimedha Aswatham.webp", linkedin: "https://www.linkedin.com/in/srimedha-aswatham-a3a09436a" },
      { name: "Namaswi Vajjala", img: "/team/Namaswi Vajjala.webp", linkedin: "https://www.linkedin.com/in/namaswi-vajjala-362a22381" },
      { name: "Shriyansh Chawda", img: "/team/Shriyansh.webp", linkedin: "https://www.linkedin.com/in/shriyansh-chawda-362a22381" },
      { name: "Gopikavani M", img: "/team/Gopikavani M.webp", linkedin: "https://www.linkedin.com/in/gopikavani-mohan-429363381" },
      { name: "Divyansh Maheshwari", img: "/team/Divyansh Maheshwari.webp", linkedin: "https://www.linkedin.com/in/divyansh-maheshwari-6901b63a5" },
      { name: "Nishkarsh Pahuja", img: "/team/Nishkarsh Pahuja.webp", linkedin: "https://www.linkedin.com/in/nishkarsh-pahuja-6a9420210" },
      { name: "Tejashwi", img: "/team/Tejashwi.webp", linkedin: "https://www.linkedin.com/in/tejashwi-sabbati-5b630236a" },
    ],
  },
  {
    name: "Operations",
    desc: "The backbone of E-Cell, ensuring smooth execution of all events and activities. From logistics coordination to resource management, the team keeps everything running seamlessly behind the scenes.",
    members: [
      { name: "Sai Nishanth", img: "/team/Sai Nishanth.webp", linkedin: "https://www.linkedin.com/in/sai-nishanth-bacchu" },
      { name: "Vishal Yalavarti", img: "/team/Vishal Yalavarthi.webp", linkedin: "https://www.linkedin.com/in/vishal-yalavarti-7bb865383" },
      { name: "Abinav Reddy", img: "/team/Abinav Reddy.webp", linkedin: "https://www.linkedin.com/in/abinav-reddy-997809377" },
      { name: "Pratik Agarwal", img: "/team/Pratik Agarwal.webp", linkedin: "https://www.linkedin.com/in/pratik-agarwal-a0b790366" },
      { name: "Unnathi Garige", img: "/team/Unnathi Garige.webp", linkedin: "https://www.linkedin.com/in/unnathi-garige-23bb07380" },
      { name: "S Ramcharan", img: "/team/S Ramcharan.webp", linkedin: "https://www.linkedin.com/in/ramcharan-s-24b437377" },
      { name: "J R Gokul Aadarsh", img: "/team/J R Gokul Aadarsh.webp", linkedin: "https://www.linkedin.com/in/dhamlol" },
      { name: "Arpit Khemka", img: "/team/Arpit Khemka.webp", linkedin: "https://www.linkedin.com/in/arpit-khemka-90679a248" },
      { name: "Uttej K", img: "/team/Uttej K.webp", linkedin: "https://www.linkedin.com/in/utterj-k-34a5b837a" },
      { name: "Burra Suhas", img: "/team/Burra Suhas.webp", linkedin: "https://www.linkedin.com/in/burra-suhas-31a5b837a" },
    ],
  },
  {
    name: "PR & Networking",
    desc: "Building bridges within the entrepreneurial ecosystem. Our PR & Networking team establishes valuable connections, manages external relations, and creates opportunities for meaningful collaborations.",
    members: [
      { name: "Jaithri Malladi", img: "/team/Jaithri Malladi.webp", linkedin: "https://www.linkedin.com/in/jaithri-malladi-81642137a" },
      { name: "Lavudi Pavani Chouhan", img: "/team/Lavudi Pavani Chouhan.webp", linkedin: "https://www.linkedin.com/in/lavudi-pavani-chouhan-07b926380" },
      { name: "Anurag Vanolkar", img: "/team/Anurag Vanolkar.webp", linkedin: "https://www.linkedin.com/in/anurag-vanolkar-641a12380" },
      { name: "Vaishnav Chandra B", img: "/team/Vaishnav Chandra B.webp", linkedin: "https://www.linkedin.com/in/vaishnav-chandra-b-574811275" },
      { name: "Neel Sanghvi", img: "/team/Neel Sanghvi.webp", linkedin: "https://www.linkedin.com/in/neel-sanghvi-69b33b258" },
      { name: "A. Srinidhi", img: "/team/Srinidhi A.webp", linkedin: "https://www.linkedin.com/in/srinidhi-asokan-147005378" },
      { name: "Abhinav Sheerraj", img: "/team/Abhinav Sheerraj.webp", linkedin: "https://www.linkedin.com/in/abhinav-sheerraj-3223b9380" },
      { name: "Harichandana Varanasi", img: "/team/Harichandana V.webp", linkedin: "https://www.linkedin.com/in/harichandana-varanasi-28a066381" },
      { name: "Prasad", img: "/team/Prasad.webp", linkedin: "https://www.linkedin.com/in/prasad-pandule-2002aa369" },
      { name: "Abhinav Rahi", img: "/team/Abhinav Rahi.webp", linkedin: "https://www.linkedin.com/in/abhinav-rahi-34a5b837a" },
      { name: "Mokshith", img: "/team/Mokshith.webp", linkedin: "https://www.linkedin.com/in/mokshith-34a5b837a" },
    ],
  },
  {
    name: "Startup Partnerships & Outreach",
    desc: "Connecting E-Cell with the startup ecosystem. This team forges partnerships with founders, investors, and organizations to create meaningful opportunities for the IITH entrepreneurial community.",
    members: [
      { name: "Jayesh Chaudhary", img: "/team/Jayesh Chaudhary.webp", linkedin: "https://www.linkedin.com/in/jayesh-chaudhary-25699337a" },
      { name: "Rishabh Dixit", img: "/team/Rishabh Dixit.webp", linkedin: "https://www.linkedin.com/in/rishabh-dixit-230358400" },
      { name: "Somya Poddar", img: "/team/Somya Poddar.webp", linkedin: "https://www.linkedin.com/in/somya-poddar-2706ba383" },
      { name: "Saurav Arya", img: "/team/Saurav Arya.webp", linkedin: "https://www.linkedin.com/in/saurav-arya-9a7674381" },
      { name: "Sri Hansitha", img: "/team/Sri Hansitha.webp", linkedin: "https://www.linkedin.com/in/sri-hansitha-akkabathula-6a6647379" },
      { name: "Raghuveer Surpur", img: "/team/Raghuveer Surpur.webp", linkedin: "https://www.linkedin.com/in/raghuveer-surpur-863029375" },
      { name: "Kaushal Tope", img: "/team/Kaushal Tope.webp", linkedin: "https://www.linkedin.com/in/kaushal-tope-60600137b" },
      { name: "Neeraj", img: "/team/Neeraj.webp", linkedin: "https://www.linkedin.com/in/arepalli-neeraj-reddy-a449983b4" },
      { name: "Somashree Maji", img: "/team/Somashree Maji.webp", linkedin: "https://www.linkedin.com/in/somashree-maji-07bb0436b" },
      { name: "Artagnan Singh", img: "/team/Artagnan Singh.webp", linkedin: "https://www.linkedin.com/in/artagnan-singh-205582274" },
      { name: "Polisetti Likhit Sai", img: "/team/Polisetti Likhit Sai.webp", linkedin: "https://www.linkedin.com/in/polisetti-likhit-sai-5a5504264" },
      { name: "Harshit Munjal", img: "/team/Harshit Munjal.webp", linkedin: "https://www.linkedin.com/in/harshit-munjal-1188b8368" },
    ],
  },
  {
    name: "Web",
    desc: "Building and maintaining E-Cell's digital presence. The web team creates innovative platforms, manages the online ecosystem, and develops cutting-edge solutions for the community.",
    members: [
      { name: "Pritam Bagle", img: "/team/Pritam Bagle.webp", linkedin: "https://www.linkedin.com/in/pritam-bagle-66a9b5369" },
      { name: "V Madhu Srujan Sarvajith", img: "/team/Madhu.webp", linkedin: "https://www.linkedin.com/in/v-madhu-srujan-sarvajith-6a6647379" },
      { name: "Shourya", img: "/team/Shourya.webp", linkedin: "https://www.linkedin.com/in/uddeep-sri-shourya-dandu-71017a3ba" },
    ],
  },
];

// Flat list of all members for the marquee
export const ALL_MEMBERS: Member[] = [
  OC_HEAD,
  OC_VICE,
  ...DOMAIN_HEADS.flatMap((d) => d.members),
  ...DEPARTMENTS.flatMap((d) => d.members),
];