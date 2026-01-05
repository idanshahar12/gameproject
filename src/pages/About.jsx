import React from 'react'
import Title from '../components/Title';
import SocialLinks from '../components/SocialLinks';

const About = () => {
  return (
    <main className="about-page">
      <section className="about-left">
        <Title>Hello my friends!</Title>
        <h2>my name is Idan welcome to my website</h2>
        <p>
          
          Hey there! Im a 16-year-old high school student and aspiring web
          developer. I built this React app because I believe gaming should be
          accessible to everyone, regardless of budget. That's why I created
          this hub to help you find the best free-to-play games out there.
        </p>
        <p>
          When I'm not coding, I'm usually gaming—whether its grinding
          competitive shooters on PC or exploring open worlds on console. I hope
          you find your next favorite game here!
        </p>
      <SocialLinks/>
      </section>
      <section className="about-right">
        <img
          alt="Idan"
          src="https://img.freepik.com/premium-photo/man-business-suit-white-background-stylize-250-job-id-68f9678b878140fe816d6586919490f2_343960-71463.jpg"
        ></img>
      </section>
    </main>
  );
}

export default About