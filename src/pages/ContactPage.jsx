import { useState } from "react";
import {
  MapPin,
  Phone,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { COMPANY_DETAILS } from "../data/projectsData";
import { InteractiveMap } from "../components/InteractiveMap";
const ContactPage = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Property Enquiry");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const validatePhone = (num) => {
    const cleaned = num.replace(/\D/g, "");
    return /^[6-9]\d{9}$/.test(cleaned);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    }
    if (!phone.trim()) {
      newErrors.phone = "Please provide your mobile phone number";
    } else if (!validatePhone(phone)) {
      newErrors.phone = "Please enter a valid 10-digit Indian phone number";
    }
    if (!email.trim()) {
      newErrors.email = "Please provide your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email format";
    }
    if (!message.trim()) {
      newErrors.message = "Please enter your message or query";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };
  const whatsappMessage = encodeURIComponent(
    `Hello Vrajraj Developers, I am writing via the Contact page of your website to inquire regarding property opportunities.`,
  );
  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-12">
      {/* =========================================================================
       A. Contact Hero
       ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#E9E5DC] pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#356B4D] block mb-2">
            Reach Out Directly
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#234C3B]">
            Let's Start a Conversation
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#292D2A]/80 max-w-2xl leading-relaxed">
            Connect with Vrajraj Developers to learn more about our projects and
            property opportunities. Our sales and engineering teams welcome your
            visit to our corporate office.
          </p>
        </div>
      </section>

      {/* =========================================================================
       B & C. Contact Information & Contact Form
       ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-7 sm:p-8 rounded-xs border border-[#E9E5DC] shadow-xs space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#356B4D] block">
                Office Information
              </span>

              {/* Address */}
              <div className="flex items-start gap-3.5 text-sm text-[#292D2A]/85">
                <MapPin className="w-5 h-5 text-[#356B4D] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#234C3B] mb-1">
                    Corporate & Sales Office
                  </h4>
                  <p className="leading-relaxed">
                    {COMPANY_DETAILS.corporateOffice.line1}
                    <br />
                    {COMPANY_DETAILS.corporateOffice.line2}
                    <br />
                    {COMPANY_DETAILS.corporateOffice.city},{" "}
                    {COMPANY_DETAILS.corporateOffice.state} –{" "}
                    {COMPANY_DETAILS.corporateOffice.pincode}
                  </p>
                </div>
              </div>

              {COMPANY_DETAILS.contacts.map((contact) => (
                <div
                  key={contact.phone}
                  className="flex items-start gap-3.5 text-sm text-[#292D2A]/85 border-t border-[#E9E5DC] pt-5"
                >
                  <Phone className="w-5 h-5 text-[#356B4D] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#234C3B] mb-1">
                      {contact.name}
                    </h4>
                    <a
                      href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                      className="hover:text-[#356B4D] font-medium tabular-nums"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>
              ))}

              {/* Direct WhatsApp Action */}
              <div className="pt-2 border-t border-[#E9E5DC]">
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold bg-[#25D366] text-white rounded-xs hover:opacity-95 transition-opacity"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-xs border border-[#E9E5DC] shadow-xs">
            <span className="text-xs font-bold uppercase tracking-widest text-[#356B4D] block mb-1">
              Message Form
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#234C3B] mb-2">
              Send Us a Detailed Message
            </h2>
            <p className="text-xs sm:text-sm text-[#292D2A]/75 mb-6 leading-relaxed">
              Fill out the form below and an authorized member of our property
              advisory team will review your query and respond shortly.
            </p>

            {isSubmitted ? (
              <div className="py-10 text-center space-y-4 bg-[#F7F6F0] rounded-xs p-6 border border-[#356B4D]/30">
                <div className="w-12 h-12 bg-[#356B4D]/20 text-[#356B4D] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#234C3B]">
                  Message Transmitted
                </h3>
                <p className="text-xs sm:text-sm text-[#292D2A]/85 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{fullName}</strong>. Your communication
                  regarding "{subject}" has been delivered to our administrative
                  team. We will review and reach back via email or phone at{" "}
                  <strong>{phone}</strong>.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setMessage("");
                    }}
                    className="px-5 py-2 text-xs font-semibold bg-[#234C3B] text-white rounded-xs hover:bg-[#356B4D] transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#292D2A] mb-1">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Anand Mehta"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F7F6F0]/50 border ${errors.fullName ? "border-red-500" : "border-[#E9E5DC]"} rounded-xs focus:outline-none focus:ring-1 focus:ring-[#356B4D]`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-[#292D2A] mb-1">
                      Phone Number <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-xs text-[#292D2A]/60 font-medium select-none">
                        +91
                      </span>
                      <input
                        type="tel"
                        maxLength={10}
                        value={phone}
                        onChange={(e) =>
                          setPhone(e.target.value.replace(/\D/g, ""))
                        }
                        placeholder="89891 21000"
                        className={`w-full pl-11 pr-3.5 py-2.5 text-xs sm:text-sm bg-[#F7F6F0]/50 border ${errors.phone ? "border-red-500" : "border-[#E9E5DC]"} rounded-xs focus:outline-none focus:ring-1 focus:ring-[#356B4D] tabular-nums`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-[#292D2A] mb-1">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="anand@example.com"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F7F6F0]/50 border ${errors.email ? "border-red-500" : "border-[#E9E5DC]"} rounded-xs focus:outline-none focus:ring-1 focus:ring-[#356B4D]`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-semibold text-[#292D2A] mb-1">
                      Subject
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F7F6F0]/50 border border-[#E9E5DC] rounded-xs focus:outline-none focus:ring-1 focus:ring-[#356B4D]"
                    >
                      <option value="Residential Property Enquiry">
                        Residential Property Enquiry
                      </option>
                      <option value="Plotted Villa Development Inquiry">
                        Plotted Villa Development Inquiry
                      </option>
                      <option value="Commercial & Retail Showroom Inquiry">
                        Commercial & Retail Showroom Inquiry
                      </option>
                      <option value="Land Joint-Venture / Proposal">
                        Land Joint-Venture / Proposal
                      </option>
                      <option value="General Corporate Communication">
                        General Corporate Communication
                      </option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#292D2A] mb-1">
                    Your Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Please specify your query or preferred location in detail..."
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F7F6F0]/50 border ${errors.message ? "border-red-500" : "border-[#E9E5DC]"} rounded-xs focus:outline-none focus:ring-1 focus:ring-[#356B4D] resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#234C3B] hover:bg-[#356B4D] rounded-xs transition-colors cursor-pointer disabled:opacity-70 shadow-xs"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {isSubmitting
                        ? "Transmitting Message..."
                        : "Send Message"}
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
       D. Corporate Office Location Map
       ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#356B4D] block mb-1">
            Find Our Office
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#234C3B]">
            Corporate Office Map
          </h2>
          <p className="text-xs sm:text-sm text-[#292D2A]/80 mt-1">
            Find our registered office in Khargone, Madhya Pradesh.
          </p>
        </div>

        <InteractiveMap
          name="Shri Vrajraj Developers 01"
          address={`${COMPANY_DETAILS.corporateOffice.line1}, ${COMPANY_DETAILS.corporateOffice.line2}`}
          city={COMPANY_DETAILS.corporateOffice.city}
          state={COMPANY_DETAILS.corporateOffice.state}
          pincode={COMPANY_DETAILS.corporateOffice.pincode}
          coordinates={{ lat: 21.823, lng: 75.613 }}
          landmarks={[]}
        />
      </section>

      {/* =========================================================================
       E. Final Invitation CTA
       ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#234C3B] text-white rounded-xs p-8 sm:p-12 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold">
            We Welcome Your Visit
          </h3>
          <p className="text-xs sm:text-sm text-[#DCE5D9] max-w-xl mx-auto leading-relaxed font-light">
            Whether you want to learn about a listed development, request
            available project documents, or discuss a custom requirement, our
            advisors are ready to assist.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <a
              href={`tel:${COMPANY_DETAILS.contacts[0].phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#234C3B] bg-white hover:bg-[#F7F6F0] rounded-xs shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>
                Call {COMPANY_DETAILS.contacts[0].name}:{" "}
                {COMPANY_DETAILS.contacts[0].phone}
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export { ContactPage };
