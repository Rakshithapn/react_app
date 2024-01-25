//For external styling
import "./PropsComponent.css"

function PropsComponent(props){
// // For internal styling
//     internal const StyleAttr = {
//         backgroundColor: "black",
//         color: "white"
//     }
    return(
        // <div style:(StyleAttr)> </div> 
        // // <div style:{{color:"white"}}></div>   -->inline
        <div >
           <h1> Hello, {props.name} This is {props.course} class </h1>
        </div>
    )
}
export default PropsComponent;

//For inline styling, style={{backgroundColor:"black", color:"white"}}