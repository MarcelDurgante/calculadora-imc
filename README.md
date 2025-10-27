# Calculadora de IMC (Índice de Massa Corporal)

Aplicação leve e totalmente responsiva para o cálculo do IMC (Índice de Massa Corporal), desenvolvida com **HTML semântico**, **CSS moderno** e **JavaScript puro**.  
O projeto prioriza clareza, manutenibilidade e acessibilidade, seguindo boas práticas atuais de desenvolvimento front-end.

---

## Visão Geral

A aplicação permite calcular o IMC de um usuário com base em seu peso (kg) e altura (m).  
Os valores inseridos são validados, normalizados e processados, resultando na classificação do IMC conforme as faixas padronizadas (abaixo do peso, normal, sobrepeso, etc.).

O design utiliza um sistema de **tokens CSS**, garantindo consistência em tipografia, espaçamento, cores e animações.

---

## Funcionalidades

- Layout responsivo para dispositivos móveis e desktops  
- Validação e normalização dos valores inseridos  
- Transições e animações suaves para mudança de estados  
- Interações acessíveis por teclado e leitor de tela  
- Suporte a preferências de movimento reduzido (`prefers-reduced-motion`)  
- Zero dependências externas ou frameworks

---

## Stack Tecnológica

| Camada | Tecnologia |
|--------|-------------|
| Linguagem | JavaScript (ES6) |
| Estilização | CSS3 (design tokens, custom properties, animações) |
| Estrutura | HTML5 semântico |

---

imc-calculator/
|
|── index.html   → Estrutura semântica da aplicação e elementos do formulário
|── style.css    → Sistema de design tokens, layout responsivo e animações
|── script.js    → Manipulação do DOM, validação dos dados e cálculo do IMC

---

## Lógica Principal

1. O usuário informa **peso** e **altura**.  
2. Os valores são normalizados e validados para garantir formato numérico.  
3. O IMC é calculado usando a fórmula:

   ```js
   imc = peso / (altura ** 2);
   ```
4. O resultado é classificado conforme a faixa correspondente.
5. A interface exibe o resultado com animações sutis e tratamento de erros amigável.

### Processamento e Exibição de Resultados

Após o cálculo, o IMC é classificado automaticamente de acordo com as faixas reconhecidas internacionalmente.  
O resultado é exibido com **transições sutis**, **feedback visual imediato** e **mensagens de erro contextualizadas**, garantindo uma experiência fluida e acessível.

---

## Arquitetura de Estilos (CSS)

- **Design Tokens:** Variáveis centralizadas em `:root`, definindo paleta de cores, tipografia, espaçamento, sombras e transições.  
- **Sistema de Animações:** Padrão unificado de curvas e durações (`cubic-bezier`) para fluidez e coerência visual.  
- **Layout Responsivo:** Estrutura fluida com espaçamentos adaptáveis e breakpoints otimizados para diferentes tamanhos de tela.  
- **Acessibilidade:** Destaque visível para foco via teclado, contraste adequado e suporte à preferência `prefers-reduced-motion`.

---

## Possíveis Extensões Futuras

- Alternância entre sistemas **métrico** e **imperial**  
- Armazenamento dos últimos valores via `localStorage`  
- Implementação de temas **claro/escuro**  
- Opção de **feedback por voz** para aprimorar acessibilidade  

---

## Autor

**Marcel Durgante Ramos**  
Associate Software Developer — SAGE Spain  
Barcelona, Espanha  

[LinkedIn](https://www.linkedin.com/in/marceldurgante) • [GitHub](https://github.com/marceldurgante)

---

## Licença

Distribuído sob a licença **MIT**.  
O uso, modificação e redistribuição são permitidos, desde que preservadas as devidas atribuições de autoria.





