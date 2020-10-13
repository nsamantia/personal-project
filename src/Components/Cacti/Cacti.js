// import React, {Component} from 'react'
// import './Cacti.scss'
// import axios from 'axios'
// import CactiList from './CactiList'
// import Nav from '../Nav/Nav'
// class Cacti extends Component{
//     constructor(){
//         super() 
//         this.state = {
//             cacti: []
//         }
        
        
//     }

//     componentDidMount() {
//         this.getCacti()
//     }

//     getCacti = () => {
//         axios.get(`/api/cacti`).then((res) => {
//             this.setState({
//                 cacti: res.data
//             })
            
//         })
//         .catch(err =>{ console.log(err)})
        
        
//     }

//     render(){
        
//         const mappedCacti = this.state.cacti.map((element, index) => {
//             return(
//                 <CactiList 
//                     cactiListing={element} 
//                     key={element.id}
//                     name={element.name}
//                     price={element.price}
//                     image={element.img}

//                 />
                
                
//             )
//         })
//         console.log(mappedCacti)
//         return(
            
//             <div>
//                 <Nav />
//                 <h2>Cacti</h2>
//                 <div className = "mapped-cacti-container">
                    
//                     {mappedCacti}
//                 </div>
//             </div>
//         )
//     }
    
// }

// export default Cacti

import React,{useState, useEffect} from 'react'
import './Cacti.scss'
import axios from 'axios'
import CactiList from './CactiList'
import Nav from '../Nav/Nav'


const CactiWithHooks = () => {


    const [cacti, setCacti] = useState([])

    useEffect (() =>{getCacti()},[])

    const getCacti = () => {
        axios.get(`/api/cacti`).then(res => 
            setCacti(res.data)
)
    }

    
    const cactiMapped = cacti.map((element) => {
        return (
        <CactiList
        cactiListing={element}
        key={element.id}
        name={element.name}
        price={element.price}
        image={element.img}
        />
        )
        })
        return(
        <div>
            <Nav />
            <div>
               {cactiMapped}
            </div>


        </div>
        )
    
}

export default CactiWithHooks