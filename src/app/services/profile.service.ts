import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  
  about2 = ["Software Developer with 2.0+ years of experience",
  "Worked with Software Development Life Cycle(SDLC) and agile methodologies",
  "Expertise in Angular 2+ All versions, React, Javascript,  Node JS and UI with Responsive Designs",
 " Have good understanding of Harness,DevOps, Jquery, Bootstrap, MongoDB, Firebase, and MYSQL"]

  about = "A Techie who initially wanted to escape from Data Structure but now getting dirty in the Alogrithms of structures XD"
  resumeUrl = "#"

  exprienceData: any = [
    
    {
      id: 1,
      company: 'Infosys Limited',
      location: 'Chandigarh',
      timeline: 'November 2022 - Present',
      role: 'System Engineer',
      subrole: 'Full Stack Developer',
      work: [
        {
        id:1,
        timeline:'July 2024 – Present',
        subrole:'Full Stack Developer',
        jd:[ "Designing and implementing micro-frontend using Angular and Go-Lang to efficiently fetching the customized based person according to client requirement.",
         "Collaborating with cross-functional teams to analyze data requirements and optimize pipeline performance for enhanced data processing efficiency"]
      },
      {

        id:2,
        timeline:'Dec 2023 – June 2024',
        subrole:'DevSecOps Engineer',
        jd:[ "Designed and implemented a CI/CD pipeline using Harness, streamlining the Salesforce development lifecycle.",
          "Defined stages for code building, testing, and deployment, ensuring efficient and consistent delivery",
        "Successfully migrated existing sfdx commands to the new SF commands, adapting to evolving Salesforce tools.",
      "Ensured compatibility with the latest Salesforce features and functionalities"]
      },
      {

        id:3,
        timeline:'Nov 2022 – Nov 2023',
        subrole:'Full Stack Developer',
        jd:[ "Crafted a user-friendly and intuitive UI using React, ensuring a seamless user experience.",
          "Developed a single-page UI with dynamic components utilizing React best practices",
        "Leveraged Bootstrap to achieve responsive design and consistent styling across different devices.",
      "Designed and implemented RESTful APIs using HTTP protocols for seamless communication between the React front-end and the Java backend",
      "Showcased full-stack development skills by implementing CRUD operations within the backend."
  ]
      },
    ]
  ,
  
    },


  ]

  extraCircularInfo: any = [
    {
      id:1,
      title: 'REACT',
      description: '',
      img: 'assets/images/reactC.png',
      url: 'https://www.hackerrank.com/certificates/7fa1d3eef355'
    },
    {
      id:2,
      title: 'HARNESS CI DEVELOPER',
      description: '',
      img: 'assets/images/harnessCID.png',
      url: 'https://www.credly.com/badges/897a2456-93f5-48bf-98a9-39248db2ee87/public_url'
    },
    {
      id:3,
      title: 'HARNESS CD DEVELOPER',
      description: '',
      img: 'assets/images/harnessCDD.png',
      url: 'https://www.credly.com/badges/79568e60-9b0a-4259-a978-4c6d64ab3f96/public_url'
    },
    {
      id:4,
      title: 'HARNESS CI ARCHITECT',
      description: '',
      img: 'assets/images/harnessCIA.png',
      url: 'https://www.credly.com/badges/1f2e9492-90e0-4975-b36d-15071d671992/public_url'
    },
    {
      id:5,
      title: 'GITHUB ACTION',
      description: '',
      img: 'assets/images/mehul_freelancing.png',
      url: 'https://www.upwork.com/freelancers/~016d6f497a5629df4b'
    },
    {
      id:6,
      title: 'JAVA DEVELOPER',
      description: '',
      img: 'assets/images/javaC.png',
      url: 'https://www.hackerrank.com/certificates/ca961269782a'
    },
    {
      id:7,
      title: 'JAVASCRIPT',
      description: '',
      img: 'assets/images/javascriptC.png',
      url: 'https://www.hackerrank.com/certificates/a352c004971e'
    },

  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }



  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}