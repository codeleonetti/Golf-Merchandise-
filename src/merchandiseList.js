import { render } from "@testing-library/react"
import React from "react"
import GolfClothing from "./clothing"
import GolfClub from "./golfClubs"
import FootWear from "./footWear"
import Merchandise from "./merchandise"



// class GolfBrand extends React.Component {}
// class GolfBrand extends React.Component {}
// class GolfBrand extends React.Component {}
// class GolfBrand extends React.Component {}
// class GolfBrand extends React.Component {}
// class GolfBrand extends React.Component {}
// class GolfBrand extends React.Component {}
// class GolfBrand extends React.Component {}
// class GolfBrand extends React.Component {}
// class GolfBrand extends React.Component {}
class MerchandiseList extends React.Component {
    // store all data:
    state = {
        // the array of data:
        // clubBrandAll:[
        //     'Titleist', 'Callaway', 'TaylorMade', 'Mizuno', 'Cobra', 'Ping', 'Cleveland',
        //     'Odyssey', 'Ben Hogan', 'Srixon', 'PXG'
        // ]
        // ,
        // clothingBrandAll:['Nike', 'Greg Norman', 'Puma', 'Adidas', 'Callaway', 'PXG', 'TaylorMade',
        //  'Oakley', 'Under Armour', 'Foot Joy', 'Titleist']
        // ,

        // footwearBrandAll:['Foot Joy', 'Nike', 'Callaway', 'Puma', 'Adidas', 'Skechers']
        allMerch: ["brand - product type - name of product ", 
        'Titleist - golfclub - irons ', 'Titleist - golfclub - driver', 'Titleist - golfclub - putter ', 'Titleist - clothing - shirts',
        'Callaway - golfclub - irons', 'Callaway - golfclub - driver', 'Odyssey - golfclub - putter', 'Callaway - clothing - shirts', 'Callaway - clothing - shorts', 'Callaway - footwear - shoes',
        'Taylormade - golfclub - irons', 'Taylormade - golfclub - driver', 'TaylorMade - golfclub - putter', 'TaylorMade - clothing - shirts',
        'Mizuno - golfclub - irons', 'Mizuno - golfclub - driver',
        'Cobra - golfclub - irons', 'Cobra - golfclub - driver',
        'Ping - golfclub - irons', 'Ping - golfclub - driver', 'Ping - golfclub - putter',
        'Cleveland - golfclub - irons', 'Cleveland - golfclub - driver',
        'PXG - golfclub - irons', 'PXG - golfclub - driver', 'PXG - golfclub - putter', 'PXG - clothing - shirts', 'PXG - clothing - shorts',
        'Ben Hogan - golfclub - irons', 'Ben Hogan - golfclub - driver', 'Ben Hogan - golfclub - putter',
        'Srixon - golfclub - irons', 'Srixon - golfclub - driver',
        'Nike - clothing - shirts', 'Nike - clothing - shorts', 'Nike - footwear - shoes',
        'Greg Norman - clothing - shirts', 'Greg Norman - clothing - shorts',
        'Puma - clothing - shirts', 'Puma - clothing - shorts', 'Puma - footwear - shoes',
        'Adidas - clothing - shirts', 'Adidas - clothing - shorts', 'Adidas - footwear - shoes',
        'Foot Joy - clothing - shirts', 'Foot Joy - clothing - shorts', 'Foot Joy - footwear - shoes',
        'Under Armour - clothing - shirts', 'Under Armour - clothing - shorts', 'Under Armour - footwear - shoes',
        'Oakley - clothing - shorts', 'Oakley - clothing - shirts',
        'Skechers - footwear - shoes'
        ]

        }
        // dont need this is just for sanity check
        // clubState=()=>{console.log('should see clubs   ', this.state.clubBrandAll) }
        //  render(){ this.state.clubBrandAll;
        // this.clubState()
           
        render(){
            // const clubBrands = this.state.clubBrandAll.map( (names) =>{ return <GolfClub a={names}  b={names}/> })
            // const clothingBrands = this.state.clothingBrandAll.map( (clothes) =>{ return <GolfClothing a={clothes}/> })
            // const footwearBrands = this.state.footwearBrandAll.map( (shoes) =>{ return <FootWear a={shoes}/> })
            const allOfMerchandise = this.state.allMerch.map( (merch) =>{ return <Merchandise a={merch} /> })
            return(<>
            {allOfMerchandise}
            {/* {clubBrands}
            {clothingBrands}
            {footwearBrands} */}
            </>);

    }
}

export default MerchandiseList 