import './Status.css';

import { useState, FormEvent, KeyboardEvent } from 'react';
import { PaperPlaneRight } from 'phosphor-react';

import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

export function Status() {
    const [answers, setAnswers] = useState([
        'Concordo...',
        'Olha, faz sentido!',
        'Parabéns pelo progresso!'
    ]);
    const [newAnswer, setNewAnswer] = useState('');

    function createNewAnswer(event: FormEvent) {
        event.preventDefault();

        setAnswers([newAnswer, ...answers]);
        setNewAnswer('');
    }

    function handleHotKeySubmit(event: KeyboardEvent) {
        // se apertou ctrl + enter envia o formulário (newAsnwer).
        // metaKey é o ctrl no macbook
        if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
            // submit
            setAnswers([newAnswer, ...answers]);
            setNewAnswer('');
        }
    }

    return (
        <main className="status">
            <Header title="Tweet" />

            <Tweet content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, at earum. Quas ab mollitia laborum dolores nulla odit error quae." />

            <Separator />

            <form onSubmit={createNewAnswer} className="answer-tweet-form">
                <label htmlFor="tweet">
                <img src="https://github.com/SamuelGaitkoski.png" alt="Samuel Gaitkoski" />
                <textarea 
                    id="tweet" placeholder="Tweet your answer" 
                    value={newAnswer}
                    onKeyDown={handleHotKeySubmit}
                    onChange = {(event) => {
                        setNewAnswer(event.target.value)
                    }}
                />
                </label>

                <button type="submit">
                    <PaperPlaneRight />
                    <span>Answer</span>
                </button>
            </form>

            {answers.map(answer => {
                return <Tweet key={answer} content={answer} />
            })}
        </main>
    );
}