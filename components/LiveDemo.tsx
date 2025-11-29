
import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Palette, 
  BarChart3, 
  TrendingUp, 
  Eye, 
  DollarSign, 
  MoreHorizontal, 
  Plus,
  Minus,
  Check,
  ShoppingBag,
  ArrowLeft,
  QrCode,
  Clock,
  Receipt,
  ChefHat
} from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

// --- Types ---
type Product = {
  id: number;
  name: string;
  desc: string;
  price: number;
  active: boolean;
  img: string;
};

type CartItem = Product & { qty: number };

type Order = {
  id: string;
  items: CartItem[];
  total: number;
  timestamp: string;
  status: 'new' | 'preparing' | 'ready';
};

// --- Mock Data ---
const INITIAL_ITEMS: Product[] = [
  { id: 1, name: 'Flat White Artesanal', desc: 'Doble shot, leche texturizada.', price: 4.50, active: true, img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=200&auto=format&fit=crop' },
  { id: 2, name: 'Croissant de Almendras', desc: 'Mantequilla francesa, tostado.', price: 3.80, active: true, img: 'https://images.unsplash.com/photo-1555507036-ab1f40388085?q=80&w=200&auto=format&fit=crop' },
  { id: 3, name: 'Cold Brew Tonic', desc: 'Maceración 24hs, agua tónica.', price: 5.00, active: false, img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=200&auto=format&fit=crop' },
  { id: 4, name: 'Avocado Toast', desc: 'Pan masa madre, huevo poché.', price: 8.50, active: true, img: 'https://images.unsplash.com/photo-1588137372308-15f75323ca8d?q=80&w=200&auto=format&fit=crop' },
];

const COLORS = [
  { name: 'Gold', hex: '#C9A66B' },
  { name: 'Forest', hex: '#1E362D' },
  { name: 'Berry', hex: '#9F3E56' },
  { name: 'Ocean', hex: '#3B82F6' },
];

const LiveDemo: React.FC = () => {
  // --- Admin State ---
  const [activeTab, setActiveTab] = useState<'design' | 'analytics'>('design');
  const [brandColor, setBrandColor] = useState(COLORS[0]);
  const [restaurantName, setRestaurantName] = useState('Café Payper');
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [orders, setOrders] = useState<Order[]>([
    { id: '#ORD-892', items: [], total: 12.50, timestamp: 'Hace 5 min', status: 'ready' }
  ]); // Start with one dummy order

  // --- Phone State ---
  const [phoneView, setPhoneView] = useState<'menu' | 'cart' | 'success'>('menu');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [lastOrderId, setLastOrderId] = useState('');

  // --- Helpers ---
  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  
  const revenueToday = orders.reduce((acc, order) => acc + order.total, 0);

  const toggleItem = (id: number) => {
    setItems(items.map(item => item.id === id ? { ...item, active: !item.active } : item));
  };

  const updatePrice = (id: number, delta: number) => {
    setItems(items.map(item => item.id === id ? { ...item, price: Math.max(0, item.price + delta) } : item));
  };

  // --- Phone Interaction Logic ---
  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === product.id);
      if (existing) {
        return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + 1 } : p);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) return { ...item, qty: Math.max(0, item.qty - 1) };
      return item;
    }).filter(item => item.qty > 0));
  };

  const handleCheckout = () => {
    const newOrderId = `#ORD-${Math.floor(1000 + Math.random() * 9000)}`;
    setLastOrderId(newOrderId);
    
    // Add to Admin Live Feed
    const newOrder: Order = {
      id: newOrderId,
      items: [...cart],
      total: cartTotal,
      timestamp: 'Ahora mismo',
      status: 'new'
    };

    setOrders(prev => [newOrder, ...prev]);
    
    // Switch Views
    setPhoneView('success');
    setCart([]); // Clear cart locally
    
    // Auto switch to analytics tab to show the "magic"
    setTimeout(() => setActiveTab('analytics'), 500);
  };

  const resetPhone = () => {
    setPhoneView('menu');
  };

  return (
    <section id="demo" className="py-24 bg-[#111] relative overflow-hidden text-bone border-t border-white/[0.06]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1E362D]/20 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/20 bg-brand/5 text-brand text-[10px] font-medium mb-6 uppercase tracking-widest mx-auto">
                <Smartphone className="w-3 h-3" />
                <span>Interactive Demo</span>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white">
                    Pruébalo tú mismo. <br/>
                    <span className="text-brand serif italic">Causa y efecto real.</span>
                </h2>
                <button className="bg-brand text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-white hover:text-brand transition-all shadow-[0_0_20px_-5px_rgba(201,166,107,0.5)] mb-6 animate-pulse-slow">
                    Start Free Trial
                </button>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <p className="text-white/40 font-light">
                Simula una compra en el teléfono de la izquierda y mira cómo impacta instantáneamente en el panel de administración a la derecha.
            </p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={300}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* =========================================================
              LEFT SIDE: INTERACTIVE PHONE
             ========================================================= */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[320px] h-[640px] bg-charcoal rounded-[3rem] border-8 border-[#2a2a2a] shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.01]">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#2a2a2a] rounded-b-xl z-50"></div>
              
              {/* === PHONE VIEW: MENU === */}
              {phoneView === 'menu' && (
                <div className="w-full h-full bg-[#F7F6F2] text-charcoal flex flex-col animate-in fade-in duration-500">
                  {/* Header Image */}
                  <div className="h-40 relative flex-shrink-0">
                      <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="font-bold text-xl leading-tight">{restaurantName}</h3>
                          <div className="flex gap-2 text-[10px] opacity-80 mt-1">
                              <span className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md">Café</span>
                              <span className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md">15-20 min</span>
                          </div>
                      </div>
                  </div>

                  {/* Categories */}
                  <div className="px-4 py-4 overflow-x-auto whitespace-nowrap no-scrollbar flex gap-2 flex-shrink-0">
                      {['Todo', 'Café', 'Pastelería', 'Brunch'].map((cat, i) => (
                          <button 
                              key={cat} 
                              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-300 ${i === 0 ? 'text-white' : 'bg-gray-200 text-gray-500'}`}
                              style={{ backgroundColor: i === 0 ? brandColor.hex : '' }}
                          >
                              {cat}
                          </button>
                      ))}
                  </div>

                  {/* Items List */}
                  <div className="px-4 space-y-3 overflow-y-auto flex-1 pb-24">
                      {items.filter(i => i.active).map(item => (
                          <div key={item.id} className="flex gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-100 items-center group active:scale-95 transition-transform">
                              <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                              </div>
                              <div className="flex-1 min-w-0">
                                  <h4 className="font-semibold text-sm text-gray-900 truncate">{item.name}</h4>
                                  <p className="text-[10px] text-gray-500 line-clamp-1">{item.desc}</p>
                                  <div className="flex items-center justify-between mt-2">
                                      <span className="font-bold text-sm" style={{ color: brandColor.hex }}>${item.price.toFixed(2)}</span>
                                      <button 
                                        onClick={() => addToCart(item)}
                                        className="w-7 h-7 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: brandColor.hex }}
                                      >
                                          <Plus className="w-4 h-4" />
                                      </button>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>

                  {/* Floating Cart Bar */}
                  {cart.length > 0 && (
                    <div className="absolute bottom-6 left-4 right-4 z-20 animate-in slide-in-from-bottom-4 duration-300">
                        <button 
                          onClick={() => setPhoneView('cart')}
                          className="w-full py-3.5 rounded-xl text-white font-medium text-sm shadow-xl flex items-center justify-between px-6 transition-transform hover:scale-[1.02] active:scale-95" 
                          style={{ backgroundColor: brandColor.hex }}
                        >
                            <div className="flex items-center gap-2">
                              <span className="bg-white/20 px-2 py-0.5 rounded text-xs font-bold">{cart.reduce((a, b) => a + b.qty, 0)}</span>
                              <span>Ver Pedido</span>
                            </div>
                            <span className="font-bold">${cartTotal.toFixed(2)}</span>
                        </button>
                    </div>
                  )}
                </div>
              )}

              {/* === PHONE VIEW: CART === */}
              {phoneView === 'cart' && (
                <div className="w-full h-full bg-[#F7F6F2] text-charcoal flex flex-col animate-in slide-in-from-right duration-300">
                  {/* Cart Header */}
                  <div className="h-20 bg-white border-b border-gray-100 flex items-end pb-3 px-4 shadow-sm z-10">
                    <div className="flex items-center justify-between w-full">
                       <button onClick={() => setPhoneView('menu')} className="p-2 -ml-2 text-gray-500 hover:text-black">
                          <ArrowLeft className="w-5 h-5" />
                       </button>
                       <span className="font-bold text-lg">Mi Pedido</span>
                       <div className="w-8"></div> {/* Spacer */}
                    </div>
                  </div>

                  {/* Cart Items */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {cart.map(item => (
                       <div key={item.id} className="flex justify-between items-center bg-white p-3 rounded-xl border border-gray-100">
                          <div className="flex gap-3 items-center">
                             <div className="w-12 h-12 rounded bg-gray-100 overflow-hidden">
                                <img src={item.img} className="w-full h-full object-cover" />
                             </div>
                             <div>
                                <h4 className="font-medium text-sm text-gray-900">{item.name}</h4>
                                <span className="text-xs text-brand font-bold" style={{ color: brandColor.hex }}>${(item.price * item.qty).toFixed(2)}</span>
                             </div>
                          </div>
                          <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                             <button onClick={() => removeFromCart(item.id)} className="w-6 h-6 flex items-center justify-center text-gray-500 hover:bg-white rounded shadow-sm"><Minus className="w-3 h-3" /></button>
                             <span className="text-xs font-medium w-3 text-center">{item.qty}</span>
                             <button onClick={() => addToCart(item)} className="w-6 h-6 flex items-center justify-center text-gray-500 hover:bg-white rounded shadow-sm"><Plus className="w-3 h-3" /></button>
                          </div>
                       </div>
                    ))}
                    
                    {/* Summary */}
                    <div className="mt-8 border-t border-gray-200 pt-4 space-y-2">
                       <div className="flex justify-between text-sm text-gray-500">
                          <span>Subtotal</span>
                          <span>${cartTotal.toFixed(2)}</span>
                       </div>
                       <div className="flex justify-between text-sm text-gray-500">
                          <span>Service Fee</span>
                          <span>$0.00</span>
                       </div>
                       <div className="flex justify-between text-lg font-bold text-gray-900 pt-2">
                          <span>Total</span>
                          <span>${cartTotal.toFixed(2)}</span>
                       </div>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <div className="p-4 bg-white border-t border-gray-100">
                     <button 
                        onClick={handleCheckout}
                        className="w-full py-4 rounded-xl text-white font-bold text-sm shadow-lg active:scale-95 transition-all flex justify-center items-center gap-2"
                        style={{ backgroundColor: brandColor.hex }}
                     >
                        Confirmar y Pagar
                        <Check className="w-4 h-4" />
                     </button>
                  </div>
                </div>
              )}

              {/* === PHONE VIEW: SUCCESS QR === */}
              {phoneView === 'success' && (
                <div className="w-full h-full bg-brand text-white flex flex-col items-center justify-center p-6 text-center animate-in zoom-in duration-300" style={{ backgroundColor: brandColor.hex }}>
                   <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl animate-bounce">
                      <Check className="w-10 h-10 text-black" />
                   </div>
                   <h2 className="text-2xl font-bold mb-2">¡Pedido Confirmado!</h2>
                   <p className="text-white/80 text-sm mb-8">La cocina ya está preparando tu orden.</p>
                   
                   <div className="bg-white p-6 rounded-2xl shadow-2xl mb-8 transform rotate-1">
                      <QrCode className="w-32 h-32 text-charcoal mx-auto opacity-90" />
                      <div className="mt-4 pt-4 border-t border-dashed border-gray-200">
                         <p className="text-xs text-gray-400 font-mono uppercase">Orden ID</p>
                         <p className="text-xl font-mono font-bold text-charcoal">{lastOrderId}</p>
                      </div>
                   </div>

                   <button 
                      onClick={resetPhone}
                      className="text-sm font-medium underline opacity-80 hover:opacity-100"
                   >
                      Hacer otro pedido
                   </button>
                </div>
              )}

            </div>
          </div>

          {/* =========================================================
              RIGHT SIDE: ADMIN PANEL
             ========================================================= */}
          <div className="relative pt-10 lg:pt-0">
             {/* Admin Window */}
             <div className="bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl overflow-hidden min-h-[550px] flex flex-col relative z-20">
                
                {/* Window Header */}
                <div className="h-12 border-b border-white/10 flex items-center px-4 justify-between bg-white/[0.02]">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    </div>
                    <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Payper OS Admin</div>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-white/10">
                    <button 
                        onClick={() => setActiveTab('design')}
                        className={`flex-1 py-4 text-xs font-medium uppercase tracking-wider transition-colors hover:text-white ${activeTab === 'design' ? 'text-brand border-b-2 border-brand bg-brand/5' : 'text-white/40'}`}
                    >
                        <div className="flex items-center justify-center gap-2">
                            <Palette className="w-3.5 h-3.5" />
                            Personalizar
                        </div>
                    </button>
                    <button 
                         onClick={() => setActiveTab('analytics')}
                        className={`flex-1 py-4 text-xs font-medium uppercase tracking-wider transition-colors hover:text-white ${activeTab === 'analytics' ? 'text-brand border-b-2 border-brand bg-brand/5' : 'text-white/40'}`}
                    >
                         <div className="flex items-center justify-center gap-2">
                            <BarChart3 className="w-3.5 h-3.5" />
                            Live Orders
                            {/* Notification Dot */}
                            <span className="relative flex h-2 w-2 ml-1">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                        </div>
                    </button>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 bg-[#111]">
                    
                    {/* --- TAB: DESIGN (Same as before) --- */}
                    {activeTab === 'design' && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <div>
                                <label className="text-xs font-medium text-white/50 mb-3 block uppercase tracking-wide">Identidad de Marca</label>
                                <div className="space-y-4">
                                    <input 
                                        type="text" 
                                        value={restaurantName}
                                        onChange={(e) => setRestaurantName(e.target.value)}
                                        className="w-full bg-[#1e1e1e] border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-brand/50 transition-colors"
                                        placeholder="Nombre del Restaurante"
                                    />
                                    <div className="flex gap-3">
                                        {COLORS.map((color) => (
                                            <button
                                                key={color.name}
                                                onClick={() => setBrandColor(color)}
                                                className={`w-8 h-8 rounded-full border-2 transition-all ${brandColor.name === color.name ? 'border-white scale-110' : 'border-transparent hover:scale-105'}`}
                                                style={{ backgroundColor: color.hex }}
                                                title={color.name}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <hr className="border-white/5" />
                            <div>
                                <label className="text-xs font-medium text-white/50 mb-3 block uppercase tracking-wide">Editor de Precios (Live)</label>
                                <div className="space-y-3">
                                    {items.map(item => (
                                        <div key={item.id} className="flex items-center justify-between p-3 rounded-lg bg-[#1e1e1e] border border-white/5 hover:border-white/10 transition-colors">
                                            <span className={`text-sm ${item.active ? 'text-white' : 'text-white/30 line-through'}`}>{item.name}</span>
                                            <div className="flex items-center gap-2 bg-black/40 rounded-md p-1">
                                                <button onClick={() => updatePrice(item.id, -0.5)} className="w-6 h-6 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 rounded"><Minus className="w-3 h-3" /></button>
                                                <span className="text-xs font-mono w-12 text-center text-brand">${item.price.toFixed(2)}</span>
                                                <button onClick={() => updatePrice(item.id, 0.5)} className="w-6 h-6 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 rounded"><Plus className="w-3 h-3" /></button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* --- TAB: ANALYTICS (Live Feed) --- */}
                    {activeTab === 'analytics' && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300 h-full flex flex-col">
                             
                             {/* Stats Cards */}
                             <div className="grid grid-cols-2 gap-4 flex-shrink-0">
                                <div className="bg-[#1e1e1e] p-4 rounded-xl border border-white/5 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity"><DollarSign className="w-12 h-12" /></div>
                                    <div className="text-xs text-white/40 uppercase tracking-wide mb-1">Ingresos Hoy</div>
                                    <div className="text-2xl font-bold text-white transition-all duration-300 key={revenueToday}">
                                        ${revenueToday.toFixed(2)}
                                    </div>
                                    <div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
                                        <TrendingUp className="w-3 h-3" /> Live
                                    </div>
                                </div>
                                <div className="bg-[#1e1e1e] p-4 rounded-xl border border-white/5 relative overflow-hidden group">
                                     <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity"><Receipt className="w-12 h-12" /></div>
                                    <div className="text-xs text-white/40 uppercase tracking-wide mb-1">Pedidos</div>
                                    <div className="text-2xl font-bold text-white">{orders.length}</div>
                                    <div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
                                        <Clock className="w-3 h-3" /> Updated just now
                                    </div>
                                </div>
                             </div>

                             {/* LIVE FEED TITLE */}
                             <div className="flex items-center justify-between border-b border-white/5 pb-2 flex-shrink-0">
                                <h3 className="text-xs font-medium text-white/50 uppercase tracking-wide flex items-center gap-2">
                                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                  Pedidos Entrantes
                                </h3>
                                <span className="text-[10px] text-white/20 font-mono">Real-time WebSocket</span>
                             </div>

                             {/* LIVE FEED LIST */}
                             <div className="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
                                {orders.map((order) => (
                                  <div 
                                    key={order.id} 
                                    className="bg-[#1e1e1e] border-l-2 border-l-emerald-500 p-3 rounded-r-lg border-y border-r border-white/5 flex justify-between items-center animate-in slide-in-from-left-4 fade-in duration-500"
                                  >
                                      <div>
                                          <div className="flex items-center gap-2 mb-1">
                                            <span className="text-sm font-mono font-bold text-white">{order.id}</span>
                                            {order.status === 'new' && <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 rounded animate-pulse">NUEVO</span>}
                                          </div>
                                          <p className="text-xs text-white/40">
                                            {order.items.length > 0 
                                              ? `${order.items.length} productos (${order.items[0].name}...)` 
                                              : 'Pedido de prueba'}
                                          </p>
                                      </div>
                                      <div className="text-right">
                                          <div className="text-sm font-bold text-white">${order.total.toFixed(2)}</div>
                                          <div className="text-[10px] text-white/30">{order.timestamp}</div>
                                      </div>
                                  </div>
                                ))}
                             </div>

                        </div>
                    )}

                </div>
             </div>
             
             {/* Glows */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand rounded-full blur-[80px] opacity-10 pointer-events-none"></div>
             <div className="absolute bottom-10 -left-10 w-40 h-40 bg-blue-500 rounded-full blur-[80px] opacity-10 pointer-events-none"></div>
          </div>

        </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default LiveDemo;
