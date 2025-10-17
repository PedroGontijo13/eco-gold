import { Gem, Award, Heart } from "lucide-react";

export function AboutSection() {
    return (
        <section id="sobre" className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div>
                        <h2
                            className="text-4xl md:text-5xl text-[#1A1A1A] mb-6"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Sobre a EcoGold
                        </h2>
                        <p className="text-lg text-[#717182] mb-6 leading-relaxed">
                            Na EcoGold, acreditamos que cada joia conta uma história única.
                            Nossa paixão é criar peças exclusivas que celebram momentos especiais
                            e expressam a individualidade de quem as usa.
                        </p>
                        <p className="text-lg text-[#717182] mb-8 leading-relaxed">
                            Com mais de 15 anos de experiência, trabalhamos apenas com materiais
                            nobres e pedras preciosas certificadas, garantindo qualidade e
                            autenticidade em cada detalhe.
                        </p>

                        {/* Features */}
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="bg-[#C5A572]/10 p-3 rounded-full">
                                    <Gem className="text-[#C5A572]" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-[#1A1A1A] mb-1">Materiais Nobres</h4>
                                    <p className="text-[#717182]">Ouro 18K e pedras preciosas certificadas</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[#C5A572]/10 p-3 rounded-full">
                                    <Award className="text-[#C5A572]" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-[#1A1A1A] mb-1">Design Exclusivo</h4>
                                    <p className="text-[#717182]">Peças únicas criadas por designers renomados</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[#C5A572]/10 p-3 rounded-full">
                                    <Heart className="text-[#C5A572]" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-[#1A1A1A] mb-1">Atendimento Personalizado</h4>
                                    <p className="text-[#717182]">Consultoria especializada para cada cliente</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image/Visual Element */}
                    <div className="relative">
                        <div className="aspect-square rounded-lg overflow-hidden bg-[#F5F3EE]">
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="text-center p-12">
                                    <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-[#C5A572]/10 mb-6">
                                        <Gem className="text-[#C5A572]" size={64} />
                                    </div>
                                    <p
                                        className="text-3xl text-[#1A1A1A]"
                                        style={{ fontFamily: "'Playfair Display', serif" }}
                                    >
                                        15+ Anos
                                    </p>
                                    <p className="text-[#717182] mt-2">De excelência e dedicação</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C5A572]/10 rounded-lg -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
