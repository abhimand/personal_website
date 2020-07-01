import eerc from '/Users/abhi.mand/Documents/ProgrammingProjects/personal_website/src/images/careerImages/eerc.jpg'
import deloitte from '/Users/abhi.mand/Documents/ProgrammingProjects/personal_website/src/images/careerImages/deloitte.jpg'
import tamiu from '/Users/abhi.mand/Documents/ProgrammingProjects/personal_website/src/images/careerImages/tamiu.jpg'
import uhs from '/Users/abhi.mand/Documents/ProgrammingProjects/personal_website/src/images/careerImages/uhs.jpg'
import fujitsu from '/Users/abhi.mand/Documents/ProgrammingProjects/personal_website/src/images/careerImages/fujitsu.jpg'

const careerPosts = [
    {
      title: 'Deloitte',
      position: 'Analyst - Full-Time',
      date: 'January 2021',
      location: 'Dallas, TX',
      description: 'I will be joining as a Cyber Risk analyst in the Risk and Financial Advisory division of Deloitte' ,
      image: deloitte,
    },
    {
      title: 'Fujitsu',
      position: 'Software Engineer - Internship',
      date: 'June 2019 - August 2019',
      location: 'Richardson, TX',
      description: 'I worked here as the Software Strategic Planner within the Corporate Planning Team of Fujitsu Network Communications Inc. I developed a "Smart Parking" web application in React and Material-UI that displays the metrics and status of parking area. The back-end of this web app was using Node.js and MySQL for data analytics fed from a camera. This was done under the 5G Era Project Initiative and in collaboration with 3rd Party vendors including Microsoft.',
      image: fujitsu,
    },
    {
      title: 'Mobile and Pervasive Computing Group',
      position: 'Researcher - Internship',
      date: 'May 2018 - August 2018',
      location: 'Austin, TX',
      description: 'I worked with Dr. Christin Julien and a team of undergraduates on the Child Independent Mobility (CIM) project. CIM was meant to allow children to have freedom while having their parents or guardians to monitor them from a distance by use of IoT called Nordic Thingys. I created an Android app with Java that utilizes Bluetooth APIs to track the Nordic Thingys. The app also employed a Neighborhood Discovery Protocal developed by the MPC using Bluetooth Low Energy (BLEnd) for efficient power consumption.',
      image: eerc,
    },
    {
      title: 'TAMIU',
      position: 'Researcher - Internship',
      date: 'May 2017 - August 2017',
      location: 'Laredo, TX',
      description: 'I worked with Dr. Deepak Ganta and his team on optoelectronic technology with textiles. The goal was to create a super-capacitor clothing that is machine washable and wearable for daily use. We utilized photosensitive chemicals called PEDOT:PSS and Polypyrrole to encase various type of materials such as cotton or nylon.',
      image: tamiu,
    },
    // {
    //   title: 'United High School',
    //   position: 'Rank 9/1014',
    //   date: 'Class of 2016',
    //   location: 'Laredo, TX',
    //   description: 'I would like to think high school was the beginning of my career. I explored many career prospects and dabbled in several interests. I served as Vice-President in NHS, Vice-President in Model UN, Concertmaster in the Laredo Philharmonic Youth Orchestra, and several other organizations such as Robotics and Mariachi.',
    //   image: uhs,
    // },
  ];

export default careerPosts;