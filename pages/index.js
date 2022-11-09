import config from "../config.json"
import styled  from "styled-components"





function HomePage() {

    const estilohomepage = {
        background: "red"
    };
    return (
 // chamando os componetes 
        <div style={ estilohomepage }> 
            <Menu></Menu>
            <Header></Header>
            <TimeLine></TimeLine>
        </div>


    );
}
  
export default HomePage 

function Menu() {

        return(
            <div> menu </div>
        )
}


console.log(config.playlist);


function TimeLine(){
    return (

        <div> TimeLine </div>

    )
}


const StyledHeader = styled.div `

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-infor{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px
        
    }
`;


function Header (){
    return(
        <StyledHeader> 
            <img src="" alt="" />
            <section className="user-infor">
                    <img src={`http://github.com/${config.logo}.png`} alt="logo"/>
                <div>
                    <h1>{config.name}</h1>
                    <h2>{config.Job}</h2> 
                </div>
            </section>
        </StyledHeader>
     )
}