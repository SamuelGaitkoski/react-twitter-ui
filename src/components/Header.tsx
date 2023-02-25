import './Header.css';

// importando ícones da biblioteca como componentes do react, que são svgs
import { Sparkle } from 'phosphor-react';

interface HeaderProps {
    title: string;
}


export function Header(props: HeaderProps) {
    return (
        <div className="timeline-header">
            {props.title}
            <Sparkle />
        </div>
    );
}