import { MessageCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductCardProps {
    name: string;
    description: string;
    price?: string;
    image: string;
}

export function ProductCard({ name, description, price, image }: ProductCardProps) {
    const whatsappMessage = `Olá!%20Tenho%20interesse%20na%20joia%20${encodeURIComponent(name)}.`;

    return (
        <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-[#F5F3EE]">
                <ImageWithFallback
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3
                    className="text-2xl text-[#1A1A1A] mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    {name}
                </h3>
                <p className="text-[#717182] mb-4 min-h-[3rem]">
                    {description}
                </p>
                {price && (
                    <p className="text-xl text-[#C5A572] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {price}
                    </p>
                )}
                <a
                    href={`https://wa.me/5531999999894?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white px-6 py-3 rounded-full hover:bg-[#20BA5A] transition-all transform hover:scale-105"
                >
                    <MessageCircle size={20} />
                    <span>Venda sua joia</span>
                </a>
            </div>
        </div>
    );
}
