
import { ProductCard } from "./ProductCard";

const products = [
    {
        name: "Anel Solitário de Ouro 18K",
        description: "Design clássico com diamante central de 0,25ct",
        price: "R$ 8.500,00",
        image: "https://images.unsplash.com/photo-1748023593753-4949fdc19045?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwcmluZyUyMGVsZWdhbnR8ZW58MXx8fHwxNzYwNDYyOTExfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        name: "Colar Gota de Diamante",
        description: "Elegância em ouro branco com diamantes naturais",
        price: "R$ 12.900,00",
        image: "https://images.unsplash.com/photo-1602752250055-5ebb552fc3ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2UlMjBsdXh1cnl8ZW58MXx8fHwxNzYwNDMyMzM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        name: "Brincos de Pérolas",
        description: "Pérolas naturais em ouro amarelo 18K",
        price: "R$ 6.700,00",
        image: "https://images.unsplash.com/photo-1684439673104-f5d22791c71a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZWFycmluZ3MlMjBqZXdlbHJ5fGVufDF8fHx8MTc2MDQxNDY5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        name: "Pulseira Teia de Ouro",
        description: "Design contemporâneo em ouro amarelo",
        price: "R$ 5.200,00",
        image: "https://images.unsplash.com/photo-1629587424599-ee8806a66127?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwYnJhY2VsZXQlMjBsdXh1cnl8ZW58MXx8fHwxNzYwMzg4NjMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        name: "Conjunto Royal",
        description: "Colar e brincos com esmeraldas naturais",
        price: "R$ 22.500,00",
        image: "https://images.unsplash.com/photo-1655707063496-e1c00b3280de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwZ29sZHxlbnwxfHx8fDE3NjA0MDI1MDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        name: "Aliança Eternidade",
        description: "Anel com diamantes ao redor em ouro branco",
        price: "R$ 9.800,00",
        image: "https://images.unsplash.com/photo-1748023593753-4949fdc19045?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwcmluZyUyMGVsZWdhbnR8ZW58MXx8fHwxNzYwNDYyOTExfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
];

export function ProductGrid() {
    return (
        <section id="colecao" className="py-20 px-4 bg-[#F5F3EE]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl md:text-5xl text-[#1A1A1A] mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Nossa Coleção
                    </h2>
                    <p className="text-xl text-[#717182] max-w-2xl mx-auto">
                        Cada peça é cuidadosamente selecionada para realçar sua beleza natural
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
