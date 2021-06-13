// Code your solution here
function findMatching(driversArray, nameToFind){
    //const filtered = drivers.filter(name => name.drivers === "Bobby" && "bobby")
    const filtered = driversArray.filter(name => nameToFind.toLowerCase() === name.toLowerCase() )
    // console.log(filtered)
    return filtered
  }


  function fuzzyMatch(arr, saClub){
    const filtered = arr.filter(members => saClub === members)
    return filtered
    }
  


      

