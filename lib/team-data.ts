// lib/team-data.ts
// All image paths use .webp format (converted from .jpg/.png)

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
  name: "Amogh Bindal",
  role: "Overall Head",
  img: "/api/media/file/Head E-Cell IITH (Amogh Bindal).webp",
  email: "head.ecell@campus.iith.ac.in",
  linkedin: "https://www.linkedin.com/in/amogh-bindal/",
};

export const OC_VICE: Member = {
  name: "Vedant Gupta",
  role: "Vice Overall Coordinator",
  img: "/api/media/file/Vedant Gupta.webp",
  email: "ce23btech11059@iith.ac.in",
  linkedin: "https://www.linkedin.com/in/vedant-gupta-698b07165/",
};

export const DOMAIN_HEADS: DomainHead[] = [
  {
    label: "IDEATION",
    members: [
      {
        name: "Deekshith Patel",
        img: "/api/media/file/B U Deekshith Patel.webp",
        email: "ai23btech11003@iith.ac.in",
        linkedin: "https://in.linkedin.com/in/deekshith-patel-28219a269",
      },
      {
        name: "Chavan Rushikesh",
        img: "/api/media/file/Chavan Rushikesh.webp",
        email: "ms23btech11009@iith.ac.in",
        linkedin: "https://www.linkedin.com/in/rushikesh-chavan-88a4a9317/",
      },
    ],
  },
  {
    label: "CRF",
    members: [
      {
        name: "Shikhar Kansal",
        img: "/api/media/file/Shikhar Kansal.webp",
        email: "ms23btech11024@iith.ac.in",
        linkedin: "https://www.linkedin.com/in/shikhar-kansal-a6b42028b",
      },
    ],
  },
  {
    label: "OPS",
    members: [
      {
        name: "Rohin Rajagopal",
        img: "/api/media/file/Rohin.webp",
        email: "ecell@campus.iith.ac.in",
        linkedin: "https://www.linkedin.com/in/rohin-rajagopal-350a152b5",
      },
      {
        name: "Abhishek Godiyal",
        img: "/api/media/file/Abhishek Godiyal.webp",
        email: "ms23btech11002@iith.ac.in",
        linkedin: "https://linkedin.com/in/abhishek-godiyal-2144182a9",
      },
    ],
  },
  {
    label: "PRN",
    members: [
      {
        name: "Yashovardhan Mukerji",
        img: "/api/media/file/Yashovardhan Mukerji.webp",
        email: "ms23btech11035@iith.ac.in",
        linkedin: "https://www.linkedin.com/in/yashovardhan-mukerji-15271b28b",
      },
      {
        name: "Nakul Patole",
        img: "/api/media/file/Patole Nakul Bhausaheb.webp",
        email: "ch23btech11031@iith.ac.in",
        linkedin: "https://www.linkedin.com/in/nakul-patole-a72b69300",
      },
    ],
  },
  {
    label: "EVENTS",
    members: [
      {
        name: "Maharshi Gaddam",
        img: "/api/media/file/Maharshi.webp",
        email: "em24mtech14007@iith.ac.in",
        linkedin: "https://www.linkedin.com/in/maharshi-gaddam",
      },
    ],
  },
  {
    label: "WEB",
    members: [
      {
        name: "Ganeswar Velvadapu",
        img: "/api/media/file/ganeswarv.webp",
        email: "ms23btech11034@iith.ac.in",
        linkedin: "https://www.linkedin.com/in/ganeswar-velvadapu/",
      },
    ],
  },
];

