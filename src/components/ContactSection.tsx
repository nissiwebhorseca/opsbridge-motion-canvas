
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear errors when field is edited
    if (formErrors[name]) {
      setFormErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };
  
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouchedFields(prev => ({ ...prev, [name]: true }));
    validateField(name, formData[name as keyof typeof formData]);
  };
  
  const validateField = (name: string, value: string) => {
    let error = "";
    
    switch (name) {
      case 'name':
        if (!value.trim()) error = "Name is required";
        break;
      case 'email':
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address";
        }
        break;
      case 'message':
        if (!value.trim()) error = "Message is required";
        break;
    }
    
    if (error) {
      setFormErrors(prev => ({ ...prev, [name]: error }));
      return false;
    }
    
    return true;
  };
  
  const validateForm = () => {
    const errors: Record<string, string> = {};
    let isValid = true;
    
    // Validate all fields
    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }
    
    setFormErrors(errors);
    setTouchedFields({
      name: true,
      email: true,
      message: true
    });
    
    return isValid;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Add shake animation to fields with errors
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Show success toast
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
      duration: 5000,
    });
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after short delay
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 2000);
  };
  
  // Create ripple effect
  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    const rect = button.getBoundingClientRect();
    
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${e.clientX - rect.left - radius}px`;
    ripple.style.top = `${e.clientY - rect.top - radius}px`;
    ripple.classList.add('ripple');
    
    // Remove existing ripples
    const existingRipple = button.querySelector('.ripple');
    if (existingRipple) {
      existingRipple.remove();
    }
    
    button.appendChild(ripple);
    
    // Remove ripple after animation completes
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };
  
  return (
    <section id="contact" className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <motion.h2 
              className="section-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              Get Your Back Office Out Of Your Way
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Schedule your free consult and let us help you move faster and smarter.
            </motion.p>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 5 }}
              >
                <Mail className="h-6 w-6 text-opsbridge-blue mr-3" />
                <a 
                  href="mailto:info@opsbridge.com" 
                  className="text-gray-300 hover:text-white transition-colors relative group"
                >
                  info@opsbridge.com
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-opsbridge-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 5 }}
              >
                <Phone className="h-6 w-6 text-opsbridge-blue mr-3" />
                <span className="text-gray-300">Book a call directly on our website</span>
              </motion.div>
              
              <motion.div 
                className="pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="font-bold text-xl mb-2 text-white">Privacy and security:</h3>
                <p className="text-gray-300">
                  OpsBridge uses secure cloud tools, signs confidentiality agreements, and follows best practices in data protection and operational integrity.
                </p>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div
            className="card"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <motion.div
                  animate={formErrors.name && touchedFields.name ? { x: [0, -10, 10, -5, 0] } : {}}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-opsbridge-navy/50 border ${
                      formErrors.name && touchedFields.name 
                        ? 'border-red-500 input-error'
                        : touchedFields.name && !formErrors.name
                        ? 'border-green-500'
                        : 'border-white/10'
                    } rounded-md px-4 py-3 text-white focus:outline-none focus:border-opsbridge-blue transition-colors`}
                  />
                </motion.div>
                {formErrors.name && touchedFields.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {formErrors.name}
                  </motion.p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Your Email
                </label>
                <motion.div
                  animate={formErrors.email && touchedFields.email ? { x: [0, -10, 10, -5, 0] } : {}}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-opsbridge-navy/50 border ${
                      formErrors.email && touchedFields.email 
                        ? 'border-red-500 input-error'
                        : touchedFields.email && !formErrors.email
                        ? 'border-green-500'
                        : 'border-white/10'
                    } rounded-md px-4 py-3 text-white focus:outline-none focus:border-opsbridge-blue transition-colors`}
                  />
                </motion.div>
                {formErrors.email && touchedFields.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {formErrors.email}
                  </motion.p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <motion.div
                  animate={formErrors.message && touchedFields.message ? { x: [0, -10, 10, -5, 0] } : {}}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-opsbridge-navy/50 border ${
                      formErrors.message && touchedFields.message 
                        ? 'border-red-500 input-error'
                        : touchedFields.message && !formErrors.message
                        ? 'border-green-500'
                        : 'border-white/10'
                    } rounded-md px-4 py-3 text-white focus:outline-none focus:border-opsbridge-blue transition-colors`}
                  />
                </motion.div>
                {formErrors.message && touchedFields.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {formErrors.message}
                  </motion.p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="cta-button w-full flex justify-center items-center relative overflow-hidden ripple-container"
                onClick={createRipple}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Send className="h-5 w-5 mr-2" />
                  </motion.div>
                ) : isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 mr-2" /> Sent Successfully
                  </motion.div>
                ) : (
                  <span>Schedule Your Free Consult</span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
