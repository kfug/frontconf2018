var {speakers} = require("../contents/speakers.yml");
var {sponsors,media} = require("../contents/sponsors.yml");

export const state = () => {
  return {
    speakers: speakers.filter((speaker)=>{
      return speaker.title
    }),
    sponsors: {
      media: media.filter((sponsor)=>{
        return true
      }),
      plutinum: sponsors.filter((sponsor)=>{
        return sponsor.rank == "plutinum"
      }),
      gold: sponsors.filter((sponsor)=>{
        return sponsor.rank == "gold"
      }),
      silver: sponsors.filter((sponsor)=>{
        return sponsor.rank == "silver"
      }),
    }
  }
}
