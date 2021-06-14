// Code your solution here
function findMatching(driversArray, nameToFind){
    //const filtered = drivers.filter(name => name.drivers === "Bobby" && "bobby")
    const filtered = driversArray.filter(name => nameToFind.toLowerCase() === name.toLowerCase() )
     //console.log(filtered)
    return filtered
    
  }


  function fuzzyMatch(driversArray, lettersToFind){
    const filtered = driversArray.filter(driverNames => {
    
     return driverNames.toLowerCase().startsWith(lettersToFind.toLowerCase());
      
      //console.log('driverNames', driverNames)
      //console.log('lettersTofind', lettersToFind)
      
    })
    return filtered
  }

  function matchName(driversArray, nameTofind){
    const filtered = driversArray.filter(driverNames => nameTofind === driverNames)
    return filtered
      
  }
 
//console.log('namesToFind', namesToFind)
 // console.log('nameLocation', nameLocation)
  

  


      

