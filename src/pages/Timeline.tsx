import './Timeline.css';

import { FormEvent, KeyboardEvent, useState } from 'react';

import { Tweet } from '../components/Tweet';
import { Header } from '../components/Header';
import { Separator } from '../components/Separator';

// Aplicação SPA quer evitar redirecionamentos (recarregar a tela novamente) sempre que possível.
// eventos: onClick, onChange, onSubmit, etc.
// Controlled Components: anotar o valor enquanto o usuário digita (onChange colocando o que é digitado, que é o event.target.value) em uma variável (state))

export function Timeline() {
    // no React temos um tipo especial de variável, chamada estado (state), que são variável monitoradas pelo React, então ele ve quando alteramos ela.
    // useState retorna duas informações, nossa variável e uma função para atualizarmos o valor da variável, que é por onde o React sabe que alteramos o valor de uma variável, e que queremos atualizar nossa interface.
    const [tweets, setTweets] = useState([
        'Meu primeiro tweet',
        'Teste',
        'Deu certo tweetar!'
    ]);
    // Diferença de uma variável tradicional para um estado (state), react não monitora as alterações naquela variável, react monitora uma state. React só sabe quando uma variável muda quando ela é uma state.
    const [newTweet, setNewTweet] = useState('');

    function createNewTweet(event: FormEvent) {
        // previnir o comportamento padrão ao enviar um formulário, que é de redirecionar o usuário para outra tela.
        event.preventDefault();

        // spread operator (...), copiar um array e jogar outro item dentro do array, o que fizemos abaixo:
        // Não alteramos o array original de tweets, criamos um novo array de tweets e colocamos outro tweet dentro dele.
        setTweets([newTweet, ...tweets]);
        setNewTweet('');
    }

    function handleHotKeySubmit(event: KeyboardEvent) {
        if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
            // submit
            setTweets([newTweet, ...tweets]);
            setNewTweet('');
        }
    }

    return (
        <main className="timeline">
            <Header title="Home" />

            <form onSubmit={createNewTweet} className="new-tweet-form">
                <label htmlFor="tweet">
                <img src="https://github.com/SamuelGaitkoski.png" alt="Samuel Gaitkoski" />
                <textarea 
                    id="tweet" 
                    placeholder="What's happening?" 
                    value={newTweet}
                    onKeyDown={handleHotKeySubmit}
                    onChange={(event) => {
                        setNewTweet(event.target.value);
                    }}
                />
                </label>

                <button type="submit">Tweet</button>
            </form>

            <Separator />

            {tweets.map(tweet => {
                return <Tweet key={tweet} content={tweet} />
            })}
        </main>
    );
}