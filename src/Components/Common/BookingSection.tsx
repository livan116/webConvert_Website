import React, { useState, useRef } from 'react';
// import '../../assets/css/fonts.css'
import { Container, Row, Col, Form, Button, Card, ProgressBar} from 'react-bootstrap';
import { 
  FaCalendarAlt, 
  FaClock, 
  FaArrowLeft, 
  FaUserAlt, 
  FaEnvelope, 

  FaCheck, 
  FaChevronLeft, 
  FaChevronRight, 
  FaSearch, 
  FaGlobe, 
  FaChartLine, 
  FaAd, 
  FaPenFancy, 
  FaMobileAlt 
} from 'react-icons/fa';
// import '../../assets/css/main.css'
import { motion, AnimatePresence } from 'framer-motion';

// Type definitions
type Service = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  price: string;
};

type CountryCode = {
  code: string;
  country: string;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  message: string;
};

// Custom styles based on provided CSS variables
const styles = {
  primaryColor: '#4E2FDA', // --ztc-bg-bg-1
  primaryLight: '#EDE9F8', // --ztc-bg-bg-2
  secondaryColor: '#6455E1', // --ztc-bg-bg-28
  textDark: '#090B0E', // --ztc-text-text-2
  textMedium: '#3D4C5E', // --ztc-text-text-3
  textAccent: '#4E2FDA', // --ztc-text-text-4
  gradient: 'linear-gradient(90deg, #4E2FDA 0%, #6455E1 100%)',
  bgLight: '#F6F8F9', // --ztc-bg-bg-15
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const cardVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const stepTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20
};

