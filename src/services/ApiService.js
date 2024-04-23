import axios from 'axios';
import Constants from '../constants/constants'
import { forecastData } from '../constants/forecastData';

// async function  getData() {
// const currentUrl = Constants.BASE_URL+Constants.currentWeatherDetails
// // const currentUrl = 'src/assets/data/currentTemperature.json'
// try {
//  const data = await axios.get(currentUrl)
//  console.log('Data',data)
//  return data;
// } catch(error) {
//   console.log('error',error)
//     throw error;
// }
// }

//  function  getData() {
//   const currentUrl = Constants.BASE_URL+Constants.currentWeatherDetails
//   try {
//     let mypromise = new Promise((resolve, reject) => {
//       axios.get(currentUrl).then((response) => {resolve(response)}, (error)=> reject(error))
//     })
 
//   //  console.log('Data',data)
//    return mypromise;
//   } catch(error) {
//     console.log('error',error)
//       throw error;
//   }
//   }

//Promise

function  getData(location) {
  console.log('getData',location)
  const endPoint = Constants.currentWeatherDetails.replace('{latitude}',location.latitude).replace('{longitude}',location.longitude)
  const currentUrl = Constants.BASE_URL+endPoint
  console.log('currentUrl',currentUrl)
  let mypromise = new Promise(async (resolve, reject) => {
    try {
       const data = await axios.get(currentUrl)
      // const data = await forecastData;
       resolve(data)
    } catch (error) {
      reject(error)
    }

  })
  return mypromise;
  }

  function  getFiveDaysForecastData(location) {
    console.log('getFiveDaysForecastData',location)
    const endPoint = Constants.dayForeCast.replace('{latitude}',location.latitude).replace('{longitude}',location.longitude)

    const currentUrl = Constants.BASE_URL+endPoint
    let mypromise = new Promise(async (resolve, reject) => {
      try {
         const data = await axios.get(currentUrl)
         resolve(data)
      } catch (error) {
        reject(error)
      }
  
    })
    return mypromise;
    }
  


  //Callback
// async function  getData(successCallback, errorCallBAck) {
//   const currentUrl = Constants.BASE_URL+Constants.currentWeatherDetails
  
//     try {
//        const data = await axios.get(currentUrl)
//        successCallback(data)
//     } catch (error) {
//       errorCallBAck(error)
//     }
//   }



export default {getData, getFiveDaysForecastData}