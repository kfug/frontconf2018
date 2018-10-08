var {speakers} = require("json-loader!yaml-loader!../contents/speakers.yml");

export const state = () => {
  return {
    speakers: speakers.filter((speaker)=>{
      return speaker.title
    })

  }
}
