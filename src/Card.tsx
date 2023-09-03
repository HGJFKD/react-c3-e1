export interface Card {
    title : string,
    picture: string,
    text: string
}

const CardFunc  = ({color, title, picture ,text}): JSX.Element => {
  return (
    <>
      <div id= "card" style= {{backgroundColor :color}}>
        <h3> {title} </h3> 
        <img src={picture} alt="picture"/>
        <h5> {text} </h5>
      </div>
    </>
  )
}

export default CardFunc