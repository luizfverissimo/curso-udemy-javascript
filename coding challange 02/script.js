let johnTeam = [89, 120, 103]
let mikeTeam = [116, 204, 123]
let maryTeam = [97, 134, 105]

let meanJT = (johnTeam[0] + johnTeam[1] + johnTeam[2]) / johnTeam.length
let meanMT = (mikeTeam[0] + mikeTeam[1] + mikeTeam[2]) / mikeTeam.length
let meanMaT = (maryTeam[0] + maryTeam[1] + maryTeam[2]) / maryTeam.length




if(meanMT > meanJT && meanMT > meanMaT){
    console.log(`Mike's team is WINNER with average score of ${meanMT} point in ${mikeTeam.length} matches`)
} else if(meanJT > meanMT && meanJT > meanMaT){
    console.log(`John's team is WINNER with average score of ${meanJT} point in ${johnTeam.length} matches`)
} else if(meanMT === meanJT || meanJT === meanMaT || meanMaT === meanMT){ 
    console.log('Os times empataram!')
} else{
    console.log(`Mars's team is WINNER with average score of ${meanMaT} point in ${maryTeam.length} matches`)
}

