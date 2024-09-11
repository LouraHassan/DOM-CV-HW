let img = document.getElementsByClassName("profile-img")[0];

let name1 = document.getElementsByTagName("h1")[0];
let name2 = document.getElementsByTagName("h1")[1];
let career1 = document.getElementsByClassName("career")[0];
let career2 = document.getElementsByClassName("career")[1];

function nameHoverOn() {
  name2.innerHTML = "<strong>Loura</strong> alfarsi";
  career2.textContent = "Frontend Developer";
}

function nameHoverOff() {
  name2.innerHTML = "<strong>Johnathan</strong> Reid";
  career2.textContent = "marketing manager";
}
let contactList = document.getElementsByClassName("contact-list")[0];
let education = document.getElementsByClassName("education-div-1")[0];
let skills = document.getElementsByClassName("skills-list")[0];
let languages = document.getElementsByClassName("languages-list")[0];
let sideDiv = document.getElementsByClassName("side-section")[0];

function sideHoverOn() {
  img.src = "formal-img.jpg";
  name1.innerHTML = "<strong>Loura</strong> alfarsi";
  career1.textContent = "Frontend Developer";
  contactList.innerHTML = ` <li>
    <span><i class="fa-solid fa-phone"></i> </span> +966 506-667-711
  </li>
  <li>
    <span><i class="fa-solid fa-envelope"></i> </span
    >Alfarsi.loura@gmail.com
  </li>
  <li>
    <span><i class="fa-solid fa-location-dot"></i> </span>1234 Ghurnatah, Riyadh, Saudi Arabia
  </li>
  <li>
  <a href="#">  <span><i class="fa-solid fa-globe"></i> </span> www.louraalfarsi.com</a>
  </li>`;
  education.innerHTML = ` <div class="sub-section-div">
  <p>2020-2024</p>
  <p><strong>Princess Nourah Bint Abdulrahman University
</strong></p>
  <ul>
    <li>BACHELOR OF INFORMATION TECHNOLOGY
    </li>
    <li>GPA: 4.6 / 5</li>
  </ul>
</div>`;
  skills.innerHTML = `<li>Java</li>
<li>Flutter</li>
<li>Dart</li>
<li>UI/UX</li>
<li>Oracle JET</li>
<li>HTML / CSS</li>
<li>Figma</li>`;
  languages.innerHTML = `  <li>English (Advanced)</li>
<li>Turkish (Intermediate)</li>`;
}

function sideHoverOff() {
  img.src = "profile-img1.jpg";
  name1.innerHTML = "<strong>Johnathan</strong> Reid";
  career1.textContent = "marketing manager";
  contactList.innerHTML = `  <li>
              <span><i class="fa-solid fa-phone"></i> </span> +966 544-876-144
            </li>
            <li>
              <span><i class="fa-solid fa-envelope"></i> </span
              >johnathan.reid@email.com
            </li>
            <li>
              <span><i class="fa-solid fa-location-dot"></i> </span>1234 King Abdulaziz Road, Riyadh, Saudi Arabia
            </li>
            <li>
            <a href="#">  <span><i class="fa-solid fa-globe"></i> </span> www.johnathanreid.com</a>
                </li>`;
  education.innerHTML = `<div class="sub-section-div">
              <p>2021-2023</p>
              <p><strong>Loren Brusque University</strong>
            </p>
              <ul>
                <li>Master of Business Management</li>
              </ul>
            </div>
            <div class="sub-section-div">
              <p>2015-2019</p>
              <p><strong>Loren Brusque University
            </strong></p>
              <ul>
                <li>Bachelor of Business Administration (BBA)
                </li>
                <li>GPA: 3.6 / 4</li>
              </ul>
            </div>`;
  skills.innerHTML = `  <li>Project Management</li>
            <li>Public Relations</li>
            <li>Teamwork</li>
            <li>Time Management</li>
            <li>Leadership</li>
            <li>Effective Communication</li>
            <li>Critical Thinking</li>`;
  languages.innerHTML = `  <li>English (Fluent)</li>
            <li>French (Fluent)</li>
            <li>German (Basics)</li>
            <li>Spanish (Intermediate)</li>`;
}

let profile = document.getElementsByClassName("summary")[0];
let work = document.getElementsByClassName("job-text")[0];
let reference = document.getElementsByClassName("reference")[0];

