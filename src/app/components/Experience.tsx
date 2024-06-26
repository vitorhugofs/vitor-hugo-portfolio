import InfoSection from "./InfoSection";

export default function Experience () {
    return (
        <InfoSection>
            <h2 className="text-2xl text-white mb-8">My experience</h2>

            <div className="flex flex-col text-white items-start gap-2 color-text">
                <h3 className="text-lg text-primary">Carbonaut - Desenvolvedor de Front-end</h3>
                <p className="text-md">Curitiba | Março de 2021 - Novembro de 2023</p>
                <p className="text-sm text-gray">Desenvolvi e implementei aplicações web e nativas utilizando frameworks como Ionic, Angular, Svelte e React. Contribuí significativamente para o sucesso de diversos produtos ao traduzir requisitos de design em interfaces funcionais e responsivas.</p>
            </div>
        </InfoSection>
    )
}