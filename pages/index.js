import { useRef, useState } from 'react';

import Developers from '@components/Developers';
import FeedbackForm from '@components/FeedbackForm';
import Footer from "@components/Footer";
import IndustriesGrid from '@components/IndustriesGrid';
import MastHead from '@components/MastHead';
import Testimonials from '@components/Testimonials';
export default function Home() {
  const [feedbackData, setFeedbackData] = useState({
    email: '',
    message: ''
  });

  const sectionRef = useRef(null);

  return (
    <div>
      <MastHead />
      <IndustriesGrid feedbackData={feedbackData} setFeedbackData={setFeedbackData} sectionRef={sectionRef} />
      <Testimonials/> 
      <Developers />
      <Footer />
    </div>
  )
}
