import { useState, useEffect } from "react";
import {
  X,
  CheckCircle,
  MessageSquare,
  Phone,
  AlertCircle,
  Send,
} from "lucide-react";
import { COMPANY_DETAILS, PROJECTS_DATA } from "../data/projectsData";
const EnquiryModal = ({ isOpen, onClose, defaultProjectName }) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [propertyInterest, setPropertyInterest] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (defaultProjectName) {
      setPropertyInterest(defaultProjectName);
    } else {
      setPropertyInterest(PROJECTS_DATA[0].name);
    }
  }, [defaultProjectName, isOpen]);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setIsSuccess(false);
      setErrors({});
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  if (!isOpen) return null;
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
      newErrors.phone = "Please provide your contact phone number";
    } else if (!validatePhone(phone)) {
      newErrors.phone =
        "Please enter a valid 10-digit Indian mobile number (starts with 6-9)";
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = `VRJ-${Math.floor(1e5 + Math.random() * 9e5)}`;
      setReferenceId(generatedRef);
      setIsSuccess(true);
      try {
        const stored = JSON.parse(
          localStorage.getItem("vrajraj_enquiries") || "[]",
        );
        stored.push({
          referenceId: generatedRef,
          fullName,
          phone,
          email,
          propertyInterest,
          message,
          timestamp: /* @__PURE__ */ new Date().toISOString(),
        });
        localStorage.setItem("vrajraj_enquiries", JSON.stringify(stored));
      } catch {}
    }, 600);
  };
  const whatsappMessage = encodeURIComponent(
    `Hello Vrajraj Developers, I am interested in exploring ${propertyInterest || "your developments"}. Could you please share project details and brochure? My name is ${fullName || "a prospective buyer"}.`,
  );
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/65 p-4 backdrop-blur-xs animate-fadeIn"
    >
      <div className="relative flex max-h-[85dvh] w-full max-w-lg flex-col overflow-hidden rounded-sm border border-[#E9E5DC] bg-[#F7F6F0] shadow-2xl">
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between bg-[#234C3B] px-5 py-4 text-white">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#B69A64] font-semibold block">
              Official Enquiry
            </span>
            <h3 className="text-xl font-bold tracking-tight">
              Connect with Vrajraj Advisory
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#DCE5D9] hover:text-white hover:bg-white/10 rounded-sm transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="min-h-0 overflow-y-auto p-5 sm:p-6">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-[#356B4D]/15 text-[#356B4D] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-[#234C3B]">
                  Enquiry Received
                </h4>
                <p className="text-xs text-[#292D2A]/70 uppercase tracking-wider font-semibold">
                  Reference ID:{" "}
                  <span className="text-[#356B4D]">{referenceId}</span>
                </p>
              </div>
              <p className="text-sm text-[#292D2A]/85 leading-relaxed max-w-md mx-auto">
                Thank you,{" "}
                <strong className="text-[#234C3B]">{fullName}</strong>. Our
                property consultant will get in touch with you at{" "}
                <strong className="tabular-nums">{phone}</strong> within 24
                business hours to share available project information and
                schedule a site visit.
              </p>

              <div className="pt-4 border-t border-[#E9E5DC] flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold bg-[#25D366] text-white rounded-sm hover:opacity-95 transition-opacity"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat on WhatsApp Now
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 text-xs font-semibold bg-[#234C3B] text-white rounded-sm hover:bg-[#356B4D] transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs sm:text-sm text-[#292D2A]/80 leading-relaxed">
                Provide your contact details to request available project
                information, pricing, and a site visit.
              </p>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-medium text-[#292D2A] mb-1">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Ramesh Patel"
                  className={`w-full px-3.5 py-2.5 text-sm bg-white border ${errors.fullName ? "border-red-500" : "border-[#E9E5DC]"} rounded-sm focus:outline-none focus:ring-1 focus:ring-[#356B4D] focus:border-[#356B4D] transition-colors`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-medium text-[#292D2A] mb-1">
                  Indian Mobile Number <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs font-medium text-[#292D2A]/60 select-none">
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
                    className={`w-full pl-12 pr-3.5 py-2.5 text-sm bg-white border ${errors.phone ? "border-red-500" : "border-[#E9E5DC]"} rounded-sm focus:outline-none focus:ring-1 focus:ring-[#356B4D] focus:border-[#356B4D] transition-colors tabular-nums`}
                  />
                </div>
                {errors.phone ? (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.phone}
                  </p>
                ) : (
                  <p className="mt-1 text-[11px] text-[#292D2A]/60">
                    We will send project brochures and updates via SMS/WhatsApp.
                  </p>
                )}
              </div>

              {/* Email (Optional) */}
              <div>
                <label className="block text-xs font-medium text-[#292D2A] mb-1">
                  Email Address{" "}
                  <span className="text-xs text-[#292D2A]/50">(Optional)</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ramesh@example.com"
                  className={`w-full px-3.5 py-2.5 text-sm bg-white border ${errors.email ? "border-red-500" : "border-[#E9E5DC]"} rounded-sm focus:outline-none focus:ring-1 focus:ring-[#356B4D] focus:border-[#356B4D] transition-colors`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Property of Interest */}
              <div>
                <label className="block text-xs font-medium text-[#292D2A] mb-1">
                  Project of Interest
                </label>
                <select
                  value={propertyInterest}
                  onChange={(e) => setPropertyInterest(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E9E5DC] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#356B4D] focus:border-[#356B4D] transition-colors"
                >
                  {PROJECTS_DATA.map((proj) => (
                    <option key={proj.id} value={proj.name}>
                      {proj.name}
                      {proj.nameHindi ? ` · ${proj.nameHindi}` : ""}
                    </option>
                  ))}
                  <option value="General Property Consultation">
                    General Property Consultation / Land Advisory
                  </option>
                </select>
              </div>

              {/* Optional Message */}
              <div>
                <label className="block text-xs font-medium text-[#292D2A] mb-1">
                  Specific Requirements / Preferred Timing{" "}
                  <span className="text-xs text-[#292D2A]/50">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us which project information you would like"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E9E5DC] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#356B4D] focus:border-[#356B4D] transition-colors resize-none"
                />
              </div>

              {/* Privacy Notice */}
              <p className="text-[11px] text-[#292D2A]/65 leading-relaxed pt-1">
                Privacy Assurance: Your contact details are stored securely and
                used exclusively by Vrajraj Developers to communicate project
                details. No spam or third-party sharing.
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#234C3B] hover:bg-[#356B4D] rounded-sm transition-colors cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Project Enquiry
                    </>
                  )}
                </button>

                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-[#234C3B] bg-[#E9E5DC] hover:bg-[#DCE5D9] rounded-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#356B4D]" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="text-center pt-2">
                <a
                  href={`tel:${COMPANY_DETAILS.contacts[0].phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-1.5 text-xs text-[#234C3B] hover:underline font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-[#356B4D]" />
                  Or call {COMPANY_DETAILS.contacts[0].name} at{" "}
                  {COMPANY_DETAILS.contacts[0].phone}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
export { EnquiryModal };