export const DEPARTMENTS: Department[] = [
  {
    name: "Operations",
    desc: "The backbone of E-Cell, ensuring smooth execution of all events and activities. From logistics coordination to resource management, the team keeps everything running seamlessly behind the scenes.",
    members: [
      { name: "Bhavik Dhabaliya", img: "/api/media/file/Bhavik Dhabaliya.webp" },
      { name: "Krish Agarwal", img: "/api/media/file/Krish Agarwal.webp" },
      { name: "Anushka Gupta", img: "/api/media/file/Anushka Gupta.webp" },
      { name: "Aditya Singh Tomar", img: "/api/media/file/Aditya Singh Tomar.webp" },
      { name: "Srijith Sai Kurelli", img: "/api/media/file/Srijith Sai Kurelli.webp" },
      { name: "Srihith Sai Kurelli", img: "/api/media/file/Srihith Kurelli - Srihith Sai Kurelli.webp" },
      { name: "Mohit Choudhary", img: "/api/media/file/Mohit Choudhary.webp" },
      { name: "Ashani Sawant", img: "/api/media/file/Sawant Ashani Sanjay.webp" },
      { name: "Aashay Somkuwar", img: "/api/media/file/Aashay Somkuwar.webp" },
      { name: "Sagar Kumar", img: "/api/media/file/Sagar Kumar.webp" },
    ],
  },
  {
    name: "Corporate Relations & Finance",
    desc: "Managing partnerships and financial strategies that fuel E-Cell's mission. This team secures corporate collaborations, handles financial planning, and ensures sustainable growth.",
    members: [
      { name: "Shinju Shaji", img: "/api/media/file/Shinju Shaji.webp" },
      { name: "Vivaswan Rai", img: "/api/media/file/Vivaswan Rai.webp" },
      { name: "Aadarsh Patidar", img: "/api/media/file/Aadarsh Patidar.webp" },
      { name: "Yashwant Malviya", img: "/api/media/file/Yashwant Malviya.webp" },
      { name: "Pratyush Prakash", img: "/api/media/file/Pratyush Prakash.webp" },
    ],
  },
  {
    name: "Ideation",
    desc: "The creative powerhouse generating innovative concepts and solutions. This team brainstorms new initiatives, develops strategic ideas, and transforms vision into actionable plans.",
    members: [
      { name: "Sreekari", img: "/api/media/file/Pendem Sreekari.webp" },
      { name: "Abhinav Raj", img: "/api/media/file/Abhinav Raj.webp" },
      { name: "Navya Popuri", img: "/api/media/file/Navya Popuri.webp" },
      { name: "Ayesha Parveen", img: "/api/media/file/IMG_20250611_170713 - Ayesha Parveen.webp" },
      { name: "Bhavana Kasula", img: "/api/media/file/IMG_20250610_145246 - Kasula Sree Lakshmi Bhavana.webp" },
      { name: "Prabhat Anand", img: "/api/media/file/Prabhat Anand.webp" },
      { name: "Shivram S", img: "/api/media/file/Shivram S.webp" },
      { name: "Manognya Kundarapu", img: "/api/media/file/Kundarapu Manognya.webp" },
    ],
  },
  {
    name: "Web",
    desc: "Building and maintaining E-Cell's digital presence. The web team creates innovative platforms, manages the online ecosystem, and develops cutting-edge solutions for the community.",
    members: [
      { name: "Kashyap Nukala", img: "/api/media/file/Kashyap Nukala.webp" },
      { name: "M. Jagadeesh", img: "/api/media/file/Merugumala Jagadeesh.webp" },
      { name: "Guddeti Sreeteja", img: "/api/media/file/sreeteja.webp" },
    ],
  },
  {
    name: "PR & Networking",
    desc: "Building bridges within the entrepreneurial ecosystem. Our PR & Networking team establishes valuable connections, manages external relations, and creates opportunities for meaningful collaborations.",
    members: [
      { name: "Abhinav Girish", img: "/api/media/file/Abhinav Girish-1.webp" },
      { name: "Abhinaba Das", img: "/api/media/file/Abhinaba Das.webp" },
      { name: "G L Gayathri", img: "/api/media/file/Gundlapalli Lakshmi Gayathri.webp" },
      { name: "Abhijeet Kumar", img: "/api/media/file/Abhijeet Kumar.webp" },
      { name: "Subhadeep Mondal", img: "/api/media/file/Subhadeep Mondal.webp" },
      { name: "Ishaan Tushir", img: "/api/media/file/Ishaan Tushir.webp" },
      { name: "Jeffin Steve", img: "/api/media/file/Jeffin STEVE.webp" },
      { name: "Spoorthi Yellamanchali", img: "/api/media/file/Yellamanchali Tina Naga Spoorthi.webp" },
      { name: "Adhyayan Chowdhary", img: "/api/media/file/Adhyayan Chowdhary.webp" },
      { name: "Ankit Jyani", img: "/api/media/file/Ankit Ankit.webp" },
    ],
  },
  {
    name: "Events & Competitions",
    desc: "Ideating, planning, and executing flagship events that foster entrepreneurial spirit. Designing engaging experiences and creating platforms for students to learn, showcase, and compete.",
    members: [
      { name: "Syed Imam Ali", img: "/api/media/file/Syed_Imam.webp" },
      { name: "Kishore C", img: "/api/media/file/Kishore C.webp" },
      { name: "Balusu Bhanu Prakash", img: "/api/media/file/Balusu Bhanu Prakash.webp" },
      { name: "Purna Nanda Reddy", img: "/api/media/file/Chinthapally Purna Nanda Reddy.webp" },
      { name: "Deepali Mondal", img: "/api/media/file/Deepali Mondal.webp" },
      { name: "Tejas Kamale", img: "/api/media/file/Tejas Kamale.webp" },
      { name: "Varad Gadekar", img: "/api/media/file/Gadekar Varad Sandeep.webp" },
      { name: "Katta Sravya", img: "/api/media/file/Katta Sravya.webp" },
    ],
  },
  {
    name: "Design & Multimedia",
    desc: "Amplifying E-Cell's voice across all platforms. Creating engaging content that ensures our message reaches aspiring entrepreneurs everywhere.",
    members: [
      { name: "Neel Patel", img: "/api/media/file/WhatsApp Image 2025-08-19 at 8.23.21 PM.webp" },
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