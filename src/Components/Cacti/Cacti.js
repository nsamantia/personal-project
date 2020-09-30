import React, {Component} from 'react'
import axios from 'axios'
import CactiList from './CactiList'
import Nav from '../Nav/Nav'
class Cacti extends Component{
    constructor(){
        super() 
        this.state = {
            cacti: []
        }
        
        
    }

    componentDidMount() {
        this.getCacti()
    }

    getCacti = () => {
        axios.get(`/api/cacti`).then((res) => {
            this.setState({
                cacti: res.data
            })
            
        })
        .catch(err =>{ console.log(err)})
        
        
    }

    render(){
        
        const mappedCacti = this.state.cacti.map((element, index) => {
            return(
                <CactiList 
                    cactiListing={element} 
                    key={element.id}
                    name={element.name}
                    price={element.price}
                    image={element.img}

                />
                
                
            )
        })
        console.log(mappedCacti)
        return(
            
            <div>
                <Nav />
                
                Cacti.js
                {mappedCacti}

            </div>
        )
    }
    
}

export default Cacti