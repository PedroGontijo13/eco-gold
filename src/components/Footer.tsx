export function Footer() {
    return (
        <footer className="bg-[#1A1A1A] border-t border-[#C5A572]/20 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Logo */}
                    <div>
                        <h3
                            className="text-2xl text-[#C5A572]"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Aurelia
                        </h3>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap justify-center gap-6 text-white/60">
                        <a href="#" className="hover:text-[#C5A572] transition-colors">
                            Políticas de Privacidade
                        </a>
                        <a href="#" className="hover:text-[#C5A572] transition-colors">
                            Termos de Uso
                        </a>
                        <a href="#" className="hover:text-[#C5A572] transition-colors">
                            Garantia
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center mt-8 text-white/40">
                    <p>© 2025 Aurelia. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
