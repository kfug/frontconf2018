var {speakers} = require("../contents/speakers.yml");

export const state = () => {
  return {
    speakers: speakers.filter((speaker)=>{
      return speaker.title
    })

  }
}
