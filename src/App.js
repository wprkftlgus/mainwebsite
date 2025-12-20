import React, {useRef ,useState, useEffect, cloneElement } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './App.css';

function App() {
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [state, handleSubmit] = useForm("xwpaevyp");
  
  const home = useRef();
  const beyond = useRef();
  const tech = useRef();
  const experiences = useRef();
  const projects = useRef();
  const contact = useRef();

  const onSubmit = (e) => {
    e.preventDefault(); 
    if (!email) {
      alert("please put email");
      return;
    }
    if (!content) {
      alert("please put content");
      return;
    }
    
    if (state.succeeded) {
    alert("Thank you for joining!");
  } handleSubmit(e); 
  };

  function AnimationChildren({ children, threshold = 0.5}){
    const [visible, setVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting)
          setVisible(true);}, { threshold }
      );
      if (ref.current){observer.observe(ref.current);}
      return () => observer.disconnect();
    },[threshold]);
    return(
      <div ref={ref} className={visible ? children.props.className:"invisible"}>{children}</div>
    )
  }

  function AnimationClone({ children, threshold = 0.5}){
    const [visible, setVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting)
          setVisible(true);}, { threshold }
      );
      if (ref.current){observer.observe(ref.current);}
      return () => observer.disconnect();
    },[threshold]);
    return cloneElement(children, {ref, className: visible ? children.props.className : "invisible"})
  }

  function Animation({ children, threshold = 0.5}){
    const [visible, setVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting)
          setVisible(true);}, { threshold }
      );
      if (ref.current){observer.observe(ref.current);}
      return () => observer.disconnect();
    },[threshold]);
    return(
      <div ref={ref} className={visible ? children.props.className:""}></div>
    )
  }

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth"});
  }
  
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }

  return (
    <div ref={home}>
      <div className='blur'></div>
      <div className='top-menu'>
        <div className='top-menu-unit' onClick={() => scrollToTop()}>Home</div>
        <div className='top-menu-unit' onClick={() => scrollToSection(beyond)}>Beyond</div>
        <div className='top-menu-unit' onClick={() => scrollToSection(tech)}>Tech</div>
        <div className='top-menu-unit' onClick={() => scrollToSection(experiences)}>Experiences</div>
        <div className='top-menu-unit' onClick={() => scrollToSection(projects)}>Projects</div>
        <div className='top-menu-unit' onClick={() => scrollToSection(contact)}>Contact</div>
      </div>
        <div className='about-title' initial={{opacity: 0}}
        animate={{opacity:1}} transition={{duration: 1.4, delay: 0.3}}>
          <div className='about-bug'></div>
          <div className='flex-mynameandface'>
          <div className='holder-aboutme'>
          <div className='hi'>Hi, my name is</div>
          <div className='flex-mynameandme'>
          <div className='about-title-myname'>Jegal Sihyeon</div>
          <div className='me'><div className='hand'></div></div>
          </div>
          <div className='about-subtitle'>I’m now determined to grow as a 
          <div className='about-letter-fullstack'>Full-Stack</div>developer.  
I love building engaging and interactive web applications, and 
I'm eager to bring fresh ideas and technical skills to every project I take on.</div>
          </div>
          <div className='myface'></div>
          </div>
        </div>
        <div ref={beyond} className='about-sentence'>
        
        <div className='about-titleAndLine-beyond'>
        <div className='line'></div>
        <div className='about-title-line1'>&lt;</div>
        <div className='about-title-beyond'>Beyond Code</div>
        <div className='about-title-line3'>/&gt;</div>
        <div className='line'></div>
        </div>
        <AnimationChildren><div className='about-title2-beyond'>As a developer, I believe growth comes from continuously learning new technologies, keeping an open mind to explore different perspectives, and effectively communicating with others to turn ideas into reality.</div></AnimationChildren>
        <div className='about-beyond-holder'>
        <AnimationChildren>
        <div className='about-beyond-flex'>
        <div className='about-beyond-component-flex'>
        <div className='about-beyond-subtitleNumber'>01</div>
        <Animation><div className='about-progressBar'></div></Animation>
        <div className='about-subtitle-beyond'>Non-stop Learning</div>
        <div className='about-content-beyond'>As a developer, it takes continuous effort and practice to learn new technologies and stay up to date with the latest trends.</div>
        </div>
        <div className='about-beyond-component-flex'>
        <div className='about-beyond-subtitleNumber'>02</div>
        <Animation><div className='about-progressBar'></div></Animation>
        <div className='about-subtitle-beyond'>Opened-minded</div>
        <div className='about-content-beyond'>A developer should have an open mindset — always ready to think differently and explore new directions beyond the conventional path.</div>
        </div>
        <div className='about-beyond-component-flex'>
        <div className='about-beyond-subtitleNumber'>03</div>
        <Animation><div className='about-progressBar'></div></Animation>
        <div className='about-subtitle-beyond'>Communicative</div>
        <div className='about-content-beyond'>Just as developers interact with computers through code, it’s equally important to communicate and exchange ideas with people. Strong communication skills are essential to put all of this into practice.</div>
        </div>
        </div>
        </AnimationChildren>
        </div>
        <div ref={tech} className='about-holder-techstacks'>
        <div className='about-holder-title-line'>
          <div className='line'></div>
          <div className='about-title-line1'>&lt;</div>
          <div className='about-title-line2'>Tech Stacks</div>
          <div className='about-title-line3'>/&gt;</div>
          <div className='line'></div>
        </div>
        <div className='about-techstacks-flex-holder'>
        <div className='about-techstacks-flex'>
        
        <div className='about-holder-frontend'>
          <div className='about-title-techstacks'>Front-End</div>
          
          <div className='holder-frontend-icons'>
          <AnimationClone><div className='holder-icon'><div className='html'></div><div className='title-icon'>HTML</div></div></AnimationClone>
          <AnimationClone><div className='holder-icon'><div className='css'></div><div className='title-icon'>CSS</div></div></AnimationClone>
          <AnimationClone><div className='holder-icon'><div className='java'></div><div className='title-icon'>JAVA</div></div></AnimationClone>
          <AnimationClone><div className='holder-icon'><div className='react'></div><div className='title-icon'>React</div></div></AnimationClone>
          
          </div>
          
        </div>
        
        <div className='about-holder-backend'>
          <div className='about-title-techstacks'>Back-End</div>
        <AnimationChildren>
          <div className='holder-backend-icons'>
          <AnimationClone><div className='holder-icon'><div className='node'></div><div className='title-icon'>Node.js</div></div></AnimationClone>
          <AnimationClone><div className='holder-icon'><div className='express'></div><div className='title-icon'>Express.js</div></div></AnimationClone>
          <AnimationClone><div className='holder-icon'><div className='mongodb'></div><div className='title-icon'>MongoDB</div></div></AnimationClone>
          <AnimationClone><div className='holder-icon'><div className='render'></div><div className='title-icon'>Render</div></div></AnimationClone>
          <AnimationClone><div className='holder-icon'><div className='restapi'></div><div className='title-icon'>RestAPI</div></div></AnimationClone>
          <AnimationClone><div className='holder-icon'><div className='router'></div><div className='title-icon'>Router</div></div></AnimationClone>
          <AnimationClone><div className='holder-icon'><div className='jwt'></div><div className='title-icon'>JWT</div></div></AnimationClone>
        </div>
        </AnimationChildren>
        </div>
        </div>
        <div className='about-holder-techtools'>
          <div className='about-title-techstacks'>Tech & Tools</div>
          <AnimationChildren>
          <div className='holder-techAndTools-icons'>
          <AnimationClone><div className='holder-icon'><div className='vs'></div><div className='title-icon'>VS code</div></div></AnimationClone>
          <AnimationClone><div className='holder-icon'><div className='git'></div><div className='title-icon'>Git</div></div></AnimationClone>
          <AnimationClone><div className='holder-icon'><div className='github'></div><div className='title-icon'>Github</div></div></AnimationClone>
          <AnimationClone><div className='holder-icon'><div className='netlify'></div><div className='title-icon'>Netlify</div></div></AnimationClone>
          <AnimationClone><div className='holder-icon'><div className='bootstrap'></div><div className='title-icon'>Bootstrap</div></div></AnimationClone>
          </div>
          </AnimationChildren>
        </div>
        </div>
        </div>
        <div ref={experiences} className='about-holder-title-line'>
          <div className='line'></div>
          <div className='about-title-line1'>&lt;</div>
          <div className='about-title-line2'>Experiences</div>
          <div className='about-title-line3'>/&gt;</div>
          <div className='line'></div>
        </div>
        <div className='about-container-experience'>
          <Animation><div className='about-line-experience'></div></Animation>
          <div className='about-holder-content-experience'>
          <div className='about-holder-contentAndIcon-experience'>
          <AnimationChildren ><div className='about-titleAndSubtitle-experience'>
          <div className='about-title-experience'>💻 Self-taught Full Stack Developer</div>
          <div className='about-date-experience'>01/03/2020 ~ Present</div>
          <div className='about-subtitle-experience'>Learned web development independently through various online resources and personal projects.
Although my learning pace was irregular due to military service (1.5 years) and other commitments, I continued improving my skills and completed several front-end projects to strengthen my portfolio.</div>
          </div></AnimationChildren>
          <Animation><div className='onair-red'></div></Animation>
          <Animation><div className='onair'></div></Animation>
          </div>
          <div className='about-holder-contentAndIcon-experience'>
          <AnimationChildren ><div className='about-titleAndSubtitle-experience'>
          <div className='about-title-experience'>🚢 Graduated with a Bachelor’s Degree in Naval Architecture and Ocean Engineering</div>
          <div className='about-date-experience'>01/03/2020 ~ 26/12/2025</div>
          <div className='about-subtitle-experience'>University of Ulsan, South Korea (4 years) Developed a strong foundation in problem-solving, analytical thinking, and system design through rigorous engineering 
          coursework and team projects. My academic background helped me build logical thinking skills that I now apply to web development and software architecture.</div>
          </div></AnimationChildren>
          <Animation><div className='checked'></div></Animation>
          </div>
          <div className='about-holder-contentAndIcon-experience'>
          <AnimationChildren><div className='about-titleAndSubtitle-experience'>
          <div className='about-title-experience'>💪 Completed 18 months of mandatory military service in Korea</div> 
          <div className='about-date-experience'>18/11/2020 ~ 17/05/2023</div>
          <div className='about-subtitle-experience'>Served as a driver-soldier Successfully fulfilled national service with discipline and responsibility. During my service, I learned how to stay calm under pressure, work efficiently in structured environments, 
          and collaborate closely with teammates to achieve collective goals.</div>
          </div></AnimationChildren>
          <Animation><div className='checked'></div></Animation>
          </div>
          <div className='about-holder-contentAndIcon-experience'>
          <AnimationChildren><div className='about-titleAndSubtitle-experience'>
          <div className='about-title-experience'>🏡 Running an Airbnb business in Leeds, UK (with my wife)</div>   
          <div className='about-date-experience'>01/03/2025 ~ 01/09/2025</div>
          <div className='about-subtitle-experience'>6 months of hands-on experience in property management and customer service Co-managed an Airbnb property, handling guest communication, logistics, and maintenance. This experience strengthened my communication skills, 
          attention to detail, and ability to provide excellent user experiences — qualities that I also value as a developer when building digital products.</div>
          </div></AnimationChildren>
          <Animation><div className='checked'></div></Animation>
          </div>
          </div>
          </div>
        </div>
        <div className='project-sentence' initial={{opacity: 0}}
        animate={{opacity:1}} transition={{duration: 0}}>
        </div>
        <div className='about-sentence2'>
        <div ref={projects} className='about-holder-title-line2'>
          <div className='line'></div>
          <div className='about-title-line1'>&lt;</div>
          <div className='about-title-line4'>Projects</div>
          <div className='about-title-line3'>/&gt;</div>
          <div className='line'></div>
        </div>
        <div className='gap'></div>
        <div className='rab'>
        <div className='holder-project'>
        <AnimationChildren><div className='picture-project1'></div></AnimationChildren>
        <div className='holder-project-explanation'>
          <AnimationChildren><div className='title-project'>Loop Market</div></AnimationChildren>
          <AnimationChildren><div className='ex-project'>Developed a second-hand marketplace application that allows users to create accounts, log in, upload their own listings, search for items, and interact through comments.</div></AnimationChildren>
          <div className='starandsentence'>
          <div className='star'></div><AnimationChildren><div className='subsubtitle-project1'>Sign up, log in, and access your personalized dashboard.</div></AnimationChildren>
          </div>
          <div className='starandsentence'>
          <div className='star'></div><AnimationChildren><div className='subsubtitle-project2'>Add, update, and delete content with intuitive controls.</div></AnimationChildren>
          </div>
          <div className='starandsentence'>
          <div className='star'></div><AnimationChildren><div className='subsubtitle-project3'>View and interact with feedback on your posts.</div></AnimationChildren>
          </div>
          <AnimationClone>
          <div className='flex-liveandgit'>
          <div className='livewebsite'><a id='live' target='_blank' href='https://mainresisterlogin.onrender.com'>
                        <div className='backend-button'>#Back-end</div></a>
                        <a id='live' target='_blank' href='https://mainresgisterlogin.netlify.app/'>
                        <div className='frontend-button'>#Front-end</div></a>
          </div>
          <div className='gitwebsite'><a id='git' target='_blank' href='https://github.com/wprkftlgus/mainresisterlogin'><div className='holder-git-button'><div className='git-button'></div></div></a></div>
          </div>
          </AnimationClone>
          <AnimationClone>
          <div className='holder-project-skills-project1'>
            <div className='flex-project-skills-project1'>
            <div className='css-skill'>Full-Stack</div>
            <div className='css-skill'>React</div>
            <div className='css-skill'>HTML</div>
            <div className='css-skill'>CSS</div>
            </div>
            <div className='flex-project-skills-project1'>
            <div className='css-skill'>JAVA</div>
            <div className='css-skill'>JWT</div>
            <div className='css-skill'>MongoDB</div>
            <div className='css-skill'>NodeJS</div>
            </div>
            <div className='flex-project-skills-project1'>
            <div className='css-skill'>Express</div>
            <div className='css-skill'>Render</div>
            <div className='css-skill'>RestAPI</div>
            <div className='css-skill'>Router</div>
            </div>
            </div>
          </AnimationClone>
        </div>
        </div>
        </div>

        <div className='holder-project'>
        <AnimationChildren><div className='picture-project2'></div></AnimationChildren>
        <div className='holder-project-explanation'>
          <AnimationChildren><div className='title-project'>MyRecipe</div></AnimationChildren>
          <AnimationChildren><div className='ex-project'>User can search the recipe of the food what they want, while showing all instructions and Youtube video as well!</div></AnimationChildren>
          <div className='starandsentence'>
          <div className='star'></div><AnimationChildren><div className='subsubtitle-project1'>Find dishes quickly using API integration.</div></AnimationChildren>
          </div>
          <div className='starandsentence'>
          <div className='star'></div><AnimationChildren><div className='subsubtitle-project2'>View ingredients, cooking methods, and YouTube videos.</div></AnimationChildren>
          </div>
          <div className='starandsentence'>
          <div className='star'></div><AnimationChildren><div className='subsubtitle-project3'>Keep track of recipes for easy reference anytime.</div></AnimationChildren>
          </div>
          <AnimationClone>
          <div className='flex-liveandgit'>
          <div className='livewebsite'><a id='live' target='_blank' href='https://recipeapibysihyeon.netlify.app/'>
                        <div className='live-button'>Live</div></a></div>
          <div className='gitwebsite'><a id='git' target='_blank' href='https://github.com/wprkftlgus/RecipeAPI'><div className='holder-git-button'><div className='git-button'></div></div></a></div>
          </div>
          </AnimationClone>
          <AnimationClone>
          <div className='holder-project-skills-project2'>
            <div className='css-skill'>React</div>
            <div className='css-skill'>HTML</div>
            <div className='css-skill'>CSS</div>
            </div>
          </AnimationClone>
          <AnimationClone>
            <div className='holder-project-skills-project2'>
            <div className='css-skill'>JAVA</div>
            <div className='css-skill'>RestAPI</div>
            <div className='css-skill'>Express</div>
            <div className='css-skill'>Router</div>
            </div>
          </AnimationClone>
        </div>
        </div>

        <div className='holder-project'>
        <AnimationChildren><div className='picture-project3'></div></AnimationChildren>
        <div className='holder-project-explanation'>
          <AnimationChildren><div className='title-project'>The Space</div></AnimationChildren>
          <AnimationChildren><div className='ex-project'>My main portfolio website inspired by Interstellar.</div></AnimationChildren>
          <div className='starandsentence'>
          <div className='star'></div><AnimationChildren><div className='subsubtitle-project1'>Click on About, Project, or Contact to zoom in on planets.</div></AnimationChildren>
          </div>
          <div className='starandsentence'>
          <div className='star'></div><AnimationChildren><div className='subsubtitle-project2'>Watch planets respond as you move your mouse.</div></AnimationChildren>
          </div>
          <div className='starandsentence'>
          <div className='star'></div><AnimationChildren><div className='subsubtitle-project3'>Each planet displays information and details relevant to its section.</div></AnimationChildren>
          </div>
          <AnimationClone>
          <div className='flex-liveandgit'>
          <div className='livewebsite'><a id='live' target='_blank' href='https://spacebysihyeon.netlify.app/'>
                        <div className='live-button'>Live</div></a></div>
          <div className='gitwebsite'><a id='git' target='_blank' href='https://github.com/wprkftlgus/portpolioMain'><div className='holder-git-button'><div className='git-button'></div></div></a></div>
          </div>
          </AnimationClone>
          <AnimationClone>
          <div className='holder-project-skills-project3'>
            <div className='css-skill'>React</div>
            <div className='css-skill'>HTML</div>
          </div>
          </AnimationClone>
          <AnimationClone>
          <div className='holder-project-skills-project3'>
            <div className='css-skill'>CSS</div>
            <div className='css-skill'>JAVA</div>
            <div className='css-skill'>Three.js</div>
          </div>
          </AnimationClone>
        </div>
        </div>

        <div className='holder-project'>
        <AnimationChildren><div className='picture-project4'></div></AnimationChildren>
        <div className='holder-project-explanation'>
          <AnimationChildren><div className='title-project'>SeanFlix</div></AnimationChildren>
          <AnimationChildren><div className='ex-project'>Built a Netflix clone using React and styled-components, replicating the original platform’s design and interactivity. Features include responsive layout, video playback, animated sections, and collapsible FAQ interactions.</div></AnimationChildren>
          <div className='starandsentence'>
          <div className='star'></div><AnimationChildren><div className='subsubtitle-project1'>Browse content with a fully responsive design.</div></AnimationChildren>
          </div>
          <div className='starandsentence'>
          <div className='star'></div><AnimationChildren><div className='subsubtitle-project2'>Click questions to reveal answers and toggle them off again.</div></AnimationChildren>
          </div>
          <div className='starandsentence'>
          <div className='star'></div><AnimationChildren><div className='subsubtitle-project3'>Enjoy smooth navigation across devices of all sizes.</div></AnimationChildren>
          </div>
          <AnimationClone>
          <div className='flex-liveandgit'>
          <div className='livewebsite'><a id='live' target='_blank' href='https://netflisclonebysihyeon.netlify.app/'>
                        <div className='live-button'>Live</div></a></div>
          <div className='gitwebsite'><a id='git' target='_blank' href='https://github.com/wprkftlgus/Netflix'><div className='holder-git-button'><div className='git-button'></div></div></a></div>
          </div>
          </AnimationClone>
          <AnimationClone>
          <div className='holder-project-skills'>
            <div className='css-skill'>React</div>
            <div className='css-skill'>HTML</div>
            <div className='css-skill'>CSS</div>
            <div className='css-skill'>JAVA</div>
          </div>
          </AnimationClone>
        </div>
        </div>

        <div className='holder-project'>
        <AnimationChildren><div className='picture-project5'></div></AnimationChildren>
        <div className='holder-project-explanation'>
          <AnimationChildren><div className='title-project'>Calculator</div></AnimationChildren>
          <AnimationChildren><div className='ex-project'>Built a functional calculator using React and JavaScript, featuring real-time input display, operator validation, and error handling for invalid expressions.</div></AnimationChildren>
          <div className='starandsentence'>
          <div className='star'></div><AnimationChildren><div className='subsubtitle-project1'>Perform addition, subtraction, multiplication, and division.</div></AnimationChildren>
          </div>
          <div className='starandsentence'>
          <div className='star'></div><AnimationChildren><div className='subsubtitle-project2'>Prevent invalid operations like division by zero or consecutive operators.</div></AnimationChildren>
          </div>
          <div className='starandsentence'>
          <div className='star'></div><AnimationChildren><div className='subsubtitle-project3'>Simple and user-friendly layout for seamless calculations.</div></AnimationChildren>
          </div>
          <AnimationClone>
          <div className='flex-liveandgit'>
          <div className='livewebsite'><a id='live' target='_blank' href='https://sean-calculator.netlify.app/'>
                        <div className='live-button'>Live</div></a></div>
          <div className='gitwebsite'><a id='git' target='_blank' href='https://github.com/wprkftlgus/Calculator'><div className='holder-git-button'><div className='git-button'></div></div></a></div>
          </div>
          </AnimationClone>
          <AnimationClone>
          <div className='holder-project-skills'>
            <div className='css-skill'>React</div>
            <div className='css-skill'>HTML</div>
            <div className='css-skill'>CSS</div>
            <div className='css-skill'>JAVA</div>
          </div>
          </AnimationClone>
        </div>
        </div>

        
        <form onSubmit={onSubmit}>
    <div ref={contact} className='contact-sentence' initial={{opacity: 0}}
        animate={{opacity:10}} transition={{duration: 0}}>
        <div className='holder-contact'>
          
          <div className='flex-contact-whole'>
          <div className='flex-contact'>
          <div className='name-contact'>Contact</div>
          <input  id="email"
        type="email" value={email}
            onChange={(e) => setEmail(e.target.value)}
        name="email" placeholder='Your Email' className='email'></input>
          <textarea id="message" name="message" placeholder='Content' 
          value={content}
            onChange={(e) => setContent(e.target.value)}
          className='content'></textarea>
          </div>
          <div className='finger'>
          <div className='holder-check'>
            <button className='check'></button>
          </div>
          </div>
          </div>
        </div>
        </div>
    </form>
    <bottom>
      <div className='holder-bottom1'>
      <div>
        <div className='icon'></div>
        <div className='mini-aboutme'>I'm Sihyeon - a full-stack developer, freelancer & problem solver. Thanks for checking out my site!</div>
      </div>
      <div className='holder-bottom-section'>
      <div className='gray-text'>GENERAL</div>
      <div className='bottom-section-word' onClick={() => scrollToTop()}>Home</div>
      <div className='bottom-section-word' onClick={() => scrollToSection(beyond)}>Beyond</div>
      <div className='bottom-section-word' onClick={() => scrollToSection(tech)}>Tech</div>
      <div className='bottom-section-word' onClick={() => scrollToSection(experiences)}>Experiences</div>
      <div className='bottom-section-word' onClick={() => scrollToSection(projects)}>Projects</div>
      <div className='bottom-section-word' onClick={() => scrollToSection(contact)}>Contact</div>
      
      </div>
      </div>
      <div className='holder-bottom2'>
      <div className='copyright'>© 2025 Jegal Sihyeon. All rights reserved</div>
      <div className='holder-icons'>
      <a href='https://github.com/wprkftlgus' target='_blank'><div className='bottom-github'></div></a>
      <a href='https://www.linkedin.com/in/sihyeon-jegal-a4bbaa360' target='_blank'><div className='bottom-linkedin'></div></a>
      <div className='bottom-indeed'></div>
      </div>
      </div>
    </bottom>
    </div>
  </div>)}

export default App;
