import { MessageCircle, Instagram, Facebook } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contato" className="py-20 px-4 bg-[#1A1A1A]">
            <div className="max-w-7xl mx-auto text-center">
                <h2
                    className="text-4xl md:text-5xl text-white mb-6"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    Entre em Contato
                </h2>
                <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                    Estamos prontos para ajudá-lo a encontrar a joia perfeita.
                    Fale conosco pelo WhatsApp ou siga-nos nas redes sociais.
                </p>

                {/* WhatsApp CTA */}
                <a
                    href="https://wa.me/5531999999894?text=Olá!%20Gostaria%20de%20conhecer%20suas%20joias."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full hover:bg-[#20BA5A] transition-all transform hover:scale-105 mb-12"
                >
                    <MessageCircle size={24} />
                    <span className="text-lg">Fale conosco no WhatsApp</span>
                </a>

                {/* Social Media */}
                <div className="flex items-center justify-center gap-6 mb-8">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 p-4 rounded-full hover:bg-[#C5A572] transition-colors"
                        aria-label="Instagram"
                    >
                        <Instagram size={24} className="text-white" />
                    </a>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 p-4 rounded-full hover:bg-[#C5A572] transition-colors"
                        aria-label="Facebook"
                    >
                        <Facebook size={24} className="text-white" />
                    </a>
                </div>

                {/* Contact Info */}
                <div className="text-white/60 space-y-2">
                    <p>contato@EcoGold.com.br</p>
                    <p>(31) 99999-9894</p>
                </div>
            </div>
        </section>
    );
}
