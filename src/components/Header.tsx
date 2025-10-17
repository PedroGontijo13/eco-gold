import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#C5A572]/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <h1 className="text-3xl text-[#C5A572]" style={{ fontFamily: "'Playfair Display', serif" }}>
                            EcoGold
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => scrollToSection('inicio')}
                            className="text-[#1A1A1A] hover:text-[#C5A572] transition-colors"
                        >
                            Início
                        </button>
                        <button
                            onClick={() => scrollToSection('colecao')}
                            className="text-[#1A1A1A] hover:text-[#C5A572] transition-colors"
                        >
                            Coleção
                        </button>
                        <button
                            onClick={() => scrollToSection('sobre')}
                            className="text-[#1A1A1A] hover:text-[#C5A572] transition-colors"
                        >
                            Sobre
                        </button>
                        <button
                            onClick={() => scrollToSection('contato')}
                            className="text-[#1A1A1A] hover:text-[#C5A572] transition-colors"
                        >
                            Contato
                        </button>
                    </nav>

                    {/* WhatsApp Icon */}
                    <a
                        href="https://wa.me/5531999999894?text=Olá!%20Gostaria%20de%20conhecer%20suas%20joias."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full hover:bg-[#20BA5A] transition-colors"
                    >
                        <MessageCircle size={20} />
                        <span>WhatsApp</span>
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-[#1A1A1A]"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-[#C5A572]/20">
                        <nav className="flex flex-col space-y-4">
                            <button
                                onClick={() => scrollToSection('inicio')}
                                className="text-[#1A1A1A] hover:text-[#C5A572] transition-colors text-left"
                            >
                                Início
                            </button>
                            <button
                                onClick={() => scrollToSection('colecao')}
                                className="text-[#1A1A1A] hover:text-[#C5A572] transition-colors text-left"
                            >
                                Coleção
                            </button>
                            <button
                                onClick={() => scrollToSection('sobre')}
                                className="text-[#1A1A1A] hover:text-[#C5A572] transition-colors text-left"
                            >
                                Sobre
                            </button>
                            <button
                                onClick={() => scrollToSection('contato')}
                                className="text-[#1A1A1A] hover:text-[#C5A572] transition-colors text-left"
                            >
                                Contato
                            </button>
                            <a
                                href="https://wa.me/5531999999894?text=Olá!%20Gostaria%20de%20conhecer%20suas%20joias."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full hover:bg-[#20BA5A] transition-colors w-fit"
                            >
                                <MessageCircle size={20} />
                                <span>WhatsApp</span>
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
