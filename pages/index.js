import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons';
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades){
  console.log(propriedades)
  return (
    <Box>
        <img src={`https://github.com/${propriedades.githubUser}.png`} style= {{borderRadius:'8px'}}/>
      </Box>
  )}
export default function Home() {
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
            Bem Vindo
          </h1>
          <OrkutNostalgicIconSet/>
        </Box>
      </div>
      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        <ProfileRelationsBoxWrapper>
          <h2 className="smalltitle"> 
          Pessoas da Comunidade ({pessoasFavoritas.length})
          </h2>

          <ul>
            {pessoasFavoritas.map((currentItem) => {
              return (
                <li>
                  <a href={`/users/${currentItem}`} key={currentItem}>
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
