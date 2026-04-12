import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <section id="contact" className="py-24 relative">

      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-12 text-center">
          Get In Touch
        </h2>
        
        {/* FORM CONTAINER */}
        <form onSubmit={handleSubmit(onSubmit)} className="glass glass-elevated relative rounded-2xl p-6 md:p-8 space-y-6">

          {/* SINGLE CENTER LIGHT */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none z-10">
          
            <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[500px] h-[260px] bg-accent/5 blur-[120px] rounded-full" />

          </div>
          {/* NAME */}
          <div>
            <label className="block text-subtext1 mb-2">
              Name
            </label>
            <input
              {...register('name', { required: 'Name is required' })}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text focus:outline-none focus:border-accent focus:shadow-glow transition-all"
              placeholder="Your name"
            />
            {errors.name && (
              <span className="text-red text-sm mt-1">{errors.name.message}</span>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-subtext1 mb-2">
              Email
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text focus:outline-none focus:border-accent focus:shadow-glow transition-all"
              placeholder="your@email.com"
            />
            {errors.email && (
              <span className="text-red text-sm mt-1">{errors.email.message}</span>
            )}
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-subtext1 mb-2">
              Message
            </label>
            <textarea
              {...register('message', { required: 'Message is required' })}
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text focus:outline-none focus:border-accent focus:shadow-glow transition-all resize-none"
              placeholder="Your message"
            />
            {errors.message && (
              <span className="text-red text-sm mt-1">{errors.message.message}</span>
            )}
          </div>

          {/* BUTTON */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 glass glass-hover glass-primary font-medium flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {isSubmitting ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>Send Message</span>
                <Send size={18} />
              </>
            )}
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
