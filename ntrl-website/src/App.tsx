import './App.scss';
import * as React from 'react';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useEffect, useState } from 'react';
import TimelineIcon from '@mui/icons-material/Timeline';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TextField from '@mui/material/TextField';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';
import MenuIcon from '@mui/icons-material/Menu';
import { useRef } from 'react';
import { ArrowCircleLeft } from '@mui/icons-material';
import { ArrowCircleRight } from '@mui/icons-material';

function App() {

  const ScrollIntoSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }


  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    height: '',
    weight: '',
    days: '',
    message: ''
  });

  const handleChangeForm = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }))
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formRef.current,
      'YOUR_PUBLIC_KEY'
    ).then(
      () => {
        alert("Message send successfully!");
      },
      (error) => {
        console.error(error);
        alert("Failed to send message");
      }
    );
  };

  const handleDecimalChange = (name: string, value: string) => {
    // Allow empty
    if (value === '') {
      setFormData(prev => ({ ...prev, [name]: '' }));
      return;
    }

    // Regex: numbers with up to 2 decimal places
    const regex = /^\d*\.?\d{0,2}$/;

    if (regex.test(value)) {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const cardContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollRight = () => {
    if (!cardContainerRef.current) return;

    const container = cardContainerRef.current;
    const scrollAmount = container.clientWidth + 25;

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    if (!cardContainerRef.current) return;

    const container = cardContainerRef.current;
    const scrollAmount = container.clientWidth + 25;

    container.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="main-container">
      <nav className="nav-container">
        <div className="logo-container">
          <img src="/ntrlLogoCropped.png" alt="" />
        </div>

        <ul className="navlinks">
          <li className={activeNav === "home" ? "active" : ""} onClick={() => ScrollIntoSection("home")}>Home</li>
          <li className={activeNav === "about" ? "active" : ""} onClick={() => ScrollIntoSection("about")}>About</li>
          <li className={activeNav === "features" ? "active" : ""} onClick={() => ScrollIntoSection("features")}>Features</li>
          <li className={activeNav === "plans" ? "active" : ""} onClick={() => ScrollIntoSection("plans")}>Plans</li>
          <li className={activeNav === "success-stories" ? "active" : ""} onClick={() => ScrollIntoSection("success-stories")}>Success Stories</li>
          <li className={activeNav === "contact-us" ? "active" : ""} onClick={() => ScrollIntoSection("contact-us")}>Contact Us</li>
        </ul>

        <button className="view-plans-btn" onClick={() => ScrollIntoSection("plans")}>View Plans <ArrowCircleRightIcon /></button>

        <div className="menu-icon-container"><MenuIcon className='icon' /></div>
      </nav>

      <section className="home" id="home">
        <div className="home-contents">
          <div className="main-title">
            NTRL
          </div>
          <div className="sub-title">
            Nutrition - Training - Results - Longevity
          </div>
          <div className="cta-btn-container">
            <button className="join-now-btn" onClick={() => ScrollIntoSection("plans")}>Join Now <KeyboardDoubleArrowRightIcon className='icon' /></button>
            <button className="contact-us-btn" onClick={() => ScrollIntoSection("contact-us")}>Contact Us <MailIcon className='icon' /></button>
          </div>
          <div className="social-media-icons-container">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FacebookIcon className='icon' />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className='icon' />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <YouTubeIcon className='icon' />
            </a>
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
              <TelegramIcon className='icon' />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className='icon' />
            </a>
            <a href="mailto:" target="_blank" rel="noopener noreferrer">
              <MailIcon className='icon' />
            </a>
          </div>
        </div>
        <div className="home-backdrop"></div>
      </section>

      <section className="about" id="about">
        <div className="about-container">
          <div className="main-title">
            Build a Strong, Lean Body — Without Guesswork
          </div>
          <div className="sub-title">
            Personalized training and nutrition coaching designed to deliver real results and long-term transformation
          </div>
          <div className="paper-title">
            Limited coaching slots available
          </div>
          <div className="button-container">
            <button className="transformation-btn">Start My Transformation <KeyboardDoubleArrowRightIcon className='icon' /></button>
            <button className="view-plans-btn" onClick={() => { ScrollIntoSection("plans") }}>View Plans <ArrowCircleRightIcon className='icon' /></button>
          </div>
        </div>
        <div className="about-backdrop"></div>
      </section>

      <section className="features" id="features">
        <div className="features-contents">
          <div className="main-title">
            The NTRL System
          </div>
          <div className="sub-title">
            No guesswork, No generic plans , just a system built for real results.
          </div>
          <div className="cards-container">
            <div className="card">
              <p className="title">Pernsolized Training Plans <TimelineIcon className='icon' /></p>
              <p className="description">Structured workouts tailored to your goal, level, and schedule.</p>
            </div>
            <div className="card">
              <p className="title">Practical Nutrition <HealthAndSafetyIcon className='icon' /></p>
              <p className="description">Flexible meal plans in grams — simple, effective, and sustainable.</p>
            </div>
            <div className="card">
              <p className="title">Real Accountability <SupportAgentIcon className='icon' /></p>
              <p className="description">Regular check-ins and direct support to keep you consistent.</p>
            </div>
            <div className="card">
              <p className="title">Progress Tracking <SignalCellularAltIcon className='icon' /></p>
              <p className="description">Track results, make adjustments, and stay on track every week.</p>
            </div>
          </div>
        </div>

        <div className="features-backdrop"></div>
      </section>

      <section className="plans" id="plans">
        <div className="plans-container">
          <div className="main-title">
            Start your transformation today
          </div>
          <div className="sub-title">
            Choose a plan that fits your goal and start your fitness journey with structured coaching and real accountability.
          </div>
          <div className="cards-container">
            <div className="card">
              <div className="top-section">
                <div className="head-tag">
                  Kickstart Plan <CheckIcon className='icon' />
                </div>
                <div className="week-text">
                  4 Weeks Coaching
                </div>
                <div className="description-section">
                  Recommended to continue for best results
                </div>
                <div className="price">
                  AED 499
                </div>
              </div>
              <div className="bottom-section">
                <div className="description-section">
                  Get started with structure, build habits and foundation
                </div>
                <ul className="plan-details">
                  <li><CheckCircleIcon className='icon' /> Workout plan</li>
                  <li><CheckCircleIcon className='icon' /> Basic nutrition guidance</li>
                  <li><CheckCircleIcon className='icon' /> Weekly check-in</li>
                  <li><CheckCircleIcon className='icon' /> Messaging support</li>
                </ul>
                <button className="start-plan-button">
                  Start Kickstart Plan <ArrowRightIcon className='icon' />
                </button>
              </div>
            </div>
            <div className="card popular">
              <div className="top-section">
                <div className="head-tag">
                  <div className="left">
                    Transformation Plan <StarBorderIcon className='icon' />
                  </div>
                  <div className="right">
                    | CORE PRODUCT
                  </div>
                </div>
                <div className="week-text">
                  8 Weeks Coaching
                </div>
                <div className="description-section">
                  Minimum duration for visible transformation
                </div>
                <div className="price">
                  AED 1,299
                </div>
              </div>
              <div className="bottom-section">
                <div className="description-section">
                  This is your Real Program
                </div>
                <ul className="plan-details">
                  <li><CheckCircleIcon className='icon' /> Full training program</li>
                  <li><CheckCircleIcon className='icon' /> Detailed meal plan (grams/macros)</li>
                  <li><CheckCircleIcon className='icon' /> Weekly adjustments</li>
                  <li><CheckCircleIcon className='icon' /> Full support</li>
                </ul>
                <button className="start-plan-button">
                  Start Transformation Plan <ArrowRightIcon className='icon' />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="top-section">
                <div className="head-tag">
                  Elite Plan <AutoGraphIcon className='icon' />
                </div>
                <div className="week-text">
                  12 Weeks Coaching
                </div>
                <div className="description-section">
                  Best results & long-term body change
                </div>
                <div className="price">
                  AED 1,999
                </div>
              </div>
              <div className="bottom-section">
                <div className="description-section">
                  This is where real transformation happens
                </div>
                <ul className="plan-details">
                  <li><CheckCircleIcon className='icon' /> Everything included</li>
                  <li><CheckCircleIcon className='icon' /> Deep tracking</li>
                  <li><CheckCircleIcon className='icon' /> Lifestyle coaching</li>
                  <li><CheckCircleIcon className='icon' /> Maximum accountability</li>
                </ul>
                <button className="start-plan-button">
                  Start Elite Plan <ArrowRightIcon className='icon' />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="plans-backdrop"></div>
      </section>

      <section className="success-stories" id="success-stories">

        <div className="success-stories-contents">
          <div className="title-section">
            <div className="main-title">Real results . Real people</div>
            <div className="sub-title">Our members are building stronger, leaner bodies through structured coaching and consistency.</div>
          </div>
          <div className="arrow-left" onClick={scrollLeft}>
            <ArrowCircleLeft className='icon'/>
          </div>
          <div className="cards-container success-cards-container" ref={cardContainerRef}>
            <div className="card">
              <div className="top-section">
                <div className="pro-pic" style={{
                  backgroundImage: "url(/success-one-propic.jpeg)"
                }}>

                </div>
                <div className="name">
                  Biswas Ravindran
                </div>
                <div className="instagram-icon">
                  <InstagramIcon className='icon' />
                </div>
              </div>
              <div className="middle-section">
                I finally stayed consistent and saw real results.
              </div>
              <div className="bottom-section">
                <div className="before-section">
                  <div className="title">Before</div>
                  <div className="image" style={{
                    backgroundImage: "url(/success-one-before.jpeg)"
                  }}></div>
                </div>
                <div className="after-section">
                  <div className="title">After</div>
                  <div className="image" style={{
                    backgroundImage: "url(/success-one-after.jpeg)"
                  }}></div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="top-section">
                <div className="pro-pic" style={{
                  backgroundImage: "url(/success-two-propic.jpeg)"
                }}>

                </div>
                <div className="name">
                  Vaishnavi R Kartha
                </div>
                <div className="instagram-icon">
                  <InstagramIcon className='icon' />
                </div>
              </div>
              <div className="middle-section">
                I finally stayed consistent and saw real results.
              </div>
              <div className="bottom-section">
                <div className="before-section">
                  <div className="title" >Before</div>
                  <div className="image" style={{
                    backgroundImage: "url(/success-two-before.jpeg)"
                  }}>

                  </div>
                </div>
                <div className="after-section">
                  <div className="title">After</div>
                  <div className="image" style={{
                    backgroundImage: "url(/success-two-after.jpeg)"
                  }}>

                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="top-section">
                <div className="pro-pic" style={{
                  backgroundImage: "url(/success-three-propic.jpeg)"
                }}>

                </div>
                <div className="name">
                  Ahalya Sivarajan
                </div>
                <div className="instagram-icon">
                  <a href="https://www.instagram.com/ahalya_sivarajan?igsh=MTdiZTUxd2N5MXNydA==" target="_blank" rel="noopener noreferrer"><InstagramIcon className='icon' /></a>
                </div>
              </div>
              <div className="middle-section">
                I finally stayed consistent and saw real results.
              </div>
              <div className="bottom-section">
                <div className="before-section">
                  <div className="title">Before</div>
                  <div className="image" style={{
                    backgroundImage: "url(/success-three-before.jpeg)"
                  }}>

                  </div>
                </div>
                <div className="after-section">
                  <div className="title">After</div>
                  <div className="image" style={{
                    backgroundImage: "url(/success-three-after.jpeg)"
                  }}>

                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="top-section">
                <div className="pro-pic" style={{
                  backgroundImage: "url(/success-four-propic.jpeg)"
                }}>

                </div>
                <div className="name">
                  Gokil Nair
                </div>
                <div className="instagram-icon">
                  <a href="https://www.instagram.com/gokilvn007?igsh=Z3AwcXo3bTNldmgz" target="_blank" rel="noopener noreferrer"><InstagramIcon className='icon' /></a>
                </div>
              </div>
              <div className="middle-section">
                I finally stayed consistent and saw real results.
              </div>
              <div className="bottom-section">
                <div className="before-section">
                  <div className="title">Before</div>
                  <div className="image" style={{
                    backgroundImage: "url(/success-four-before.jpeg)"
                  }}>

                  </div>
                </div>
                <div className="after-section">
                  <div className="title">After</div>
                  <div className="image" style={{
                    backgroundImage: "url(/success-four-after.jpeg)"
                  }}>

                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="top-section">
                <div className="pro-pic" style={{
                  backgroundColor: 'green'
                }}>

                </div>
                <div className="name">
                  Pooja Unnikrishnan
                </div>
                <div className="instagram-icon">
                  <a href="https://www.instagram.com/pooja_unnikrishnan?igsh=bzFvbjdyYmdjZWV1" target="_blank" rel="noopener noreferrer"><InstagramIcon className='icon' /></a>
                </div>
              </div>
              <div className="middle-section">
                I finally stayed consistent and saw real results.
              </div>
              <div className="bottom-section">
                <div className="before-section">
                  <div className="title">Before</div>
                  <div className="image" style={{
                    backgroundImage: "url(/success-five-before.jpeg)"
                  }}>

                  </div>
                </div>
                <div className="after-section">
                  <div className="title">After</div>
                  <div className="image" style={{
                    backgroundImage: "url(/success-five-after.jpeg)"
                  }}>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="arrow-right" onClick={scrollRight}>
            <ArrowCircleRight className='icon'/>
          </div>
        </div>

        <div className="success-stories-backdrop"></div>
      </section>

      <section className="contact-us" id="contact-us">
        <div className="contact-us-contents">
          <div className="title-section">
            <div className="main-title">
              Start Your Transformation Today
            </div>
            <div className="sub-title">
              Join NTRL and build a stronger, leaner body with structured coaching and real accountability.
            </div>
          </div>
          <div className="contact-box-container">
            <div className="left-side">
              <div className="title">Don't hesitate to contact us</div>
              <div className="card-container">
                <div className="card">
                  <div className="icon-container">
                    <LocationOnIcon className='icon' />
                  </div>
                  <div className="text-container">
                    <div className="main-text">Location</div>
                    <div className="sub-text">Yas Mall - near Waltrose. Abu Dhabi</div>
                  </div>
                </div>
                <div className="card">
                  <div className="icon-container">
                    <MailIcon className='icon' />
                  </div>
                  <div className="text-container">
                    <div className="main-text">Email</div>
                    <div className="sub-text">suppport@ntrlfitness.com</div>
                  </div>
                </div>
                <div className="card">
                  <div className="icon-container">
                    <PhoneIcon className='icon' />
                  </div>
                  <div className="text-container">
                    <div className="main-text">Phone</div>
                    <div className="sub-text">+971 xxx-xxx-xx</div>
                  </div>
                </div>
                <div className="card">
                  <div className="icon-container">
                    <AccessTimeIcon className='icon' />
                  </div>
                  <div className="text-container">
                    <div className="main-text">Work Hours</div>
                    <div className="sub-text">Monday - Saturday 9:00AM - 8:00PM</div>
                  </div>
                </div>
              </div>
              <div className="social-media-container">
                <div className="text">Our Social Media Platforms :</div>
                <div className="social-media-icons-container">
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FacebookIcon className='icon' />
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon className='icon' />
                  </a>
                  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                    <YouTubeIcon className='icon' />
                  </a>
                  <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
                    <TelegramIcon className='icon' />
                  </a>
                  <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className='icon' />
                  </a>
                  <a href="mailto:" target="_blank" rel="noopener noreferrer">
                    <MailIcon className='icon' />
                  </a>
                </div>
              </div>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="right-side">

              <TextField
                name="fullName"
                label="Full Name"
                value={formData.fullName}
                onChange={handleChangeForm}
                className="input-field"
                sx={{
                  '& .MuiOutlinedInput-root': { borderRadius: '10px', }
                }}
              />

              <TextField
                name="email"
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={handleChangeForm}
                className="input-field"
                sx={{
                  '& .MuiOutlinedInput-root': { borderRadius: '10px', }
                }}
              />

              <PhoneInput
                className="input-field PhoneInput"
                international
                countryCallingCodeEditable={false}
                defaultCountry="AE"
                value={formData.phone}
                limitMaxLength
                onChange={(value) =>
                  setFormData(prev => ({ ...prev, phone: value || '' }))
                }
              />

              <div className="age-height-container">
                <TextField
                  name="age"
                  label="Age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleDecimalChange('age', e.target.value)}
                  onKeyDown={(e) => {
                    if (['e', '-', '+'].includes(e.key)) e.preventDefault();
                  }}
                  slotProps={{
                    input: {
                      inputProps: {
                        step: 0.01,
                        min: 0
                      }
                    }
                  }}
                  className="input-field"
                  sx={{
                    '& .MuiOutlinedInput-root': { borderRadius: '10px', }
                  }}
                />

                <TextField
                  name="height"
                  label="Height"
                  type="number"
                  value={formData.height}
                  onChange={(e) => handleDecimalChange('height', e.target.value)}
                  onKeyDown={(e) => {
                    if (['e', '-', '+'].includes(e.key)) e.preventDefault();
                  }}
                  slotProps={{
                    input: {
                      inputProps: {
                        step: 0.01,
                        min: 0
                      }
                    }
                  }}
                  className="input-field"
                  sx={{
                    '& .MuiOutlinedInput-root': { borderRadius: '10px', }
                  }}
                />
              </div>

              <div className="weight-week-container">
                <TextField
                  name="weight"
                  label="Weight"
                  type="number"
                  value={formData.weight}
                  onChange={(e) => handleDecimalChange('weight', e.target.value)}
                  onKeyDown={(e) => {
                    if (['e', '-', '+'].includes(e.key)) e.preventDefault();
                  }}
                  slotProps={{
                    input: {
                      inputProps: {
                        step: 0.01,
                        min: 0
                      }
                    }
                  }}
                  className="input-field"
                  sx={{
                    '& .MuiOutlinedInput-root': { borderRadius: '10px', }
                  }}
                />

                <FormControl size='small' className="input-field"
                  sx={{
                    '& .MuiOutlinedInput-root': { borderRadius: '10px', }
                  }}
                >
                  <InputLabel>Training days per week</InputLabel>
                  <Select
                    name="days"
                    label="Training days per week"
                    value={formData.days}
                    onChange={handleChangeForm}
                  >
                    {[1, 2, 3, 4, 5, 6, 7].map(d => (
                      <MenuItem key={d} value={d}>{d}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              <TextField
                name="message"
                label="Message"
                value={formData.message}
                onChange={handleChangeForm}
                className="input-field message-input"
                sx={{
                  '& .MuiOutlinedInput-root': { borderRadius: '10px', }
                }}
              />

              <button type="submit" className="send-msg-btn">
                Send Message <SendIcon className='icon' />
              </button>
            </form>
          </div>
        </div>

        <div className="contact-us-backdrop"></div>
      </section>
      <footer>
        <div className="text-description">
          NTRL is an online fitness coaching platform dedicated to helping individuals build strength, resilience, and long-term health through expert guidance and structured training programs.
        </div>
        <ul className="sections-list">
          <a href="#home"><li>Home</li></a>
          <a href="#about"><li>About</li></a>
          <a href="#features"><li>Features</li></a>
          <a href="#plans"><li>Plans</li></a>
          <a href="#success-stories"><li>Success Stories</li></a>
          <a href="#contact-us"><li>Contact Us</li></a>
        </ul>
        <ul className="social-media-list">
          <a href="https://www.facebook.com/"><li>Facebook</li></a>
          <a href="https://www.instagram.com/"><li>Instagram</li></a>
          <a href="https://www.youtube.com/"><li>Youtube</li></a>
          <a href="https://www.t.me/"><li>Telegram</li></a>
          <a href="https://www.wa.me/"><li>Whatsapp</li></a>
          <a href="mailto:"><li>Email</li></a>
        </ul>
        <div className="logo-container">
          <img src="/ntrlLogo.png" alt="" />
        </div>
      </footer>
      <div className="bottom">
        © 2026 NTRL Fitness. All rights reserved.
      </div>
    </div>
  )
}

export default App