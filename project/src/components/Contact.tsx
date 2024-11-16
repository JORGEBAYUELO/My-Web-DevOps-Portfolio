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
    <section id="contact" className="py-20 bg-mantle">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-text mb-12 text-center">
          Get In Touch
        </h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-subtext1 mb-2">
              Name
            </label>
            <input
              {...register('name', { required: 'Name is required' })}
              className="w-full px-4 py-3 rounded-lg bg-base border border-surface0 text-text focus:outline-none focus:border-mauve transition-colors"
              placeholder="Your name"
            />
            {errors.name && (
              <span className="text-red text-sm mt-1">{errors.name.message}</span>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-subtext1 mb-2">
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
              className="w-full px-4 py-3 rounded-lg bg-base border border-surface0 text-text focus:outline-none focus:border-mauve transition-colors"
              placeholder="your@email.com"
            />
            {errors.email && (
              <span className="text-red text-sm mt-1">{errors.email.message}</span>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-subtext1 mb-2">
              Message
            </label>
            <textarea
              {...register('message', { required: 'Message is required' })}
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-base border border-surface0 text-text focus:outline-none focus:border-mauve transition-colors"
              placeholder="Your message"
            />
            {errors.message && (
              <span className="text-red text-sm mt-1">{errors.message.message}</span>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-mauve text-base rounded-lg font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center space-x-2 disabled:opacity-70"
          >
            {isSubmitting ? (
              <div className="w-6 h-6 border-2 border-base border-t-transparent rounded-full animate-spin" />
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