function profileHoverOn() {
  profile.innerHTML = `A highly motivated IT graduate with a passion for honing skills in network and application development. Adept at applying theoretical
knowledge to real-world scenarios, contributing to collaborative projects, and fostering a dynamic learning environment.
`;
  work.innerHTML = ` <div class="experience-div">
                <div class="job-div">
                  <p class="fw-bold">National Energy Services Company - Tarshid
                </p>
                  <p>Jan 2024 - Jul 2024</p>
                </div>
                <ul style="list-style: none">
                  <li>
                    <strong>Trainee Oracle PaaS Consultant
                    </strong>
                    <ul>
                      <li>
                       Worked with a team to develop the Goods Receipts Note
(GRN) application.
                      </li>
                      <li>
                     Supported business users for custom applications. 
                      </li>
                      <li>
                      Brief about the system: Allows suppliers to submit their
receipts and invoices, integrated with Oracle Procurement
and Oracle AB modules.

                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div class="experience-div">
                <div class="job-div">
                  <p class="fw-bold">Google Developer Student Clubs
                </p>
                  <p>2023 - 2023</p>
                </div>
                <ul style="list-style: none">
                  <li>
                    <strong>TRAINEE
                    </strong>
                    <ul>
                      <li>
                       I worked in designing and developing Flutter application for
the solution challenge 2023

                      </li>

                    </ul>
                  </li>
                </ul>
              </div>
              <div class="experience-div">
                <div class="job-div">
                  <p class="fw-bold">Google Developer Student Clubs at PNU

                </p>
                  <p>2015 - 2018</p>
                </div>
                <ul style="list-style: none">
                  <li>
                   <strong>TRAINEE
                </strong>
                    <ul>
                    
                      <li>I worked in designing and developing Flutter application for
the Flutter Hackathon</li>
                    </ul>
                  </li>
                </ul>
              </div>`;
  reference.innerHTML = `    <div class="reference-element">
              <h5>Noor Milhim
            </h5>
              <p>Tarshid / Senior Application Developer
            </p>
              <p>Phone: +966 545-3335-131
            </p>
              <p>Email: noor.milhim@tarshid.com</p>
            </div>`;
}

function profileHoverOff() {
    profile.innerHTML = ` A results-driven Marketing Manager with over 8 years of experience
            in developing and executing successful marketing strategies. Adept
            at leading cross-functional teams, managing multi-channel campaigns,
            and leveraging data-driven insights to enhance brand visibility and
            customer engagement. Seeking to apply my expertise in digital
            marketing, content creation, and market analysis to drive growth and
            innovation at [Company Name]. Passionate about crafting compelling
            brand narratives and fostering meaningful connections with target
            audiences.`;
    work.innerHTML = `  <div class="experience-div">
                <div class="job-div">
                  <p class="fw-bold">ABC Corporation, Riyadh, KSA
                </p>
                  <p>2020 - present</p>
                </div>
                <ul style="list-style: none">
                  <li>
                    <strong>Marketing Manager
                    </strong>
                    <ul>
                      <li>
                        Developed and implemented comprehensive digital
                        marketing strategies that increased web traffic by 35%
                        and boosted lead generation by 20%.
                      </li>
                      <li>
                        Managed and optimized marketing campaigns across social
                        media, email, and SEO, resulting in a 25% increase in
                        customer engagement.
                      </li>
                      <li>
                        Collaborated with cross-functional teams to launch
                        successful product campaigns, exceeding sales targets by
                        15%.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div class="experience-div">
                <div class="job-div">
                  <p class="fw-bold">XYZ Solutions, Dubai, UAE
                </p>
                  <p>2018 - 2020</p>
                </div>
                <ul style="list-style: none">
                  <li>
                    <strong>Senior Marketing Executive
                    </strong>
                    <ul>
                      <li>
                        Spearheaded marketing initiatives that expanded brand
                        reach in the Middle East and boosted market share by
                        10%.
                      </li>
                      <li>
                        Designed and executed multi-channel advertising
                        campaigns, resulting in a 30% improvement in conversion
                        rates.
                      </li>
                      <li>
                        Conducted market research and competitor analysis to
                        identify new opportunities, leading to the development
                        of new product lines.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="experience-div">
                <div class="job-div">
                  <p class="fw-bold">Global Ventures, Jeddah, KSA

                </p>
                  <p>2015 - 2018</p>
                </div>
                <ul style="list-style: none">
                  <li>
                   <strong>Marketing Coordinator
                </strong>
                    <ul>
                      <li>Coordinated and executed promotional events and trade shows, increasing brand visibility and customer acquisition by 12%.</li>
                      <li>Assisted in content creation for digital and print materials, contributing to a 20% increase in social media engagement.</li>
                    </ul>
                  </li>
                </ul>
              </div>`;
    reference.innerHTML = `  <div class="reference-element">
              <h5>John Doe
            </h5>
              <p>ABC Corporation / Marketing Director
            </p>
              <p>Phone: +966 543-3345-111
            </p>
              <p>Email: john.doe@example.com</p>
            </div>
            <div class="reference-element">
              <h5>Jane Smith
            </h5>
              <p>XYZ Solutions / Senior Marketing Manager

            </p>
              <p>Phone: +971 500-205-077</p>
              <p>Email: jane.smith@example.com

              </p>
            </div>`
}
