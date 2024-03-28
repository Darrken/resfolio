import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <article>
      <section>
        <h1>Hi! I'm Ken.</h1>

        <p>
          With over 25 years of experience as a full-stack developer, I have
          accumulated a wealth of knowledge working on everything from small
          websites to large-scale applications. I particularly enjoy creating
          accessible and responsive websites using CSS and React.js. I am
          passionate about bringing pixel-perfect designs to users that look and
          feel great on all devices.
        </p>
        <p>
          Over the past few years, I have had the privilege of mentoring and
          guiding other developers in their career journeys. It has been a
          rewarding experience to witness their growth and development.
        </p>
      </section>

      <section>
        <h2>Education</h2>

        <p>
          1999 Bachelor of Science in Computer Science,{" "}
          <a href="https://www.weber.edu/" target="_blank">
            Weber State University
          </a>
          , Utah
        </p>
      </section>

      <section>
        <h2>Work History and Skills</h2>

        <div>
          <h3>Willis Towers Watson</h3>
          <h4>Associate Director - IT Systems & Architecture</h4>
          <div className="timespan">March 2016 – Current</div>
          <strong>Skills</strong>
          <ul>
            <li>React.js</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>styled-components</li>
            <li>WCAG Standards</li>
            <li>Micro Front-End Architecture</li>
            <li>C#</li>
            <li>Cosmos DB</li>
            <li>SQL</li>
            <li>Github Actions</li>
            <li>Terraform</li>
          </ul>
          <div>
            Worked with UX team to create a React.js component library to ensure
            consistency across multiple web applications. This library was
            across our division by multiple teams, and helped to reduce the time
            needed to create new MFEs. Served on the Architecture Team to help
            define best practices and patterns for the development teams to
            follow. Simultaneously worked as Tech Lead on a development team,
            where I helped to mentor and guide the other engineers.
          </div>
        </div>

        <div>
          <h3>Aviacode</h3>
          <h4>Senior UX Engineer</h4>
          <div className="timespan">April 2013 – Feb 2016</div>
          <strong>Skills</strong>
          <ul>
            <li>HTML</li>
            <li>Angular.js</li>
            <li>CSS</li>
            <li>LESS</li>
            <li>C#</li>
            <li>Raven DB</li>
          </ul>
          <div>
            Primarily responsible for selecting, developing, and maintaining the
            technologies used for our front ends. This included Bootstrap and
            FontAwesome libraries, Angular directives, LESS/CSS structure and
            utilization. While my primary role was that of a UX engineer, I also
            worked on all levels of the development stack including RavenDB, C#,
            and Google Charts. Additionally, I had the opportunity to develop a
            separate application on my own: a website that assisted physicians
            in transitioning their medical coding systems from ICD-9 to ICD-10.
            The site was active for a few months during the industry coding
            change in 2015 and generated over $150k of revenue for Aviacode.
          </div>
        </div>

        <div>
          <h3>GoldStandard / Elsevier</h3>
          <h4>Principal Software Engineer</h4>
          <div className="timespan">2006 - April 2013</div>
          <strong>Skills</strong>
          <ul>
            <li>C++</li>
            <li>C#</li>
            <li>.NET MVC</li>
            <li>ASP.NET</li>
            <li>SQL</li>
          </ul>
          <div>
            <p>
              Developed pharmaceutical and drug information applications which
              were used in hospitals and pharmacies throughout the country (CVS
              and Walgreens, for example). The primary product was a
              cross-platform API written in C++ that utilized SOAP-based Web
              Services to deliver drug data. We designed the engine for speed
              and efficiency, and it was capable of processing hundreds of drugs
              and calculating their interactions in seconds.
            </p>
            <p>
              Wrote and maintained several different editorial tools used by
              on-staff pharmacists to enter the drug information. Systems were
              written with extensive auditing and workflow constraints to ensure
              correct data. Written in a variety of languages, from Windows
              Forms with C#, to MVC3 web applications.
            </p>
            <p>
              Served as Team Lead for a team of four other developers on these
              projects. Responsible for designing the projects with the business
              stakeholders as well as managing the tasks and assisting in their
              development.
            </p>
          </div>
        </div>

        <div>
          <h3>Atmedica</h3>
          <h4>Developer Analyst</h4>
          <div className="timespan">2002 - 2006</div>
          <strong>Skills</strong>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>jQuery</li>
            <li>C#</li>
            <li>SQL</li>
            <li>ASP.NET</li>
          </ul>
          <div>
            Created websites and XML content delivery systems for health care
            companies utilizing .NET webservices. Served as Team Lead for
            several client projects, managing small teams of developers.
            Agile/SCRUMM methodologies extensively used.
          </div>
        </div>

        <div>
          <h3>KnowledgeTrack</h3>
          <h4>Programmer</h4>
          <div className="timespan">2000 - 2001</div>
          <strong>Skills</strong>
          <ul>
            <li>HTML</li>
            <li>Visual Basic</li>
            <li>InstallShield</li>
          </ul>
          <div>
            Worked on an intranet portal product, customizing the application
            for various companies. This included a financial project management
            tool for SAIC (Air Force contractor). This financial piece tracked
            and handled millions of dollars of project funds. Wrote
            InstallShield scripts, technical documentation, and made regular
            builds of the software for distribution.
          </div>
        </div>

        <div>
          <h3>MarketStar</h3>
          <h4>Systems Analyst II</h4>
          <div className="timespan">2000</div>
          <strong>Skills</strong>
          <ul>
            <li>HTML</li>
            <li>Visual Basic</li>
            <li>SQL</li>
          </ul>
          <div>
            Developed intranet web applications consisting of call reports,
            timecards, and extensive reporting applications for major companies
            such as APC and Sony.
          </div>
        </div>

        <div>
          <h3>Microsoft / Access Software</h3>
          <h4>Web Design Engineer</h4>
          <div className="timespan">1997 - 2000</div>
          <strong>Skills</strong>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Perl</li>
          </ul>
          <div>
            Designed and constructed web sites for computer game company,
            including chat areas, customer service pages, marketing pages for
            products, online ordering, etc.
          </div>
        </div>
      </section>

      <section>
        <h2>Freelance Work</h2>

        <div>
          <h3>
            <a href="https://www.thecpsgroup.com/" target="_blank">
              Creative Publishing Solutions
            </a>
          </h3>
          <div className="timespan">2005 - 2015</div>
          <strong>Skills</strong>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>jQuery</li>
            <li>.NET MVC</li>
            <li>SQL</li>
          </ul>
          <div>
            <p>
              Developed a robust CMS and internal sales website for a company
              that provided malls all over the US with store posters, banners,
              and other print displays. The site, written using MVC3 and Entity
              Framework, allowed the company to design and create their print
              products online in real-time. Their users could then log in,
              customize, and order those products. Afterward the staff approved
              further design proofs through a custom workflow system. The site
              garnered great success for this local company.
            </p>
          </div>
        </div>

        <ul>
          <li>
            <a href="https://ustranslation.com/">U.S. Translation Company</a>
            <div className="timespan">2008 - 2010</div>
          </li>
          <li>
            <a href="https://web.clearplay.com/">ClearPlay</a>
            <div className="timespan">2007</div>
          </li>
          <li>
            <a href="https://www.dentrix.com/">Dentrix</a>
            <div className="timespan">2006</div>
          </li>
          <li>
            <a href="https://www.getawaytoday.com/">GetAwayToday Travel</a>
            <div className="timespan">2005 - 2006</div>
          </li>
          <li>
            Total Health & Fitness<div className="timespan">2005</div>
          </li>
        </ul>
      </section>

      <h2>Contact Me</h2>

      <p>You can reach me at <a href="mailto:me@kenjamesadams.com">me@kenjamesadams.com</a></p>
    </article>
  );
}

export default App;
