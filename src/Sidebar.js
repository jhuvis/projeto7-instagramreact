function Sugestao(props)
{
    return(
        <div class="sugestao">
            <div class="usuario">
                <img src={props.img} />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.segue}</div>
                </div>
            </div>
        
            <div class="seguir">Seguir</div>
        </div>
    );
}

function Sidebar()
{
    const sugestoes = [
        {
            nome: "bad.vibes.memes",
            img: "assets/img/bad.vibes.memes.svg",
            segue: "Segue você",
        },
        {
            nome: "chibirdart",
            img: "assets/img/chibirdart.svg",
            segue: "Segue você",
        },
        {
            nome: "razoesparaacreditar",
            img: "assets/img/razoesparaacreditar.svg",
            segue: "Novo no Instagram",
        },
        {
            nome: "adorable_animals",
            img: "assets/img/adorable_animals.svg",
            segue: "Segue você",
        },
        {
            nome: "smallcutecats",
            img: "assets/img/smallcutecats.svg",
            segue: "Segue você",
        },
    ]
    return(
        <div class="sidebar">
                  <div class="usuario">
                    <img src="assets/img/catanacomics.svg" />
                    <div class="texto">
                      <strong>catanacomics</strong>
                      Catana
                    </div>
                  </div>
        
                  <div class="sugestoes">
                    <div class="titulo">
                      Sugestões para você
                      <div>Ver tudo</div>
                    </div>

                    {sugestoes.map(sugestao => <Sugestao                            
                                nome = {sugestao.nome}
                                img = {sugestao.img}
                                segue = {sugestao.segue}
                            />)}

                  </div>
        
                  <div class="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                  </div>
        
                  <div class="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                  </div>
                </div>
    );
}

export default Sidebar;