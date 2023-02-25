import './Sidebar.css';

import { NavLink } from 'react-router-dom';

import twitterLogo from '../assets/logo-twitter.svg';

import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Pencil, User } from 'phosphor-react';

// Contexto (existem locais no react onde podemos ter acesso a algumas informações, e locais onde não podemos ter acesso a essas informações. No mais quando usamos o RouterProvider, damos acesso a todas funcionalidades do react-router-dom para todos os elementos que estão dentro do RouterProvider, que são as páginas Timeline e Status, que podem ter Link, etc. Agora, a nossa Sidebar está fora do contexto do RouterProvider, logo, a sidebar não conhece o RouterProvider, então não podemos botar um Link do react-router-dom, sendo que a sidebar está fora do contexto das nossas rotas.
// Nested Routes (rotas em cascata/rotas encadeadas)
// podemos usar o NavLink no lugar do Link, ambos recebem o to, fazem a navegação, mas o NavLink adiciona uma classe active quando o link for a página atual.

export function Sidebar() {
    return (
        <aside className="sidebar">
            <img className="logo" src={twitterLogo} alt="Logo" />

            <nav className="main-navigation">
                <NavLink to="/">
                    <House weight="fill" />
                    <span>Home</span>
                </NavLink>
                <a href="">
                    <Hash />
                    <span>Explore</span>
                </a>
                <a href="">
                    <Bell />
                    <span>Notifications</span>
                </a>
                <a href="">
                    <Envelope />
                    <span>Messages</span>
                </a>
                <a href="">
                    <BookmarkSimple />
                    <span>Bookmarks</span>
                </a>
                <a href="">
                    <FileText />
                    <span>Lists</span>
                </a>
                <a href="">
                    <User />
                    <span>Profile</span>
                </a>
                <a href="">
                    <DotsThreeCircle />
                    <span>More</span>
                </a>
          </nav>

          <button className="new-tweet" type="button">
            <Pencil />
            <span>Tweet</span>
          </button>
        </aside>
    );
}