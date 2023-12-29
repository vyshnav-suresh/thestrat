import Layout from "@/components/Layout";
import Singleblock from "@/components/common/Singleblock";
import Table from "@/components/common/Table";
import Twoblock from "@/components/common/Twoblock";
import { certificate } from "@/data/certifications";
import Image from "next/image";
import React from "react";

const dataanalytics = () => {
  return (
    <Layout>
      <div className="h-[200px] w-full bg-main_dark flex justify-center items-center mt-[-30px] ">
        <p className="absolute text-5xl font-bold text-white font-NunitoSans-Bold">SERVICES</p>
        <Image
          height={234}
          width={1500}
          src="/about.jpg"
          alt="fds"
          className="h-[200px] object-cover  w-full opacity-45"
        />
      </div>
      <Twoblock 
      img='/INFOGRAPHIC5.png' 
      para=' We implement the following solutions: Customer Analytics Marketing
            Analytics Sales Analytics Performance Analytics HR Analytics
            Ecommerce Analytics Outsourced Data Analysis Data Visualization.'
      title='DATA ANALYTICS & VISUALIZATIONS
'
       />
       <Singleblock 
       
       para='We work as spreadsheet consultants for business creating reports, Excel dashboards tools for data analysis to automate processes which can save your valuable time As spreadsheet consultants, we are focus more on Automation, Reporting, Business Intelligence, Data Visualization, Macros and Dash Boards. We also offer a comprehensive remote service to help with all your spreadsheet problems and queries, whether you need assistance from a VBA developer or wish to design a brand-new system and find out more about what Excel can do for you.
'

       title='SPREADSHEET CONSULTING'

       />
      <Twoblock 
      para='We offer financial modeling as part of our commitment to providing a full range of financial support services. We work with our clients to customize the model to your needs.'
        img='/Financial_Analytics.png'
        title='FINANCIAL ANALYTICS AND MODEL BUILDING'
      />
      <Table title='OUR FLAGSHIP PROGRAMS' table={certificate}/>
      <Twoblock 
      para='We work with Companies, Management Institutes and individuals who need effective training at unique & affordable pricing. We provide a tailored training session for corporate clients as per their need.'
        img='/IndustryOrientedTraining.png'
        title='INDUSTRY ORIENTED TRAINING'
      />
      <Singleblock 
       
       para='With this initiative, we aim to partner you in your quest to provide practical knowledge and insights to your students on the rapidly evolving and dynamic Market. We are keen to collaborate with your department for adding substantial value to your student’s placement.

Strategist helps your institution foster the qualities of academic brilliance and career readiness in your students by providing comprehensive, industry-oriented professional learning solutions and acts as the single, most reliable avenue for all your skill-development needs.
'

       title='MICROSOFT CERTIFICATIONS
'

       />
    <div className="pl-[10%] pr-[10%]  ">
        <p className="font-bold text-[32px] font-NunitoSans-Bold" >Why should you attain Excel Certification</p>
        <ul style={{'list-style-type':'circle'}}>
            <li>Microsoft office certification gives you the tools to build a brighter future</li>
            <li>Achieve Industry-recognized certification</li>
            <li>Learn corporate excel skills</li>
            <li>Boost your resume by attaching badge from Microsoft</li>
            <li>Differentiate from other applicants</li>
            <li>Validation of knowledge and skill</li>
            <li>Heighten students earning potential</li>
        </ul>
    </div>   

    </Layout>
  );
};

export default dataanalytics;
