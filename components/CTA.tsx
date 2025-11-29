
import React, { useState } from 'react';
import { Cpu, CheckCircle, AlertCircle, Loader2, Send } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const CTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    phone: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Validation Logic
  const validateField = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'name':
        if (value.length < 3) error = 'El nombre debe tener al menos 3 caracteres.';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) error = 'Ingresa un email válido.';
        break;
      case 'business':
        if (value.length < 2) error = 'El nombre del local es requerido.';
        break;
      case 'phone':
        if (value.length > 0 && value.length < 8) error = 'Número de teléfono inválido.';
        break;
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation before submit
    const newErrors: Record<string, string> = {};
    let hasError = false;
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) {
        newErrors[key] = error;
        hasError = true;
      } else if (!formData[key as keyof typeof formData] && key !== 'phone') {
        newErrors[key] = 'Este campo es obligatorio.';
        hasError = true;
      }
    });

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    // Simulate API Call
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', business: '', phone: '' });
    }, 2000);
  };

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-bone relative overflow-hidden border-t border-stone-200 text-forest">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Box */}
        <div className="grid lg:grid-cols-2 bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-xl">
          
          {/* Left Content (Text) */}
          <RevealOnScroll className="h-full">
            <div className="p-10 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-stone-100 h-full">
                <div className="flex items-center gap-2 mb-8">
                <Cpu className="w-4 h-4 text-brand" />
                <span className="text-[10px] font-mono font-medium tracking-widest text-brand uppercase">Core Operating System</span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter text-forest mb-6 leading-[0.95]">
                Control Total.<br />
                <span className="text-stone-400">Cero Fricción.</span>
                </h2>

                <p className="text-forest/60 font-normal text-lg mb-8 max-w-md leading-relaxed">
                Sumate a los emprendedores gastronómicos que profesionalizaron su gestión. Completa el formulario y un especialista te contactará para armar un plan a tu medida.
                </p>

                <div className="inline-flex items-center gap-3 px-4 py-3 bg-stone-50 rounded-lg border border-stone-100 max-w-max mt-auto">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-xs font-medium text-forest/70">Offline-First Architecture (Nunca dejás de facturar).</span>
                </div>
            </div>
          </RevealOnScroll>

          {/* Right Content (Form) */}
          <RevealOnScroll delay={200} className="h-full">
            <div className="bg-stone-50/50 p-10 lg:p-16 flex flex-col justify-center h-full">
                
                {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-forest mb-2">¡Solicitud Enviada!</h3>
                    <p className="text-forest/60 max-w-xs mx-auto">
                    Hemos recibido tus datos. Uno de nuestros expertos te contactará en las próximas 24 horas.
                    </p>
                    <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-sm font-medium text-brand hover:underline"
                    >
                    Enviar otra consulta
                    </button>
                </div>
                ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="mb-2">
                    <h3 className="text-xl font-bold text-forest">Cotizar ahora</h3>
                    <p className="text-sm text-forest/50">Recibí una demo personalizada y precios.</p>
                    </div>

                    {/* Name Field */}
                    <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-forest/60">Nombre Completo</label>
                    <div className="relative">
                        <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-white border ${errors.name ? 'border-red-400 focus:border-red-500' : 'border-stone-200 focus:border-brand'} rounded-xl px-4 py-3 text-forest text-sm outline-none transition-all`}
                        placeholder="Juan Pérez"
                        />
                        {errors.name && <AlertCircle className="absolute right-3 top-3 w-5 h-5 text-red-400" />}
                    </div>
                    {errors.name && <p className="text-[10px] text-red-500 font-medium ml-1">{errors.name}</p>}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-forest/60">Email Profesional</label>
                    <div className="relative">
                        <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-white border ${errors.email ? 'border-red-400 focus:border-red-500' : 'border-stone-200 focus:border-brand'} rounded-xl px-4 py-3 text-forest text-sm outline-none transition-all`}
                        placeholder="juan@tulocal.com"
                        />
                        {errors.email && <AlertCircle className="absolute right-3 top-3 w-5 h-5 text-red-400" />}
                    </div>
                    {errors.email && <p className="text-[10px] text-red-500 font-medium ml-1">{errors.email}</p>}
                    </div>

                    {/* Business Field */}
                    <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-forest/60">Nombre del Local</label>
                    <div className="relative">
                        <input 
                        type="text" 
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        className={`w-full bg-white border ${errors.business ? 'border-red-400 focus:border-red-500' : 'border-stone-200 focus:border-brand'} rounded-xl px-4 py-3 text-forest text-sm outline-none transition-all`}
                        placeholder="Café Central"
                        />
                        {errors.business && <AlertCircle className="absolute right-3 top-3 w-5 h-5 text-red-400" />}
                    </div>
                    {errors.business && <p className="text-[10px] text-red-500 font-medium ml-1">{errors.business}</p>}
                    </div>

                    {/* Phone Field (Optional) */}
                    <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-forest/60">Teléfono (Opcional)</label>
                    <div className="relative">
                        <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full bg-white border ${errors.phone ? 'border-red-400 focus:border-red-500' : 'border-stone-200 focus:border-brand'} rounded-xl px-4 py-3 text-forest text-sm outline-none transition-all`}
                        placeholder="+54 11 ..."
                        />
                    </div>
                    {errors.phone && <p className="text-[10px] text-red-500 font-medium ml-1">{errors.phone}</p>}
                    </div>

                    <button 
                    type="submit"
                    disabled={isSubmitting || Object.values(errors).some(e => e !== '') || !formData.email || !formData.name}
                    className="w-full bg-forest text-white h-12 rounded-xl font-medium text-sm hover:bg-brand transition-all duration-300 shadow-lg hover:shadow-brand/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                    >
                    {isSubmitting ? (
                        <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Procesando...
                        </>
                    ) : (
                        <>
                        Enviar Solicitud
                        <Send className="w-4 h-4" />
                        </>
                    )}
                    </button>
                </form>
                )}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default CTA;
