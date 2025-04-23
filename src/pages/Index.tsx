
import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight, Search, Phone, Clock, DollarSign, Users, Star, Mail, Briefcase, Check, Send, BrainCircuit, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Slide from "@/components/presentation/Slide";
import SlideTitle from "@/components/presentation/SlideTitle";
import BenefitItem from "@/components/presentation/BenefitItem";
import PainPointItem from "@/components/presentation/PainPointItem";
import PricingOption from "@/components/presentation/PricingOption";
import NavigationDots from "@/components/presentation/NavigationDots";

const Index = () => {
  const slidesRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 11;

  const goToSlide = (index: number) => {
    if (index < 0 || index >= totalSlides) return;
    
    const slideElement = document.getElementById(`slide-${index}`);
    if (slideElement) {
      slideElement.scrollIntoView({ behavior: 'smooth' });
      setCurrentSlide(index);
    }
  };

  const goToNextSlide = () => goToSlide(currentSlide + 1);
  const goToPrevSlide = () => goToSlide(currentSlide - 1);

  return (
    <div className="relative overflow-hidden">
      <div 
        ref={slidesRef}
        className="snap-y snap-mandatory h-screen overflow-y-auto scroll-smooth"
        onScroll={(e) => {
          if (!slidesRef.current) return;
          
          const slideHeight = window.innerHeight;
          const scrollTop = e.currentTarget.scrollTop;
          const index = Math.round(scrollTop / slideHeight);
          
          if (index !== currentSlide) {
            setCurrentSlide(index);
          }
        }}
      >
        {/* Slide 1: Title Slide */}
        <Slide 
          id="slide-0"
          backgroundClass="bg-gradient-to-br from-vet-soft-blue via-white to-vet-soft-green"
          className="relative"
        >
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80')] bg-cover bg-center"></div>
          <div className="relative z-10 text-center">
            <div className="inline-block px-6 py-3 mb-4 rounded-full bg-vet-primary-purple bg-opacity-10 text-vet-primary-purple font-medium">
              AI AND AUTOMATION AGENCY LIMITED
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-vet-dark-gray">
              A Proposal for Growth & Efficiency
            </h1>
            <p className="text-xl md:text-2xl text-vet-neutral-gray mb-12 max-w-3xl mx-auto">
              AI & Automation Solutions for Angel's Touch Mobile Vet Service
            </p>
            <Button 
              size="lg" 
              className="bg-vet-primary-purple hover:bg-vet-primary-purple/90 text-white"
              onClick={goToNextSlide}
            >
              Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </Slide>

        {/* Slide 2: Understanding the Challenge (Why a Website?) */}
        <Slide 
          id="slide-1"
          backgroundClass="bg-white"
          className="relative"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SlideTitle>Are You Missing Opportunities?</SlideTitle>
              <div className="space-y-6">
                <PainPointItem
                  title="Not Showing Up Online"
                  description="People can't find you when they search for a mobile vet near them."
                  icon={<Search className="h-6 w-6" />}
                />
                <PainPointItem
                  title="No Professional Face"
                  description="Using just social media or directory listings doesn't look as professional or trustworthy."
                  icon={<Star className="h-6 w-6" />}
                />
                <PainPointItem
                  title="Nothing to Showcase Your Expertise"
                  description="You have amazing services, but no central place to tell people about them or show off your great work."
                  icon={<Briefcase className="h-6 w-6" />}
                />
                <PainPointItem
                  title="Hard for Clients to Get Info"
                  description="Clients have to call you just to find out basic things like services offered or where you cover."
                  icon={<Phone className="h-6 w-6" />}
                />
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1569171206684-dfb2749d96fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" 
                alt="Veterinarian with pet" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Without a website, potential clients pass you by</h3>
                  <p>They might never know about the excellent care you provide</p>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* Slide 3: Proposal 1: Your Digital Front Door (The Website) */}
        <Slide 
          id="slide-2"
          backgroundClass="bg-vet-soft-green"
        >
          <SlideTitle>Solution 1: Your Professional Online Home</SlideTitle>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="p-6 bg-white rounded-xl shadow-lg mb-8">
                <h3 className="text-xl font-bold mb-4 text-vet-bright-blue">Website Benefits</h3>
                <div className="space-y-4">
                  <BenefitItem
                    title="Look Professional & Trustworthy"
                    description="Build confidence with a beautiful, dedicated website that shows you're a serious, caring business."
                    icon={<Star className="h-6 w-6" />}
                  />
                  <BenefitItem
                    title="Get Found Online"
                    description="A proper website helps you appear in Google searches so new clients can find you."
                    icon={<Search className="h-6 w-6" />}
                  />
                  <BenefitItem
                    title="Showcase Your Services"
                    description="Clearly list everything you offer, making it easy for clients to understand how you can help their pets."
                    icon={<Briefcase className="h-6 w-6" />}
                  />
                  <BenefitItem
                    title="Easy Contact & Information"
                    description="Make it simple for clients to get in touch and find answers to common questions."
                    icon={<Mail className="h-6 w-6" />}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="p-6 bg-white rounded-xl shadow-lg h-full mb-8">
                <h3 className="text-xl font-bold mb-4 text-vet-bright-blue">Website Details</h3>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-medium">Hero/Main Page</h4>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-medium">Services Page</h4>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-medium">Contact Us</h4>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-medium">About & FAQ</h4>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <h3 className="text-xl font-bold mb-4 text-vet-bright-blue">Pricing</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <div className="text-sm text-vet-neutral-gray">Initial Setup</div>
                      <div className="text-2xl font-bold text-vet-dark-gray">$899</div>
                      <div className="text-sm">For Design</div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="text-sm text-vet-neutral-gray">Monthly</div>
                      <div className="text-2xl font-bold text-vet-dark-gray">$499</div>
                      <div className="text-sm">Hosting Service</div>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-vet-neutral-gray">
                    Extra Pages: $99 per additional page
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* Slide 4: Bonus Website Upgrade: Your 24/7 AI Chat Employee */}
        <Slide 
          id="slide-3"
          backgroundClass="bg-vet-soft-purple"
        >
          <SlideTitle>Go Further: Your Website's AI Assistant</SlideTitle>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -right-4 -top-4 bg-vet-primary-purple text-white text-lg font-bold py-2 px-4 rounded-full transform rotate-12 shadow-lg">
                Upgrade Option
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg relative">
                <div className="chat-container flex flex-col gap-4 max-w-lg mx-auto">
                  <div className="chat-message client-message flex justify-end">
                    <div className="bg-vet-bright-blue text-white p-3 rounded-xl rounded-tr-none max-w-[70%]">
                      Hi, do you offer emergency services for pets?
                    </div>
                  </div>
                  <div className="chat-message response-message flex">
                    <div className="bg-gray-100 p-3 rounded-xl rounded-tl-none max-w-[70%]">
                      Hello! Yes, we do offer emergency veterinary services for your pets. Our mobile vet service can come to your location for urgent situations. Would you like me to help you schedule an appointment or would you prefer a call from our team?
                    </div>
                  </div>
                  <div className="chat-message client-message flex justify-end">
                    <div className="bg-vet-bright-blue text-white p-3 rounded-xl rounded-tr-none max-w-[70%]">
                      I'd like to schedule an appointment please
                    </div>
                  </div>
                  <div className="chat-message response-message flex">
                    <div className="bg-gray-100 p-3 rounded-xl rounded-tl-none max-w-[70%]">
                      Great! To schedule an appointment, I'll need a few details. Could you please provide your name, contact number, location, and a brief description of your pet's condition? Alternatively, I can send you directly to our booking form.
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-vet-primary-purple text-white py-2 px-6 rounded-full shadow-lg">
                  <div className="flex items-center gap-2">
                    <BrainCircuit className="h-5 w-5" />
                    <span className="font-medium">AI Chat Assistant</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <BenefitItem
                  title="Always Available"
                  description="Provides instant answers to common questions on your website, day or night."
                  icon={<Clock className="h-6 w-6" />}
                />
                <BenefitItem
                  title="Guide Clients"
                  description="Can send website visitors directly to your booking system or other important links."
                  icon={<Send className="h-6 w-6" />}
                />
                <BenefitItem
                  title="Capture Leads"
                  description="Collects visitor details and emails them to you so you can follow up – even if they don't call."
                  icon={<Users className="h-6 w-6" />}
                />
                <BenefitItem
                  title="Understand Your Visitors"
                  description="Learn what questions people are asking on your site."
                  icon={<MessageSquare className="h-6 w-6" />}
                />
              </div>
              <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-vet-bright-blue">Pricing</h3>
                <div className="flex items-center gap-4">
                  <div className="p-4 border rounded-lg flex-1">
                    <div className="text-sm text-vet-neutral-gray">Monthly Fee</div>
                    <div className="text-2xl font-bold text-vet-dark-gray">$99</div>
                    <div className="text-sm">Added to website service</div>
                  </div>
                  <div className="text-vet-neutral-gray text-center">
                    <div className="font-medium text-vet-dark-gray mb-2">Unlimited</div>
                    <div>Website Chats</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* Slide 5: Understanding Another Challenge (Why a Voice AI Agent?) */}
        <Slide 
          id="slide-4"
          backgroundClass="bg-white"
        >
          <SlideTitle>Are Phone Calls Taking Over?</SlideTitle>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Busy veterinarian" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">When you're focusing on a patient</h3>
                  <p>You can't answer the phone, but calls keep coming in</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="space-y-6">
                <PainPointItem
                  title="Missed Calls = Lost Clients"
                  description="When you're busy with a patient, you miss calls. That's potential business going to someone else."
                  icon={<Phone className="h-6 w-6" />}
                />
                <PainPointItem
                  title="Repetitive Questions"
                  description="Answering the same questions about hours, services, or pricing takes up huge amounts of your valuable time."
                  icon={<MessageSquare className="h-6 w-6" />}
                />
                <PainPointItem
                  title="Always 'On Duty'"
                  description="You feel like you have to answer the phone constantly, even outside of work hours."
                  icon={<Clock className="h-6 w-6" />}
                />
                <PainPointItem
                  title="Difficulty Qualifying Calls"
                  description="Is this a quick question, a booking request, or an emergency? Hard to tell before you answer."
                  icon={<Users className="h-6 w-6" />}
                />
              </div>
            </div>
          </div>
        </Slide>

        {/* Slide 6: Proposal 2: Your 24/7 AI Phone Employee (Voice AI Agent) */}
        <Slide 
          id="slide-5"
          backgroundClass="bg-vet-soft-blue"
        >
          <SlideTitle>Solution 2: Your Dedicated AI Phone Agent</SlideTitle>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="p-6 bg-white rounded-xl shadow-lg mb-8">
                <h3 className="text-xl font-bold mb-4 text-vet-bright-blue">Phone AI Benefits</h3>
                <div className="space-y-4">
                  <BenefitItem
                    title="24/7 Availability"
                    description="Your AI agent answers the phone instantly, any time, day or night."
                    icon={<Clock className="h-6 w-6" />}
                  />
                  <BenefitItem
                    title="Saves You Time"
                    description="Handles common questions and tasks, freeing you up to focus on your patients and business."
                    icon={<Check className="h-6 w-6" />}
                  />
                  <BenefitItem
                    title="Qualifies Leads"
                    description="Can ask key questions to understand the caller's needs before connecting or sending info."
                    icon={<Users className="h-6 w-6" />}
                  />
                  <BenefitItem
                    title="Stay Informed"
                    description="Sends you a summary email after each call so you know who called and why."
                    icon={<Mail className="h-6 w-6" />}
                  />
                  <BenefitItem
                    title="Professional Image"
                    description="Provides a consistent, professional greeting and experience for every caller."
                    icon={<Star className="h-6 w-6" />}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="p-6 bg-white rounded-xl shadow-lg mb-8">
                <h3 className="text-xl font-bold mb-4 text-vet-bright-blue">How It Works</h3>
                <p className="mb-4">Calls to your mobile can automatically go to your AI agent when you can't answer.</p>
                <div className="border-b pb-4 mb-4">
                  <h4 className="font-medium mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-vet-bright-blue mr-2">✓</span>
                      <span>Answering FAQ</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-vet-bright-blue mr-2">✓</span>
                      <span>Sending email follow-ups</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-vet-bright-blue mr-2">✓</span>
                      <span>Qualifying leads</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-vet-bright-blue mr-2">✓</span>
                      <span>Call summaries</span>
                    </li>
                  </ul>
                </div>
                <h3 className="text-xl font-bold mb-4 text-vet-bright-blue">Pricing</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="p-4 border rounded-lg">
                    <div className="text-sm text-vet-neutral-gray">Initial Setup</div>
                    <div className="text-2xl font-bold text-vet-dark-gray">$1000</div>
                    <div className="text-sm">One-time fee</div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="text-sm text-vet-neutral-gray">Monthly</div>
                    <div className="text-2xl font-bold text-vet-dark-gray">$499</div>
                    <div className="text-sm">Service Fee</div>
                  </div>
                </div>
                <div className="p-4 border rounded-lg mb-4">
                  <div className="text-sm text-vet-neutral-gray">Usage</div>
                  <div className="flex justify-between items-center">
                    <div className="text-xl font-bold text-vet-dark-gray">$0.15 USD</div>
                    <div className="text-sm">per minute</div>
                  </div>
                </div>
                <div className="text-sm">
                  <div className="font-medium">Terms:</div>
                  <ul className="space-y-1 mt-2">
                    <li>• No fixed-term contract</li>
                    <li>• Payment only done when 100% satisfied</li>
                    <li>• 2-3 week delivery (AUS government registration required)</li>
                    <li>• Ongoing support included</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* Slide 7: Seeing the Value: What This Means for Anggle's Touch */}
        <Slide 
          id="slide-6"
          backgroundClass="bg-gradient-to-br from-vet-soft-green to-vet-soft-blue"
        >
          <SlideTitle>More Time, More Clients, More Growth</SlideTitle>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white p-8 rounded-xl shadow-lg space-y-6">
                <BenefitItem
                  title="More Free Time"
                  description="Automating routine tasks on your website and phone frees you up to focus on being a great vet."
                  icon={<Clock className="h-6 w-6" />}
                />
                <BenefitItem
                  title="Never Miss a Lead"
                  description="Capture potential clients from both your website and phone, even when you're busy."
                  icon={<Users className="h-6 w-6" />}
                />
                <BenefitItem
                  title="Improved Reputation"
                  description="Look more professional and provide better client service with 24/7 availability and a great online presence."
                  icon={<Star className="h-6 w-6" />}
                />
                <BenefitItem
                  title="Increased Revenue"
                  description="By not missing leads and freeing up your time, you have the opportunity to serve more clients and make more money."
                  icon={<DollarSign className="h-6 w-6" />}
                />
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80" 
                alt="Happy veterinarian with pet" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Focus on what you do best</h3>
                  <p>Let automation handle the rest</p>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* Slide 8: The Value Ladder: Your Options */}
        <Slide 
          id="slide-7"
          backgroundClass="bg-white"
        >
          <SlideTitle>Finding the Right Fit: Your Investment Options</SlideTitle>
          <div className="grid md:grid-cols-3 gap-8">
            <PricingOption
              title="The Professional Website"
              features={[
                "Beautiful 4-page website",
                "Mobile responsive design",
                "SEO optimized to be found online",
                "Easy contact forms",
                "Showcase your services"
              ]}
              setupPrice="$899 Setup"
              monthlyPrice="$499 per month"
              valuePrice="Valued at $1499"
            />
            
            <PricingOption
              title="Website with AI Chatbot"
              features={[
                "Everything in Professional Website",
                "24/7 AI Chat Assistant",
                "Lead capture system",
                "Instant responses to inquiries",
                "Visitor analytics"
              ]}
              setupPrice="$899 Setup"
              monthlyPrice="$598 per month"
              valuePrice="Valued at $1798"
            />
            
            <PricingOption
              title="The Full AI & Automation Solution"
              features={[
                "Professional Website",
                "AI Chat Assistant",
                "24/7 AI Phone Agent",
                "Email summaries of all interactions",
                "Complete lead qualification system"
              ]}
              setupPrice="$1000 Setup"
              monthlyPrice="$899 per month*"
              valuePrice="Valued at over $3798+"
              recommended={true}
            >
              <div className="mt-4 bg-vet-primary-purple/10 p-3 rounded-lg text-center">
                <p className="font-bold text-vet-primary-purple">Choose this package and we will WAIVE the $899 Website Setup Fee!</p>
              </div>
              <div className="mt-2 text-xs text-vet-neutral-gray">
                *Excludes call usage ($0.15/min)
              </div>
            </PricingOption>
          </div>
        </Slide>

        {/* Slide 9: Special Bonus & Seeing the ROI */}
        <Slide 
          id="slide-8"
          backgroundClass="bg-vet-light-gray"
        >
          <SlideTitle>Added Value & Seeing Your Returns</SlideTitle>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center mb-8">
                <div className="inline-block p-4 rounded-full bg-vet-primary-purple text-white mb-4">
                  <Star className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold">Special Bonus</h3>
                <div className="text-4xl font-bold text-vet-primary-purple mt-4">$599 Value</div>
                <p className="mt-2 text-vet-neutral-gray">Included when you choose the Full Solution</p>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-xl font-bold mb-4">Bonus Includes:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-vet-bright-blue mr-2">✓</span>
                    <span>Premium support package</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-vet-bright-blue mr-2">✓</span>
                    <span>Custom AI training session</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-vet-bright-blue mr-2">✓</span>
                    <span>Monthly analytics report</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-vet-bright-blue mr-2">✓</span>
                    <span>Priority system updates</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Understanding ROI</h3>
              <p className="mb-6">How quickly will these services pay for themselves? By capturing missed opportunities, you can easily see a return on your investment.</p>
              
              <div className="border rounded-lg p-4 mb-6">
                <h4 className="font-bold mb-2">ROI Calculator Example:</h4>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-vet-neutral-gray">New Clients Per Month:</div>
                    <div className="font-medium">Just 3 new clients</div>
                  </div>
                  <div>
                    <div className="text-sm text-vet-neutral-gray">Average Value Per Client:</div>
                    <div className="font-medium">$300 per visit</div>
                  </div>
                  <div>
                    <div className="text-sm text-vet-neutral-gray">Monthly Revenue Increase:</div>
                    <div className="font-bold text-vet-bright-blue">$900</div>
                  </div>
                  <div>
                    <div className="text-sm text-vet-neutral-gray">Monthly Investment:</div>
                    <div className="font-medium">$899</div>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="text-sm text-vet-neutral-gray">Net Gain:</div>
                    <div className="text-lg font-bold text-green-600">Profitable from month one</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">Time Savings:</h4>
                <p>Imagine saving 10+ hours per week on phone calls and admin – what could you do with that time?</p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="w-24 h-24 rounded-full bg-vet-soft-green flex items-center justify-center text-center">
                    <div>
                      <div className="text-2xl font-bold text-vet-dark-gray">10+</div>
                      <div className="text-xs">Hours Saved</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-vet-bright-blue rounded-full" style={{ width: '70%' }}></div>
                    </div>
                    <div className="mt-2 text-sm flex justify-between">
                      <span>More time with patients</span>
                      <span>More revenue</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* Slide 10: Partnership & Next Steps */}
        <Slide 
          id="slide-9"
          backgroundClass="bg-vet-soft-purple"
        >
          <div className="max-w-3xl mx-auto text-center">
            <SlideTitle>Your Partner in Growth</SlideTitle>
            <p className="text-xl mb-8">
              At AI AND AUTOMATION AGENCY LIMITED, we specialize in helping businesses like yours thrive with technology that makes real-world differences in your daily operations.
            </p>
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="mb-8">
                Let's schedule a quick chat to discuss which option is the perfect fit for Angel's Touch!
              </p>
              <Button 
                size="lg" 
                className="bg-vet-primary-purple hover:bg-vet-primary-purple/90 text-white"
              >
                Contact Us Today
              </Button>
              <p className="mt-6 text-vet-neutral-gray">
                Remember, payment is only due when you are 100% satisfied with the setup.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                alt="Happy veterinarian and client" 
                className="rounded-xl shadow-lg h-60 object-cover"
              />
            </div>
          </div>
        </Slide>

        {/* Slide 11: Contact Information */}
        <Slide 
          id="slide-10"
          backgroundClass="bg-vet-dark-gray text-white"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-vet-soft-purple">Company Details</h3>
                <p className="text-lg font-medium mb-2">AI AND AUTOMATION AGENCY LIMITED</p>
                <p className="mb-4">Specialists in AI Solutions for Businesses</p>
                <div className="flex justify-center">
                  <div className="w-16 h-1 bg-vet-primary-purple rounded-full"></div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-vet-soft-purple">Get In Touch</h3>
                <div className="space-y-2 mb-4">
                  <p className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4 text-vet-primary-purple" />
                    <span>+64212550493</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4 text-vet-primary-purple" />
                    <span>alt@alcutman.com</span>
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-16 h-1 bg-vet-primary-purple rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="inline-block px-6 py-3 rounded-full bg-vet-primary-purple bg-opacity-20 text-vet-primary-purple font-medium">
              Thank you for your consideration
            </div>
          </div>
        </Slide>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center items-center gap-4 z-20">
        <Button 
          variant="outline"
          size="icon"
          onClick={goToPrevSlide}
          disabled={currentSlide === 0}
          className="bg-white shadow-md"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        
        <NavigationDots 
          totalSlides={totalSlides} 
          currentSlide={currentSlide} 
          onDotClick={goToSlide} 
          className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md"
        />
        
        <Button 
          variant="outline"
          size="icon"
          onClick={goToNextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="bg-white shadow-md"
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
