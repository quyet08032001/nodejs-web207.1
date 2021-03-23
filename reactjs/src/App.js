import logo from "./logo.svg";
import "./App.css";
import Header from './components/Header';
import Banner from "./components/Banner";
import Product from "./components/Product";
import Footer from "./components/Footer";
import Hello from "./components/Hello";

function App() {

    // return ( <div>
    //     <Header/>
    //     <main className = "container" >
    //     <Banner/>
    //     <Product/>
    //     <Footer/>
    //     </main> </div >

    // );

    
//     const students=[
//         {id:'ph01',name:'cường'},
//         {id:'ph02',name:'nhân'},
//         {id:'ph03',name:'công'}
//     ]
//     return(
// <div>
//     <table>
//         <tbody>
//             {students.map((product,index)=>(
//                 <tr key={index}><td>
//                     {product.name}
//                     </td>
//                     </tr>
//             ))}
//         </tbody>
//     </table>
// </div>
//     );


const students=[
            {id:'ph01',name:'cường'},
            {id:'ph02',name:'nhân'},
            {id:'ph03',name:'công'}
        ]
return(
    <div>
        {students.map((students,index)=>(
             <p key={index}>Xin chào <Hello name={students.name }/></p>
        ))}
    </div>
);
    
}

export default App;