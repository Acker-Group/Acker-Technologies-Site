"use client"

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const InputField = ({ id, name, type = 'text', placeholder, value, onChange, error }: { id: string, name: string, type?: string, placeholder: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, error: string }) => (
  <div className="relative">
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full bg-white dark:bg-gray-900/50 border rounded-lg px-4 py-3 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 transition-all duration-300 ${
        error
          ? 'border-red-500 focus:ring-red-500/50'
          : 'border-gray-200 dark:border-gray-700 focus:ring-blue-500/50'
      }`}
    />
    {error && <p className="mt-2 text-sm text-red-500 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{error}</p>}
  </div>
)

const TextareaField = ({ id, name, placeholder, value, onChange, error }: { id: string, name: string, placeholder: string, value: string, onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void, error: string }) => (
  <div className="relative">
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={5}
      className={`w-full bg-white dark:bg-gray-900/50 border rounded-lg px-4 py-3 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 resize-none transition-all duration-300 ${
        error
          ? 'border-red-500 focus:ring-red-500/50'
          : 'border-gray-200 dark:border-gray-700 focus:ring-blue-500/50'
      }`}
    />
    {error && <p className="mt-2 text-sm text-red-500 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{error}</p>}
  </div>
)

export default function ContactPageClient() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const validate = () => {
    const tempErrors: Partial<FormData> = {}
    if (!formData.name) tempErrors.name = "Name is required."
    if (!formData.email) {
      tempErrors.email = "Email is required."
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid."
    }
    if (!formData.subject) tempErrors.subject = "Subject is required."
    if (!formData.message) tempErrors.message = "Message is required."
    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setIsSubmitting(true)
      setSubmitStatus(null)
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          setSubmitStatus('success')
          setFormData({ name: '', email: '', subject: '', message: '' })
        } else {
          setSubmitStatus('error')
        }
      } catch (error) {
        console.error('Form submission error:', error)
        setSubmitStatus('error')
      } finally {
        setIsSubmitting(false)
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const fieldName = e.target.name as keyof FormData
    const value = e.target.value
    setFormData(prev => ({ ...prev, [fieldName]: value } as FormData))
    if (errors[fieldName]) {
      setErrors(prev => ({ ...prev, [fieldName]: undefined }))
    }
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <div className="bg-transparent text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            Let&apos;s Connect
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Have a project in mind, a question about our ecosystem, or just want to say hello? We&apos;d love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email Us</h3>
                      <p className="text-gray-600 dark:text-gray-400">Reach out for inquiries and support.</p>
                      <a href="mailto:Contact@Acker-Technologies.com" className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all">Contact@Acker-Technologies.com</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our Location</h3>
                      <p className="text-gray-600 dark:text-gray-400">Centurion, Gauteng, South Africa</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700"
            >
              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-green-500 mx-auto mb-6" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Message Sent!</h2>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">Thank you for reaching out. We&apos;ll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <InputField id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} error={errors.name || ''} />
                  <InputField id="email" name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} error={errors.email || ''} />
                  <InputField id="subject" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} error={errors.subject || ''} />
                  <TextareaField id="message" name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} error={errors.message || ''} />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="w-5 h-5 mr-3 border-t-2 border-b-2 border-white rounded-full"
                        ></motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-3" />
                        Send Message
                      </>
                    )}
                  </button>
                  {submitStatus === 'error' && (
                    <p className="mt-4 text-sm text-red-500 flex items-center justify-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      Something went wrong. Please try again later.
                    </p>
                  )}
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

