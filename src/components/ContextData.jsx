import {  useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default function ContextData(){
const userValueFromStorage = JSON.parse(localStorage.getItem('myUser'))
const [userValues, setUserValues]=useState( userValueFromStorage)
userValues.length > 1 && localStorage.setItem("myUser", JSON.stringify(userValues));
    let ImagesForApi = [
        {name:"abdominals", image: "https://www.ericfavre.com/lifestyle/uk/wp-content/uploads/sites/15/2021/09/approche-biomecanique-1024x1024-1.jpg"},
        {name:"abductors", image: "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/muscle-groups/full/Abductors.jpg"},
        {name:"adductors", image: "http://cloud2.golfloopy.com/wp-content/uploads/2014/09/Adductor-magnus-300x300@2x.jpg"},
        {name:"biceps", image: "https://www.shoulder-pain-explained.com/images/biceps-stretch-exercises.jpg"},
        {name:"calves", image: "https://www.sportsinjuryclinic.net/wp-content/uploads/2019/02/calf-strain800white-800x426.jpg"},
        {name:"chest", image: "https://i0.wp.com/www.fitzabout.com/wp-content/uploads/2022/04/Pectorals-Chest-Fitzabout.jpg"},
        {name:"forearms", image: "https://learnmuscles.com/wp-content/uploads/2020/12/AnteriorForearmSuperficial_Watermarked.jpg"},
        {name:"glutes", image: "https://cdn.mos.cms.futurecdn.net/umUz4ZtLxLFT4iyQ5JXXxZ-1200-80.jpg.webp"},
        {name:"hamstrings", image: "https://bodycomplete.co.uk/wp-content/uploads/2019/06/58756532_s-450x315.jpg"},
        {name:"lowerback", image: "https://images.ctfassets.net/oc83wx5cwffk/spu_article_fid38474_asset/0867c96e1bdd1c874bf1ed22694be6ee/4199-lower-back-pain-section50824719_ml.jpg"},
        {name:"middleback", image: "https://www.physio-pedia.com/images/thumb/b/b7/Latissimus-dorsi.jpg/200px-Latissimus-dorsi.jpg"},
        {name:"neck", image: "https://www.kenhub.com/thumbor/lD76cK0IXRie16Er5an8NftOt-0=/fit-in/800x1600/filters:watermark(/images/logo_url.png,-10,-10,0):background_color(FFFFFF):format(jpeg)/images/library/14150/Neck_muscles.png"},
        {name:"quadriceps", image: "src"},
        {name:"traps", image: "src"},
        {name:"triceps", image: "src"},]
        //   userValues[0].userName='RoeiMaster' 
        //   userValues[0].firstName= 'Roei'
        //   userValues[0].lastName= 'Shalom'
        //   userValues[0].password= '12345'
        //   userValues[0].verifyPassword= '12345'
        //   userValues[0].date='20/01/2001'
        //   userValues[0].E_Mail='roeiz100@walla.com'
        //   userValues[0].difficulty='expert'
       
        return{
            userValues, setUserValues,ImagesForApi
        }
    
    
    
    }
   

//     ImagesForApi.filter((sinle)=>{
//         return sinle.name === muscle
//     })

