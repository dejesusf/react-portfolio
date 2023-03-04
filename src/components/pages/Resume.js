import React from 'react';

export default function Resume() {
  return (
    <main>
      <div className="row">
        <div className="column">
          <div className="top">
            <h1>RESUME</h1>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <div className="middle">
            {/* TODO: DOWNLOAD RESUME BUTTON/FILE */}
            <h4 className="g1-block">SKILLS</h4>
            <section>
              <p className="no-line-break"><strong>Programming languages</strong></p>
              <ul>
                <li>HTML</li>
                <li>CSS (including: Bootstrap)</li>
                <li>JavaScript</li>
                <li>Node.js (Express.js, Sequelize.js, React.js)</li>
                <li>SQL/NoSQL (Sequelize, MongoDB)</li>
              </ul>
            </section>
              
            <h4 className="g1-block">WORK EXPERIENCE</h4>
              <section>
                <p className="no-line-break"><strong>University of Washington Department of Laboratory Medicine & Pathology</strong></p>
                <p className="tab no-line-break">Central Laboratory: Specimen Processing Services </p>
                <p className="tab-tab">Clinical Laboratory Technician Lead (November 2022 - Present)</p>

                <p className="tab no-line-break">Harborview Medical Center: Specimen Processing Services</p>
                <p className="tab-tab no-line-break">Clinical Laboratory Technician Lead (October 2021 - November 2022)</p>
                <ul>
                  <li>Plans, organizes and assigns staff work assignments and communicates with supervisor concerning lab's operational status, training needs, personnel issues, and staff concerns</li>
                  <li>Perform all Clinical Laboratory Technician 1 and 2 tasks, as well as other duties required or assigned by supervisor or manager</li>
                  <li>Keeps laboratory staff informed regarding specimen and/or handling problems or procedural changes</li>
                  <li>Performs computer functions in LIS as required for completion of task and ensures that specimen processing runs smoothly during scheduled and unscheduled computer downtime</li>
                </ul>

                <p className="tab-tab no-line-break">Clinical Laboratory Technician I (April 2020 - October 2021)</p>
                <ul>
                  <li>Receive, prioritize, and sort specimens via pneumatic tube system and front window</li>
                  <li>Centrifuge and aliquot serum, plasma, and body fluids as necessary per Online Test Guide</li>
                  <li>Process timed or random urine and stool collections using the appropriate preservatives</li>
                  <li>Perform computer functions using Citrix, EPIC, Sunquest, and Smart Term to enter patient information, testing information, and print worksheets, reports, and other result inquiries</li>
                  <li>Prepare and send specimen for testing at reference laboratories via Delivery Express and FedEx</li>
                </ul>
              </section>

            <h4 className="g1-block">EDUCATION</h4>
              <section>
                <p className="no-line-break"><strong>University of Washington, EdX</strong></p>
                <p className="tab">Fullstack Web Development Certificate (December 2022 - March 2023)</p>
              </section>
              <section>
                <p className="no-line-break"><strong>Washington State University</strong></p>
                <p className="tab">Bachelor of Science in Biology (August 2011 - May 2015)</p>
              </section>
            
            <h4 className="g1-block">AWARDS</h4>
              <section>
                <p className="no-line-break"><strong>Best UI/UX and People's Choice Award: </strong><a href="https://github.com/dejesusf/anoma-drama-llama" target="_blank" rel="noopener noreferrer">Anoma Drama Llama</a> (February 2023)</p>
                <p className="tab"></p>
              </section>
          </div>
        </div>
      </div>
    </main>
  );
}
