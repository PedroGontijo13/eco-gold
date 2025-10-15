import { MessageCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
    return (
        <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <ImageWithFallback
                    src="https://images.unsplash.com/photo-1694062045776-f48d9b6de57e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGpld2VscnklMjBtb2RlbHxlbnwxfHx8fDE3NjA0NzE5MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Luxury Jewelry"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1
                    className="text-5xl md:text-7xl text-white mb-6"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    Beleza que brilha com você.
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
                    Conheça nossa coleção exclusiva de joias finas.
                </p>
                <a
                    href="https://wa.me/5531999999894?text=Olá!%20Gostaria%20de%20conhecer%20suas%20joias."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full hover:bg-[#20BA5A] transition-all transform hover:scale-105"
                >
                    <MessageCircle size={24} />
                    <span className="text-lg">Fale conosco no WhatsApp</span>
                </a>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-3 bg-white/50 rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
