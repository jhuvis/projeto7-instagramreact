import React from "react";

function Post(props)
{
  const [heart, setHeart] = React.useState("heart-outline");
  const [red, setRed] = React.useState("md hydrated black");

  function like()
  {
    
    if(heart === "heart-outline")
    {
      setHeart("heart");
      setRed("md hydrated red");
    }
    else
    {
      setHeart("heart-outline");
      setRed("md hydrated black");
    }
  }

    return(
        <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src={props.imgUsuario} />
              {props.nome}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img onClick={() => like()} src={props.conteudo} />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon onClick={() => like()} name={heart} class={red}>a</ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src={props.imgCurtidas} />
              <div class="texto">
                Curtido por <strong>{props.nomeCortidas}</strong> e <strong>outras {props.curtidas} pessoas</strong>
              </div>
            </div>
          </div>
        </div>
    );
}

function Posts()
{
    const posts = [
        {
            imgUsuario: "assets/img/meowed.svg",
            nome: "meowed",
            conteudo: "assets/img/gato-telefone.svg",
            imgCurtidas: "assets/img/respondeai.svg",
            nomeCortidas: "respondeai",
            curtidas: 101.523,
        },
        {
            imgUsuario: "assets/img/barked.svg",
            nome: "barked",
            conteudo: "assets/img/dog.svg",
            imgCurtidas: "assets/img/adorable_animals.svg",
            nomeCortidas: "adorable_animal",
            curtidas: 99.159,
        },
    ];


    return(
        <div class="posts">
        {posts.map(post => <Post                          
                                imgUsuario = {post.imgUsuario}
                                nome = {post.nome}
                                conteudo = {post.conteudo}
                                imgCurtidas = {post.imgCurtidas}
                                nomeCortidas = {post.nomeCortidas}
                                curtidas = {post.curtidas}
                            />)} 

        
        </div>
    );
}

export default Posts;