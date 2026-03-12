import React from "react"
import Section from "../../../components/layout/Section";
import Column from "../../../components/layout/Column";

function PortfolioSummarySection(): React.JSX.Element
{
    return (
        <Section id="summary">
            <Column>
                <p className="text-lg">Hey there! I’m Mykal Sullivan, a software engineer with 5+ years of experience
                    building high-performance software and scalable frameworks.</p>
                <p className="text-lg">I specialize in developing robust, cross-platform applications, from low-level
                    systems programming to web-based solutions, with a strong focus on efficiency and
                    maintainability.</p>
                <p className="text-lg">Alongside my work in software, I’ve built complex server architectures, designed
                    modular frameworks, and tackled a range of challenging engineering problems. My passion for
                    technology extends beyond code—I’m always learning and applying new concepts, whether it's in
                    software, hardware, or other areas of engineering.</p>
            </Column>
        </Section>
    );
}

export default PortfolioSummarySection;