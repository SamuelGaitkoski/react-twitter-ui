import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes';

// renderizar => mostrar em tela.
// programação imperativa (html/js) x programação declarativa (react).
// no react, o html é gerado por meio do js, isso é feito pelo jsx.
// componentes (pequenas partes de interface reutilizáveis).
// no html temos tags, no react componentes, no html temos os atributos que usamos para mudar as tags visualmente, no react temos as propriedades/props.
// TypeScript (ferramenta de tipagem estática para o Javascript).
// Java, C#, PHP são linguagens mais fortemente tipadas.
// Tipagem estática (mecanismo para evitar erros enquanto estamos desenvolvendo nosso app).
// biblioteca de icones: https://phosphoricons.com/ - Instalar a biblioteca: npm install phosphor-react
// Cuidar com o vício da otimização, não precisa transformar tudo em componente!
// Quando é algo que não vai ser dado manutenção facilmente, botamos em um componente.
// métodos forEach/map percorrem um array, mas o forEach não tem retorno, nada pode ser retornado de um forEach, o map tem retorno.
// roteamento no React: links entre páginas, ir para outro tweet, ter várias páginas dentro de uma aplicação. Baseado no endereço da página o conteúdo da página é trocado. Biblioteca mais famosa no ecossistema do react para lidar com o react é a React Router (https://reactrouter.com/en/main) - Instalar: npm install react-router-dom localforage match-sorter sort-by
// auto grow textarea react
// Dentro do fluxo de renderização do react (quando um componente renderiza do zero, processo de comparação do algoritmo de reconciliação):  1. Toda vez que alteramos o estado de um componente (uma state que está dentro do componente), todo o componente é recalculado, executado novamente. 2. Toda vez que o seu componente pai renderizar. 3. Toda vez que alguma das suas propriedades mudarem (valor das props por exemplo).
// Por baixo dos panos o react executa o algoritmo de reconciliação, que é um conjunto de 3 etapas que o react faz para detectar o que precisa criar o zero no nosso HTML, quando uma nova renderização é feita: 1. Criar em memória a nova versão do HTML do componente. 2. Compara essa nova versão com a versão anterior do HTML (Diff -> diferença dos 2 HTML's). 3. Aplicar as operações JavaScript para alterar somente o necessário no HTML (para só alterar em tela o que foi alterado no HTML).

// os compilers & bundlers jogam de forma automática o css para dentro do html (dentro do head do html).
import './global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>,
)
