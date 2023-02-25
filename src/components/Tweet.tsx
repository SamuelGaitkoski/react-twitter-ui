import './Tweet.css';

import { Link } from 'react-router-dom';

import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';

// se falarmos quais propriedades o componente espera receber, quais são obrigatórias e quais não são, nossa ide (vscode) fica muito mais inteligente por causa do TS, evitando erros enquanto estamos desenvolvendo nossa aplicação (principal objetivo do TS).

interface TweetProps {
    content: string;
}

export function Tweet(props: TweetProps) {
    return (
        <Link to="/status" className="tweet">
            <img src="https://github.com/SamuelGaitkoski.png" alt="Samuel Gaitkoski" />

            <div className="tweet-content">
                <div className="tweet-content-header">
                    <strong>Samuel Gaitkoski</strong>
                    <span>@sgaitkoski</span>
                </div>

                <p>
                    {props.content}
                </p>

                <div className="tweet-content-footer">
                    <button type="button">
                        <ChatCircle />
                        20
                    </button>
                    <button type="button">
                        <ArrowsClockwise />
                        20
                    </button>
                    <button type="button">
                        <Heart />
                        20
                    </button>
                </div>
            </div>
        </Link>
    );
} 