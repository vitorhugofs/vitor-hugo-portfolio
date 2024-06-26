import InfoSection from "./InfoSection"

export default function Contact () {
    return (
        <InfoSection>
            <div className="flex flex-col text-white items-center justify-center">
                <div className="text-white flex flex-col items-center justify-center">
                    <p className="mb-4 text-xl">Have you liked my profile? <span className="text-primary">Let&#39;s work together!</span></p>

                    <a className="mb-4 text-lg text-secondary" href="https://linkedin.com/in/seu-perfil">Check my linkedin</a>

                    <a className="mb-4 text-lg text-secondary" href="mailto:seu-email@example.com">Send me an email!</a>
                </div>
            </div>
        </InfoSection>
    )
}