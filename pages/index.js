import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons';
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades){
  return (
    <Box>
        <img src={`https://github.com/${propriedades.githubUser}.png`} style= {{borderRadius:'8px'}}/>
        <hr/>
        <p>
          <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
            @{propriedades.githubUser}
          </a>
        </p>
        <hr/>

        <AlurakutProfileSidebarMenuDefault/>
    </Box>
      
  )}

export default function Home() {
  const [comunidades, setCommunities] = React.useState([{
    id: '221345678908765543',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
  const githubUser = 'NevesHenry';
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ];

  return (
    <>
    <AlurakutMenu/>
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <ProfileSidebar githubUser={githubUser}/>
      </div>
      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box>
          <h1 className="title">
            Bem Vindo, {githubUser}
          </h1>
          <OrkutNostalgicIconSet/>
        </Box>

        <Box>
          <h2 className="subtitle">O que vc deseja fazer</h2>
          <form onSubmit={function handleCreateCommunity(e){
            e.preventDefault();
            const formData = new FormData(e.target);
            console.log('Field: ', formData.get('title'));
            console.log('Field: ', formData.get('image'));

            const comunidade = {
              id: new Date().toISOString(),
              title: formData.get('title'),
              image: formData.get('image')
            }
            const UpdatedCommunities = [...comunidades,comunidade];
            setCommunities(UpdatedCommunities);
            }}>

            <div>
              <input placeholder="Qual vai ser o nome da sua comunidade" 
              name="title" 
              aria-label="Qual vai ser o nome da sua comunidade?"
              type="text"/>
            </div>
            <div>
              <input placeholder="Coloque uma URL para usarmos de capa" 
              name="image" 
              aria-label="Coloque uma URL para usarmos de capa"
              />
            </div>
            <button>
              Criar comunidade
            </button>
          </form>
        </Box>
      </div>
      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
      <ProfileRelationsBoxWrapper>
        <ul>
            {comunidades.map((currentItem) => {
              return (
                <li key={currentItem.id}>
                  <a href={`/users/${currentItem.title}`} key={currentItem.title}>
                    <img src={currentItem.image}/>
                    <span>{currentItem.title}</span>
                  </a>
                </li>
              )
            })}
          </ul>
      </ProfileRelationsBoxWrapper>
        <ProfileRelationsBoxWrapper>
          <h2 className="smalltitle"> 
          Pessoas da Comunidade ({pessoasFavoritas.length})
          </h2>

          <ul>
            {pessoasFavoritas.map((currentItem) => {
              return (
                <li key={currentItem}>
                  <a href={`/users/${currentItem}`}>
                    <img src={`http://github.com/${currentItem}.png`}/>
                    <span>{currentItem}</span>
                  </a>
                </li>
              )
            })}
          </ul>

        </ProfileRelationsBoxWrapper>
      
      </div>
    </MainGrid>
    </>
  )
}
