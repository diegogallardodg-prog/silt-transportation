import { useState } from "react";
import { useForm } from "react-hook-form";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const weightOptions = [
  { value: "", label: "Select estimated weight..." },
  { value: "<10k", label: "Under 10,000 lbs" },
  { value: "10-50k", label: "10,000 – 50,000 lbs" },
  { value: "50-100k", label: "50,000 – 100,000 lbs" },
  { value: "100k+", label: "100,000+ lbs" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const animRef = useScrollAnimation();

  const onSubmit = (data) => {
    console.log("Quote request:", data);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-display text-accent text-sm font-semibold tracking-[0.4em] uppercase mb-4">
            Get Started
          </p>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white">
            LET'S MOVE{" "}
            <span className="text-accent">YOUR LOAD</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            Tell us about your cargo. We'll build the perfect transport solution.
          </p>
        </div>

        <div ref={animRef} className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Contact Info */}
          <div className="animate-item lg:col-span-2 flex flex-col gap-8">
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-6">
                Contact Us Directly
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent text-lg">📞</span>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wide mb-0.5">Phone</p>
                    <p className="text-white font-medium">(800) 555-SILT</p>
                    <p className="text-muted text-sm">24/7 Dispatch Available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent text-lg">✉️</span>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wide mb-0.5">Email</p>
                    <p className="text-white font-medium">dispatch@silttransportation.com</p>
                    <p className="text-muted text-sm">Response within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent text-lg">📍</span>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wide mb-0.5">Headquarters</p>
                    <p className="text-white font-medium">1234 Freight Way</p>
                    <p className="text-muted text-sm">Dallas, TX 75201</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency */}
            <div className="bg-accent/5 border border-accent/20 p-5">
              <p className="font-display font-bold text-accent text-sm tracking-wide uppercase mb-2">
                Emergency Dispatch
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                Critical loads don't keep business hours. Our 24/7 emergency
                line connects you directly to a senior dispatcher.
              </p>
              <p className="text-accent font-bold mt-3">(800) 911-SILT</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="animate-item lg:col-span-3">
            {submitted ? (
              <div className="bg-accent/10 border border-accent/30 p-10 text-center flex flex-col items-center gap-4 h-full justify-center">
                <div className="text-5xl">✅</div>
                <h3 className="font-display font-bold text-2xl text-accent">
                  Quote Request Received
                </h3>
                <p className="text-white/60 max-w-sm">
                  Our team will review your load details and respond within 2 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="border border-accent/50 text-accent text-sm font-bold px-6 py-2.5 hover:bg-accent hover:text-black transition-all mt-2"
                >
                  SUBMIT ANOTHER REQUEST
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-card border border-white/10 p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs text-white/50 uppercase tracking-wide mb-2">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      placeholder="John Smith"
                      className="w-full bg-black/50 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-accent/60 transition placeholder-white/20"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs text-white/50 uppercase tracking-wide mb-2">
                      Company Name <span className="text-accent">*</span>
                    </label>
                    <input
                      {...register("company", { required: "Company is required" })}
                      placeholder="Acme Industrial LLC"
                      className="w-full bg-black/50 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-accent/60 transition placeholder-white/20"
                    />
                    {errors.company && (
                      <p className="text-red-400 text-xs mt-1">{errors.company.message}</p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-wide mb-2">
                    Phone Number <span className="text-accent">*</span>
                  </label>
                  <input
                    {...register("phone", { required: "Phone is required" })}
                    placeholder="(555) 000-0000"
                    type="tel"
                    className="w-full bg-black/50 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-accent/60 transition placeholder-white/20"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>

                {/* Load Description */}
                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-wide mb-2">
                    Load Description <span className="text-accent">*</span>
                  </label>
                  <textarea
                    {...register("description", { required: "Load description is required" })}
                    placeholder="Describe your cargo — type, dimensions, special requirements..."
                    rows={3}
                    className="w-full bg-black/50 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-accent/60 transition placeholder-white/20 resize-none"
                  />
                  {errors.description && (
                    <p className="text-red-400 text-xs mt-1">{errors.description.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Origin */}
                  <div>
                    <label className="block text-xs text-white/50 uppercase tracking-wide mb-2">
                      Origin City/State <span className="text-accent">*</span>
                    </label>
                    <input
                      {...register("origin", { required: "Origin is required" })}
                      placeholder="Houston, TX"
                      className="w-full bg-black/50 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-accent/60 transition placeholder-white/20"
                    />
                    {errors.origin && (
                      <p className="text-red-400 text-xs mt-1">{errors.origin.message}</p>
                    )}
                  </div>

                  {/* Destination */}
                  <div>
                    <label className="block text-xs text-white/50 uppercase tracking-wide mb-2">
                      Destination City/State <span className="text-accent">*</span>
                    </label>
                    <input
                      {...register("destination", { required: "Destination is required" })}
                      placeholder="Denver, CO"
                      className="w-full bg-black/50 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-accent/60 transition placeholder-white/20"
                    />
                    {errors.destination && (
                      <p className="text-red-400 text-xs mt-1">{errors.destination.message}</p>
                    )}
                  </div>
                </div>

                {/* Weight */}
                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-wide mb-2">
                    Estimated Weight <span className="text-accent">*</span>
                  </label>
                  <select
                    {...register("weight", { required: "Please select a weight range" })}
                    className="w-full bg-black/50 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-accent/60 transition appearance-none cursor-pointer"
                  >
                    {weightOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-black">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.weight && (
                    <p className="text-red-400 text-xs mt-1">{errors.weight.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-black font-bold py-4 text-base tracking-wide hover:bg-accent/90 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 mt-2 pulse-glow"
                >
                  REQUEST A QUOTE
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
