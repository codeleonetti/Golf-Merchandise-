import React from 'react';
//import {connect} from 'react-redux';
import Merchandise from "./merchandise";
import {useSelector} from 'react-redux'

 const MerchandiseList = ()=>{
           const merchList = useSelector((state) => state);
            console.log(merchList);
           
            
           
            return(
                <div className='containerlist'>
                    <Merchandise/>
                </div>

           
            );


}
// const MerchandiseList = (props)=>{
//     console.log(props)
        
//         const allMerch = props.Merchandise.map( (product) =>{ return <Merchandise p={product}/>})
//         // const allMerch = props.stateOfMerch.map( (product) =>{ return <Merchandise p={product}/>})
    
//      return(
    
//         {allMerch}
//      );
//      key={product.id} p={product}

// }

// const mapStateToProps =(state)=>{
//     return{
//         stateOfMerch: state.merchandise
//     }
// }

export default MerchandiseList;

// export default connect(MerchandiseList);
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
        // dont need this is just for sanity check
        // clubState=()=>{console.log('should see clubs   ', this.state.clubBrandAll) }
        //  render(){ this.state.clubBrandAll;
        // this.clubState()
         {/* {clubBrands}
            {clothingBrands}
            {footwearBrands} */}

             // const clubBrands = this.state.clubBrandAll.map( (names) =>{ return <GolfClub a={names}  b={names}/> })
            // const clothingBrands = this.state.clothingBrandAll.map( (clothes) =>{ return <GolfClothing a={clothes}/> })
            // const footwearBrands = this.state.footwearBrandAll.map( (shoes) =>{ return <FootWear a={shoes}/> })

            // state = {
       
            //     allMerch: [
            //     {id: 1, brand:'Titleist', category: 'golfclub', product:'irons'}, 
            //     {id: 2, brand:'Titleist', category:'golfclub', product:'driver'}, 
            //     {id: 3, brand:'Titleist', category:'golfclub', product:'putter '}, 
            //     {id: 4, brand:'Titleist', category:'clothing', product:'shirts'},
            //     {id: 5, brand:'Callaway', category:'golfclub', product:'irons'}, 
            //     {id: 6, brand:'Callaway', category:'golfclub', product:'driver'}, 
            //     {id: 7, brand:'Odyssey', category:'golfclub', product:'putter'},       
            //     {id: 8, brand:'Callaway', category:'clothing', product:'shirts'}, 
            //     {id: 9, brand:'Callaway', category:'clothing', product:'shorts'}, 
            //     {id: 10, brand:'Callaway', category:'footwear', product:'shoes'},
            //     {id: 11, brand:'Taylormade', category:'golfclub', product:'irons'},  
            //     {id: 12, brand:'Taylormade', category:'golfclub', product:'driver'}, 
            //     {id: 13, brand:'TaylorMade', category:'golfclub', product:'putter'}, 
            //     {id: 14, brand:'TaylorMade', category:'clothing', product:'shirts'},
            //     {id: 15, brand:'Mizuno', category:'golfclub', product:'irons'}, 
            //     {id: 16, brand:'Mizuno', category:'golfclub', product:'driver'},
            //     {id: 17, brand:'Cobra', category:'golfclub', product:'irons'}, 
            //     {id: 18, brand:'Cobra', category:'golfclub', product:'driver'},
            //     {id: 19, brand:'Ping', category:'golfclub', product:'irons'}, 
            //     {id: 20, brand:'Ping', category:'golfclub', product:'driver'}, 
            //     {id: 21, brand:'Ping', category:'golfclub', product:'putter'},
            //     {id: 22, brand:'Cleveland', category:'golfclub', product:'irons'}, 
            //     {id: 23, brand:'Cleveland', category:'golfclub', product:'driver'},
            //     {id: 24, brand:'PXG', category:'golfclub', product:'irons'}, 
            //     {id: 25, brand:'PXG', category:'golfclub', product:'driver'}, 
            //     {id: 26, brand:'PXG', category:'golfclub', product:'putter'}, 
            //     {id: 27, brand:'PXG', category:'clothing', product:'shirts'}, 
            //     {id: 28, brand:'PXG', category:'clothing', product:'shorts'},
            //     {id: 29, brand:'Ben Hogan', category:'golfclub', product:'irons'}, 
            //     {id: 30, brand:'Ben Hogan', category:'golfclub', product:'driver'}, 
            //     {id: 31, brand:'Ben Hogan', category:'golfclub', product:'putter'},
            //     {id: 32, brand:'Srixon', category:'golfclub', product:'irons'}, 
            //     {id: 33, brand:'Srixon', category:'golfclub', product:'driver'},
            //     {id: 34, brand:'Nike', category:'clothing', product:'shirts'}, 
            //     {id: 35, brand:'Nike', category:'clothing', product:'shorts'}, 
            //     {id: 36, brand:'Nike', category:'footwear', product:'shoes'},
            //     {id: 37, brand:'Greg Norman', category:'clothing', product:'shirts'}, 
            //     {id: 38, brand:'Greg Norman', category:'clothing', product:'shorts'},
            //     {id: 40, brand:'Puma', category:'clothing', product:'shirts'}, 
            //     {id: 41, brand:'Puma', category:'clothing', product:'shorts'}, 
            //     {id: 42, brand:'Puma', category:'footwear' , product:'shoes'},
            //     {id: 43, brand:'Adidas', category:'clothing', product:'shirts'}, 
            //     {id: 44, brand:'Adidas', category:'clothing', product:'shorts'}, 
            //     {id: 45, brand:'Adidas', category:'footwear', product:'shoes'},
            //     {id: 46, brand:'Foot Joy', category:'clothing', product:'shirts'}, 
            //     {id: 47, brand:'Foot Joy', category:'clothing', product:'shorts'}, 
            //     {id: 48, brand:'Foot Joy', category:'footwear', product:'shoes'},
            //     {id: 49, brand:'Under Armour', category:'clothing', product:'shirts'}, 
            //     {id: 50, brand:'Under Armour', category:'clothing', product:'shorts'}, 
            //     {id: 51, brand:'Under Armour', category:'footwear', product:'shoes'},
            //     {id: 52, brand:'Oakley', category:'clothing', product:'shorts'}, 
            //     {id: 53, brand:'Oakley', category:'clothing', product:'shirts'},
            //     {id: 54, brand:'Skechers', category:'footwear', product:'shoes'}
            //     ]
        
            //     }
            // {allOfMerchandise}