const BookingSection: React.FC = () => {
  const [step, setStep] = useState<number>(1); // 1: Service selection, 2: Date selection, 3: Registration, 4: Thank you
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    countryCode: '+1',
    message: ''
  });
  
  // For calendar
  const currentDate = new Date();
  const [displayMonth, setDisplayMonth] = useState<number>(currentDate.getMonth());
  const [displayYear, setDisplayYear] = useState<number>(currentDate.getFullYear());
  
  // For animations
  const sectionRef = useRef<HTMLElement>(null);
  
  // Available services
  const services: Service[] = [
    {
      id: 1,
      title: 'SEO Optimization',
      description: 'Improve your website ranking and organic traffic',
      icon: <FaSearch className="fs-3" />,
      price: 'Starting at $500/mo'
    },
    {
      id: 2,
      title: 'Website Development',
      description: 'Custom website design and development',
      icon: <FaGlobe className="fs-3" />,
      price: 'Starting at $1,200'
    },
    {
      id: 3,
      title: 'Social Media Marketing',
      description: 'Grow your brand presence across platforms',
      icon: <FaAd className="fs-3" />,
      price: 'Starting at $800/mo'
    },
    {
      id: 4,
      title: 'Content Marketing',
      description: 'Strategic content creation and distribution',
      icon: <FaPenFancy className="fs-3" />,
      price: 'Starting at $600/mo'
    },
    {
      id: 5,
      title: 'PPC Advertising',
      description: 'Targeted paid campaigns for quick results',
      icon: <FaChartLine className="fs-3" />,
      price: 'Starting at $1,000/mo'
    },
    {
      id: 6,
      title: 'Mobile App Marketing',
      description: 'Promote and optimize your mobile application',
      icon: <FaMobileAlt className="fs-3" />,
      price: 'Starting at $1,500/mo'
    }
  ];
  
  // Country codes for phone
  const countryCodes: CountryCode[] = [
    { code: '+1', country: 'US/CA' },
    { code: '+44', country: 'UK' },
    { code: '+61', country: 'AU' },
    { code: '+64', country: 'NZ' },
    { code: '+49', country: 'DE' },
    { code: '+33', country: 'FR' },
    { code: '+91', country: 'IN' },
    { code: '+86', country: 'CN' },
    { code: '+52', country: 'MX' },
    { code: '+81', country: 'JP' }
  ];
  
  // Generate calendar days
  const daysInMonth = new Date(displayYear, displayMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(displayYear, displayMonth, 1).getDay();
  
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const paddingDays = Array.from({ length: firstDayOfMonth }, () => null);
  
  const monthNames = [
    'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 
    'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
  ];
  
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const timeSlots = [
    '9:00 am', '9:30 am', '10:00 am', '10:30 am',
    '11:00 am', '11:30 am', '12:00 pm', '12:30 pm',
    '1:00 pm', '1:30 pm', '2:00 pm', '2:30 pm',
    '3:00 pm', '3:30 pm', '4:00 pm', '4:30 pm',
    '5:00 pm', '5:30 pm'
  ];
  
  const handleNextMonth = (): void => {
    if (displayMonth === 11) {
      setDisplayMonth(0);
      setDisplayYear(displayYear + 1);
    } else {
      setDisplayMonth(displayMonth + 1);
    }
  };
  
  const handlePrevMonth = (): void => {
    // Don't allow going before current month
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    
    if (displayYear === currentYear && displayMonth === currentMonth) {
      return;
    }
    
    if (displayMonth === 0) {
      setDisplayMonth(11);
      setDisplayYear(displayYear - 1);
    } else {
      setDisplayMonth(displayMonth - 1);
    }
  };
  
  const handleDateClick = (day: number): void => {
    // Don't allow selecting days before today
    const selectedDate = new Date(displayYear, displayMonth, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate >= today) {
      setSelectedDate(`${monthNames[displayMonth].substring(0, 3)}, ${day} ${displayYear}`);
    }
  };
  
  const handleTimeClick = (time: string): void => {
    setSelectedTime(time);
  };
  
  const handleServiceSelect = (service: Service): void => {
    setSelectedService(service);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setFormData({ ...formData, countryCode: e.target.value });
  };
  
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setStep(4); // Move to thank you page
  };
  
  const goBack = (): void => {
    setStep(step - 1);
  };
  
  const proceedToDateSelection = (): void => {
    if (selectedService) {
      setStep(2);
    }
  };
  
  const proceedToRegistration = (): void => {
    if (selectedDate && selectedTime) {
      setStep(3);
    }
  };
  
  const isPastDate = (day: number): boolean => {
    const selectedDate = new Date(displayYear, displayMonth, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate < today;
  };
  
  const isToday = (day: number): boolean => {
    const today = new Date();
    return day === today.getDate() && 
           displayMonth === today.getMonth() && 
           displayYear === today.getFullYear();
  };
  
  const formatServiceTitle = (service: Service | null): string => {
    return service ? service.title : 'No service selected';
  };
  
  // Custom progress bar based on steps
  const getProgressStep = () => {
    if (step === 1) return 25;
    if (step === 2) return 50;
    if (step === 3) return 75;
    if (step === 4) return 100;
    return 0;
  };

  return (
    <motion.section 
      id="booking" 
      ref={sectionRef}
      className="py-5 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <motion.div 
          className="text-center mb-5"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="testimonia4-header text-center blog-hedaer-area heading2 text-center" >
        <h1 className="text-anime-style-1 fs-1 mb-4" > Book Your Consultation </h1>
        </div>
          <p className="lead mx-auto" style={{ color: styles.textMedium, maxWidth: '700px' }}>
            Schedule a consultation with our digital experts to grow your online presence and business.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="shadow border-0 heading1 mb-5 overflow-hidden">
            {/* Progress Bar */}
            <div className="px-4 pt-4">
              <ProgressBar 
                now={getProgressStep()} 
                style={{ 
                  height: '8px', 
                }}
                variant="none"
              >
                <ProgressBar 
                  now={getProgressStep()} 
                  style={{ 
                    backgroundColor: styles.primaryColor
                  }}
                />
              </ProgressBar>
              
              <Row className="mt-2 text-center heading1 g-0">
                <Col>
                  <div className={`rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-1`} 
                    style={{ 
                      width: '2rem', 
                      height: '2rem', 
                      backgroundColor: step >= 1 ? styles.primaryColor : '#DEE2E6',
                      color: step >= 1 ? 'white' : styles.textMedium 
                    }}>
                    1
                  </div>
                  <div className={`small ${step >= 1 ? 'fw-medium' : 'text-muted'}`}>Service</div>
                </Col>
                <Col>
                  <div className={`rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-1`}
                    style={{ 
                      width: '2rem', 
                      height: '2rem', 
                      backgroundColor: step >= 2 ? styles.primaryColor : '#DEE2E6',
                      color: step >= 2 ? 'white' : styles.textMedium 
                    }}>
                    2
                  </div>
                  <div className={`small ${step >= 2 ? 'fw-medium' : 'text-muted'}`}>Date & Time</div>
                </Col>
                <Col>
                  <div className={`rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-1`}
                    style={{ 
                      width: '2rem', 
                      height: '2rem', 
                      backgroundColor: step >= 3 ? styles.primaryColor : '#DEE2E6',
                      color: step >= 3 ? 'white' : styles.textMedium 
                    }}>
                    3
                  </div>
                  <div className={`small ${step >= 3 ? 'fw-medium' : 'text-muted'}`}>Registration</div>
                </Col>
                <Col>
                  <div className={`rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-1`}
                    style={{ 
                      width: '2rem', 
                      height: '2rem', 
                      backgroundColor: step >= 4 ? styles.primaryColor : '#DEE2E6',
                      color: step >= 4 ? 'white' : styles.textMedium 
                    }}>
                    4
                  </div>
                  <div className={`small ${step >= 4 ? 'fw-medium' : 'text-muted'}`}>Confirmation</div>
                </Col>
              </Row>
            </div>

            <Card.Body className="p-4 heading1">
              <AnimatePresence mode="wait">
                {/* Service Selection */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 50, opacity: 0 }}
                    transition={stepTransition}
                    className="service-selection heading1"
                  >
                    <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-4">
                      <div className="d-flex align-items-center">
                        <motion.div 
                          className="rounded p-2 me-2" 
                          style={{ backgroundColor: styles.primaryColor }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <FaGlobe className="text-white" />
                        </motion.div>
                        <h3 className="fs-4 fw-semibold m-0" style={{ color: styles.textDark }}>Select a Service</h3>
                      </div>
                      <div className="fs-5" style={{ color: styles.textDark }}>
                        {selectedService ? formatServiceTitle(selectedService) : 'No service selected'}
                      </div>
                    </div>
                    
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Row className="g-4">
                        {services.map((service) => (
                          <Col key={service.id} md={6} lg={4}>
                            <motion.div
                              variants={itemVariants}
                              whileHover={{ y: -5 }}
                            >
                              <Card 
                                className="h-100 cursor-pointer"
                                onClick={() => handleServiceSelect(service)}
                                style={{
                                  borderColor: selectedService?.id === service.id ? styles.primaryColor : '#dee2e6',
                                  backgroundColor: selectedService?.id === service.id ? styles.primaryLight : 'white',
                                  cursor: 'pointer',
                                  transition: 'all 0.2s'
                                }}
                              >
                                <Card.Body>
                                  <div className="d-flex align-items-center mb-2 heading1">
                                    <motion.div 
                                      className="rounded p-2 me-2 text-white heading1"  
                                      style={{ backgroundColor: styles.primaryColor }}
                                      whileHover={{ rotate: 15 }}
                                    >
                                      {service.icon}
                                    </motion.div>
                                    <h4 className="fs-5 m-0 heading1" style={{ color: styles.textDark }}>{service.title}</h4>
                                  </div>
                                  <p className="mb-3 heading1" style={{ color: styles.textMedium }}>{service.description}</p>
                                  <div className="d-flex justify-content-between align-items-center heading1">
                                    <span className="fw-bold" style={{ color: styles.textDark }}>{service.price}</span>
                                    {selectedService?.id === service.id && (
                                      <motion.span 
                                        className="rounded-circle p-1 d-inline-flex text-white" 
                                        style={{ backgroundColor: styles.primaryColor }}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                      >
                                        <FaCheck />
                                      </motion.span>
                                    )}
                                  </div>
                                </Card.Body>
                              </Card>
                            </motion.div>
                          </Col>
                        ))}
                      </Row>
                    </motion.div>
                    
                    <div className="d-flex justify-content-end mt-4">
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <button
                          onClick={proceedToDateSelection}
                          disabled={!selectedService}
                          style={{ 
                            background: selectedService ? styles.gradient : '#ADB5BD',
                            border: 'none',
                          }}
                          className="px-4 py-2 header-btn1 heading1"
                        >
                          Continue <span className="ms-2">→</span>
                        </button>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
                
                {/* Date & Time Selection */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 50, opacity: 0 }}
                    transition={stepTransition}
                    className="date-time-selection"
                  >
                    <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-4">
                      <motion.div whileHover={{ x: -3 }}>
                        <Button 
                          variant="link" 
                          onClick={goBack} 
                          className="p-0 d-flex align-items-center text-decoration-none"
                          style={{ color: styles.primaryColor }}
                        >
                          <FaArrowLeft className="me-1" /> Back
                        </Button>
                      </motion.div>
                      <div className="text-end">
                        <div className="small text-muted">Selected Service:</div>
                        <div className="fs-5" style={{ color: styles.textDark }}>{formatServiceTitle(selectedService)}</div>
                      </div>
                    </div>

                    <div className="d-flex align-items-center mb-4">
                      <motion.div 
                        className="rounded p-2 me-2" 
                        style={{ backgroundColor: styles.primaryColor }}
                        whileHover={{ rotate: 15 }}
                      >
                        <FaCalendarAlt className="text-white" />
                      </motion.div>
                      <h3 className="fs-4 fw-semibold m-0" style={{ color: styles.textDark }}>Select a Date & Time</h3>
                    </div>
                    
                    <Row>
                      <Col md={6} className="mb-4">
                        <motion.div
                          variants={cardVariants}
                        >
                          <Card className="h-100 border-0" style={{ backgroundColor: '#F8F9FA' }}>
                            <Card.Body>
                              <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="fs-5 fw-medium m-0" style={{ color: styles.textDark }}>
                                  {monthNames[displayMonth]} {displayYear}
                                </h4>
                                <div className="d-flex gap-1">
                                  <motion.div whileHover={{ scale: 1.1 }}>
                                    <Button
                                      variant="link"
                                      onClick={handlePrevMonth}
                                      className="p-2 d-flex align-items-center justify-content-center text-decoration-none"
                                      style={{ 
                                        color: displayMonth === currentDate.getMonth() && displayYear === currentDate.getFullYear()
                                          ? '#ADB5BD'
                                          : styles.primaryColor,
                                        width: '2rem',
                                        height: '2rem',
                                        padding: '0'
                                      }}
                                      disabled={displayMonth === currentDate.getMonth() && displayYear === currentDate.getFullYear()}
                                    >
                                      <FaChevronLeft />
                                    </Button>
                                  </motion.div>
                                  <motion.div whileHover={{ scale: 1.1 }}>
                                    <Button
                                      variant="link"
                                      onClick={handleNextMonth}
                                      className="p-2 d-flex align-items-center justify-content-center text-decoration-none"
                                      style={{ 
                                        color: styles.primaryColor,
                                        width: '2rem',
                                        height: '2rem',
                                        padding: '0'
                                      }}
                                    >
                                      <FaChevronRight />
                                    </Button>
                                  </motion.div>
                                </div>
                              </div>
                              
                              <Row className="text-center mb-2 g-0">
                                {dayNames.map(day => (
                                  <Col key={day}>
                                    <div className="small fw-medium" style={{ color: styles.textMedium }}>{day}</div>
                                  </Col>
                                ))}
                              </Row>
                              
                              <Row className="g-1 text-center">
                                {paddingDays.map((_, index) => (
                                  <Col key={`padding-${index}`}>
                                    <div style={{ height: '2.5rem' }}></div>
                                  </Col>
                                ))}
                                
                                {daysArray.map(day => {
                                  const past = isPastDate(day);
                                  const today = isToday(day);
                                  const isSelected = selectedDate === `${monthNames[displayMonth].substring(0, 3)}, ${day} ${displayYear}`;
                                  
                                  return (
                                    <Col key={day}>
                                      <motion.div
                                        whileHover={{ scale: past ? 1 : 1.05 }}
                                        whileTap={{ scale: past ? 1 : 0.95 }}
                                      >
                                        <Button
                                          variant={isSelected ? 'primary' : 'light'}
                                          onClick={() => handleDateClick(day)}
                                          disabled={past}
                                          className="rounded-circle p-0 d-flex align-items-center justify-content-center mx-auto"
                                          style={{
                                            width: '2.5rem',
                                            height: '2.5rem',
                                            fontSize: '0.875rem',
                                            backgroundColor: isSelected ? styles.primaryColor : 'transparent',
                                            border: today ? `2px solid ${styles.secondaryColor}` : 'none',
                                            color: isSelected ? 'white' : past ? '#ADB5BD' : styles.textDark,
                                            opacity: past ? 0.5 : 1,
                                          }}
                                        >
                                          {day}
                                        </Button>
                                      </motion.div>
                                    </Col>
                                  );
                                })}
                              </Row>
                            </Card.Body>
                          </Card>
                        </motion.div>
                      </Col>
                      
                      <Col md={6} className="mb-4">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="h-100"
                        >
                          <div className="d-flex align-items-center mb-3">
                            <FaClock className="me-2" style={{ color: styles.primaryColor }} />
                            <h4 className="fs-5 fw-medium m-0" style={{ color: styles.textDark }}>Available Times</h4>
                          </div>
                          
                          <div className="time-slots" style={{ maxHeight: '320px', overflowY: 'auto' }}>
                            <Row className="g-2">
                              {timeSlots.map((time, index) => (
                                <Col key={time} xs={6} md={6} lg={6}>
                                  <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.03 }}
                                  >
                                    <Button
                                      variant={selectedTime === time ? 'primary' : 'outline-secondary'}
                                      onClick={() => handleTimeClick(time)}
                                      className="w-100 py-2 text-center"
                                      style={{
                                        backgroundColor: selectedTime === time ? styles.primaryColor : 'white',
                                        borderColor: selectedTime === time ? styles.primaryColor : '#DEE2E6',
                                        color: selectedTime === time ? 'white' : styles.textDark,
                                      }}
                                    >
                                      {time}
                                    </Button>
                                  </motion.div>
                                </Col>
                              ))}
                            </Row>
                          </div>
                        </motion.div>
                      </Col>
                    </Row>
                    
                    <div className="d-flex justify-content-between align-items-center mt-4">
                      <div className="fs-5" style={{ color: styles.textDark }}>
                        {selectedDate 
                          ? `Selected: ${selectedDate} at ${selectedTime || '(no time selected)'}` 
                          : 'No date selected'}
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <button
                          onClick={proceedToRegistration}
                          disabled={!selectedDate || !selectedTime}
                          style={{ 
                            background: selectedDate && selectedTime ? styles.gradient : '#ADB5BD',
                            border: 'none',
                          }}
                          className="px-4 py-2 header-btn1"
                        >
                          Continue <span className="ms-2 ">→</span>
                        </button>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
                
                {/* Registration Form */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 50, opacity: 0 }}
                    transition={stepTransition}
                    className="registration-form"
                  >
                    <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-4">
                      <motion.div whileHover={{ x: -3 }}>
                        <Button 
                          variant="link" 
                          onClick={goBack} 
                          className="p-0 d-flex align-items-center text-decoration-none"
                          style={{ color: styles.primaryColor }}
                        >
                          <FaArrowLeft className="me-1" /> Back
                        </Button>
                      </motion.div>
                      <div className="text-end">
                        <div className="small text-muted">Your appointment:</div>
                        <div style={{ color: styles.textDark }}>{formatServiceTitle(selectedService)}</div>
                        <div style={{ color: styles.textDark }}>{selectedDate} at {selectedTime}</div>
                      </div>
                    </div>
                    
                    <h3 className="fs-4 fw-semibold mb-4" style={{ color: styles.textDark }}>
                      Your Information
                    </h3>
                    
                    <Form onSubmit={handleSubmit}>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-medium" style={{ color: styles.textDark }}>
                            Name <span className="text-danger">*</span>
                          </Form.Label>
                          <div className="position-relative">
                            <div 
                              className="position-absolute d-flex align-items-center" 
                              style={{ top: '50%', transform: 'translateY(-50%)', left: '1rem', zIndex: 10, color: '#6C757D' }}
                            >
                              <FaUserAlt />
                            </div>
                            <Form.Control
                              type="text"
                              id="name"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Full Name"
                              style={{ paddingLeft: '2.5rem' }}
                            />
                          </div>
                        </Form.Group>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-medium" style={{ color: styles.textDark }}>
                            Email Address <span className="text-danger">*</span>
                          </Form.Label>
                          <div className="position-relative">
                            <div 
                              className="position-absolute d-flex align-items-center" 
                              style={{ top: '50%', transform: 'translateY(-50%)', left: '1rem', zIndex: 10, color: '#6C757D' }}
                            >
                              <FaEnvelope />
                            </div>
                            <Form.Control
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="email@example.com"
                              style={{ paddingLeft: '2.5rem' }}
                            />
                          </div>
                        </Form.Group>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-medium" style={{ color: styles.textDark }}>
                            Mobile Number <span className="text-danger">*</span>
                          </Form.Label>
                          <div className="d-flex">
                            <Form.Select
                              value={formData.countryCode}
                              onChange={handleCountryCodeChange}
                              className="w-auto flex-shrink-0"
                              style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                            >
                              {countryCodes.map(country => (
                                <option key={country.code} value={country.code}>
                                  {country.code} {country.country}
                                </option>
                              ))}
                            </Form.Select>
                            <Form.Control
                              type="tel"
                              id="phone"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="Phone number"
                              style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                            />
                          </div>
                        </Form.Group>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Form.Group className="mb-4">
                          <Form.Label className="fw-medium" style={{ color: styles.textDark }}>
                            Additional Information
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={4}
                            placeholder="Tell us about your business and digital marketing goals"
                          />
                        </Form.Group>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 pt-3"
                      >
                        <p className="small mb-0" style={{ color: styles.textMedium }}>
                          By booking you agree to our <a href="#" style={{ color: styles.primaryColor }}>terms and conditions</a> and <a href="#" style={{ color: styles.primaryColor }}>privacy policy</a>.
                        </p>
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <button
                            type="submit"
                            style={{ 
                              background: styles.gradient,
                              border: 'none',
                            }}
                            className="px-4 py-3 d-flex align-items-center justify-content-center header-btn1"
                          >
                            <FaCheck className="me-2" /> Confirm Consultation
                          </button>
                        </motion.div>
                      </motion.div>
                    </Form>
                  </motion.div>
                )}
                
                {/* Confirmation */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="confirmation text-center p-3"
                  >
                    <motion.div 
                      className="d-flex align-items-center justify-content-center mx-auto mb-4 rounded-circle"
                      style={{ 
                        width: '4rem', 
                        height: '4rem', 
                        backgroundColor: styles.primaryLight 
                      }}
                      initial={{ rotate: -180, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                      <FaCheck style={{ color: styles.primaryColor, fontSize: '1.5rem' }} />
                    </motion.div>
                    
                    <motion.h3 
                      className="fs-3 fw-bold mb-2" 
                      style={{ color: styles.textDark }}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      Consultation Confirmed!
                    </motion.h3>
                    
                    <motion.p 
                      className="mb-4" 
                      style={{ color: styles.textMedium }}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      Thank you for booking with our digital marketing agency. We look forward to speaking with you about your digital marketing needs.
                    </motion.p>
                    
                    <motion.div 
                      className="bg-light rounded p-4 mb-4 text-start mx-auto" 
                      style={{ maxWidth: '500px' }}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h4 className="fs-5 fw-medium mb-3" style={{ color: styles.textDark }}>Appointment Details</h4>
                      
                      <div className="d-flex mb-2">
                        <div className="me-3" style={{ color: styles.textMedium, minWidth: '120px' }}>Service:</div>
                        <div style={{ color: styles.textDark }}>{selectedService?.title}</div>
                      </div>
                      
                      <div className="d-flex mb-2">
                        <div className="me-3" style={{ color: styles.textMedium, minWidth: '120px' }}>Date & Time:</div>
                        <div style={{ color: styles.textDark }}>{selectedDate} at {selectedTime}</div>
                      </div>
                      
                      <div className="d-flex mb-2">
                        <div className="me-3" style={{ color: styles.textMedium, minWidth: '120px' }}>Name:</div>
                        <div style={{ color: styles.textDark }}>{formData.name}</div>
                      </div>
                      
                      <div className="d-flex mb-2">
                        <div className="me-3" style={{ color: styles.textMedium, minWidth: '120px' }}>Email:</div>
                        <div style={{ color: styles.textDark }}>{formData.email}</div>
                      </div>
                      
                      <div className="d-flex">
                        <div className="me-3" style={{ color: styles.textMedium, minWidth: '120px' }}>Phone:</div>
                        <div style={{ color: styles.textDark }}>{formData.countryCode} {formData.phone}</div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="d-flex justify-content-center"
                    >
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <button
                          // variant="primary"
                          onClick={() => setStep(1)}
                          style={{ 
                            background: styles.gradient,
                            border: 'none'
                          }}
                          className="px-4 py-3 header-btn1"
                        >
                          Book Another Consultation
                        </button>
                      </motion.div>
                    </motion.div>
                    
                    <motion.div 
                      className="mt-4 pt-3 border-top"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <p className="small mb-2" style={{ color: styles.textMedium }}>
                        Need to make changes to your appointment?
                      </p>
                      <p className="small mb-0" style={{ color: styles.textMedium }}>
                        Contact us at <a href="mailto:support@digitalagency.com" style={{ color: styles.primaryColor }}>support@digitalagency.com</a> or call <a href="tel:+18005551234" style={{ color: styles.primaryColor }}>+1 (800) 555-1234</a>
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card.Body>
          </Card>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default BookingSection;