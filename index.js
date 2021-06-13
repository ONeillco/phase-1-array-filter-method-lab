// Code your solution here
function findMatching(driversArray, nameToFind){
    //const filtered = drivers.filter(name => name.drivers === "Bobby" && "bobby")
    const filtered = driversArray.filter(name => nameToFind.toLowerCase() === name.toLowerCase() )
    // console.log(filtered)
    return filtered
  }


  function fuzzyMatch(driversArray, lettersToFind){
    const filtered = driversArray.filter(driverNames => {
      lettersToFind === driverNames;
      
      //console.log('driverNames', driverNames)
      console.log('lettersTofind', lettersToFind)
      
    })
    return filtered
  }
  


      

