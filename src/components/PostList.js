import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
    state = {
      posts: [
        {
          id: 1,
          author: {
            name: "Cage, Nicolas",
            avatar: "https:www.placecage.com/35/35/"
          },
          date: "04 Jun 2019",
          content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
          comments: [
            {
              id: 1,
              author: {
                name: "Diego Fernandes",
                avatar: "https:www.placecage.com/34/34/"
              },
              content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
            }
          ]
        },
        {
            id: 2,
            author: {
              name: "Nicolas Cage",
              avatar: "https:www.placecage.com/32/32/"
            },
            date: "04 Jun 2019",
            content: "Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.",
            comments: [
              {
                id: 1,
                author: {
                  name: "Nicolas Kim Coppola",
                  avatar: "https:www.placecage.com/31/31/"
                },
                content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
              },
              {
                id: 2,
                author: {
                  name: "Motoqueiro Fantasma",
                  avatar: "https:www.placecage.com/30/30/"
                },
                content: "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
              }
            ]
          }
      ]
    };

    render() {
        return (
            <div className="postlist">
                {this.state.posts.map(post => {
                    return <Post key={post.id} {...post} />;
                }
                )}
            </div>
        )
    }
    
  }

  export default PostList;